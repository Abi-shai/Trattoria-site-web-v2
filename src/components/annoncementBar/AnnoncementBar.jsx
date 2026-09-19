import { useState, useEffect, useContext } from "react";
import FullScreenStateContext from "../../context/FullscreenContext";

import { useScrollDirection } from "../../utility/HidingElementScroll";

import CloseICon from '../../assets/icons/close.svg?react';

import './AnnoncementBar.css';

const WHATSAPP_BANNER_KEY = 'canal-whatsapp_2026';
const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb8L7xl89inoCRMyJl2g';

const AnnoncementBar = () => {
  const { isBannerOpen, closeBanner } = useContext(FullScreenStateContext)
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem(WHATSAPP_BANNER_KEY);

    console.log(hasSeenBanner);

    if (hasSeenBanner) {
      closeBanner();
    };

  });


  const dismissBanner = () => {
    try {
      localStorage.setItem(WHATSAPP_BANNER_KEY, 'true');
    } catch (error) {
      console.error("Impossible de sauvegarder le choix", error);
    }

    console.log(localStorage.getItem(WHATSAPP_BANNER_KEY));

    closeBanner();
  }


  return (
    isBannerOpen
      ?
      <div
        className={`annoncement-wrapper ${scrollDirection === 'down' ? 'hidden-and-banner-open' : ''}`}
      >
        <p className="body2">
          <a
            className="annonc-link"
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivez la Trattoria Da Alex sur WhatsApp
          </a>
        </p>
        <div className="annonc-icon-wrapper" onClick={dismissBanner}>
          <CloseICon />
        </div>
      </div >
      : null
  );

};

export default AnnoncementBar;