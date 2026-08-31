import { useState, useEffect, useContext } from "react";
import FullScreenStateContext from "../../context/FullscreenContext";

import { useScrollDirection } from "../../utility/HidingElementScroll";

import CloseICon from '../../assets/icons/close.svg?react';

import './AnnoncementBar.css';

const REOPENING = 'reouverture-restaurant_2026';

const AnnoncementBar = () => {
  const { isBannerOpen, closeBanner } = useContext(FullScreenStateContext)
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem(REOPENING);

    console.log(hasSeenBanner);

    if (hasSeenBanner) {
      closeBanner();
    };

  });


  const setterCarteBanner = () => {
    try {
      localStorage.setItem(REOPENING, 'true');
    } catch (error) {
      console.error("Impossible de sauvegarder le choix", error);
    }

    console.log(localStorage.getItem(REOPENING));

    closeBanner();
  }


  return (
    isBannerOpen
      ?
      <div
        className={`annoncement-wrapper ${scrollDirection === 'down' ? 'hidden-and-banner-open' : ''}`}
      >
        <p className="body2">La Trattoria Da Alex est de nouveau ouvert !</p>
        <div className="annonc-icon-wrapper" onClick={setterCarteBanner}>
          <CloseICon />
        </div>
      </div >
      : null
  );

};

export default AnnoncementBar;