// /src/components/ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Extrait le "pathname" (ex: "/contact") de l'objet location
  const { pathname } = useLocation();

  // Cet effet s'exécute à chaque fois que le "pathname" change
  useEffect(() => {
    // Fait remonter la fenêtre en haut de la page
    window.scrollTo(0, 0);
  }, [pathname]); // Le tableau de dépendances avec "pathname" est crucial

  // Ce composant n'affiche rien, il n'a qu'un effet de bord
  return null;
}

export default ScrollToTop;