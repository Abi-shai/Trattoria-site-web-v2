// /src/hooks/useScrollDirection.js
import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // On ne fait rien si le scroll est très faible (pour éviter les faux positifs)
      if (Math.abs(currentScrollY - lastScrollY) < 20) {
        return;
      }

      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    // Ajoute l'écouteur d'événement
    window.addEventListener("scroll", updateScrollDirection);

    // Nettoie l'écouteur quand le composant est démonté
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une fois

  return scrollDirection;
};