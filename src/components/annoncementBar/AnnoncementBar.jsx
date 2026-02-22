import { useState, useEffect, useContext } from "react";
import FullScreenStateContext from "../../context/FullscreenContext";

import { useScrollDirection } from "../../utility/HidingElementScroll";

import CloseICon from '../../assets/icons/close.svg?react';

import './AnnoncementBar.css';

const NEW_CARTA = 'carte-official_2026';

const AnnoncementBar = () => {
  const { isBannerOpen, closeBanner } = useContext(FullScreenStateContext)
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem(NEW_CARTA);

    console.log(hasSeenBanner);

    if (hasSeenBanner) {
      closeBanner();
    };

  });


  const setterCarteBanner = () => {
    try {
      localStorage.setItem(NEW_CARTA, 'true');
    } catch (error) {
      console.error("Impossible de sauvegarder le choix", error);
    }

    console.log(localStorage.getItem(NEW_CARTA));

    closeBanner();
  }


  return (
    isBannerOpen
      ?
      <div
        className={`annoncement-wrapper ${scrollDirection === 'down' ? 'hidden-and-banner-open' : ''}`}
      >
        <p className="body2">LA CARTE 2026 EST DISPONIBLE !</p>
        <div className="annonc-icon-wrapper" onClick={setterCarteBanner}>
          <CloseICon />
        </div>
      </div >
      : null
  );

};

export default AnnoncementBar;