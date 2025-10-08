// /src/utility/RouteChangeTracker.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // S'initialise une seule fois au premier chargement de la page
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize("G-XXXXXXXXXX"); // Remplace par ton ID
    }
    setInitialized(true);
  }, []);

  // Envoie l'événement "pageview" à chaque changement d'URL
  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [initialized, location]);

  return null; // Ce composant n'affiche rien
};

export default RouteChangeTracker;