import { useState } from "react";

import Close from '../../assets/icons/close.svg?react';

import './MenuItem.css';


const MenuItem = ({ menuTitle, moreInfo, menuDescription, firstOverlayInfo, secondOverlayInfo, isCentered }) => {

  const [overlayOn, setOverlayOn] = useState(false);

  const setterOverlayOn = () => {
    return setOverlayOn(true);
  }

  const setterOverlayOff = () => {
    return setOverlayOn(false);
  }


  const MoreInfosOverlay = ({ firstInfo, secondInfo, handleKeyDown }) => {

    return (
      <div
        className="more-info-wrapper"
        style={overlayOn ? { opacity: 1 } : { opacity: 0 }}
        role="dialog"
        aria-modal="true"
      >
        <div className="heading">
          Informations supplémentaires
          <div
            className="close-button"
            onClick={setterOverlayOff}
            onKeyDown={(e) => handleKeyDown(e, setterOverlayOff)}
            role="button"
            tabIndex={0}
            aria-label="Fermer les informations supplémentaires"
          >
            <Close />
          </div>
        </div>

        <div className="more-info-divider"></div>

        <div
          className="more-info-content"
        >

          {

            firstInfo
              ?
              <div className="content">
                <p className="first-info">*</p>
                <p className="body2 second-info">{firstInfo}</p>
              </div>
              : null
          }

          {
            secondInfo
              ?
              <div className="content">
                <p className="first-info">**</p>
                <p className="body2 second-info">{secondInfo}</p>
              </div>
              : null
          }

        </div>

      </div>
    );
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div
      className="menu-item-wrapper"
      style={overlayOn ? { overflow: 'visible' } : { overflow: 'hidden' }}
    >

      <div
        className="menu-item-title"
        onClick={overlayOn ? setterOverlayOff : setterOverlayOn}
        onKeyDown={(e) => handleKeyDown(e, overlayOn ? setterOverlayOff : setterOverlayOn)}
        role={firstOverlayInfo || secondOverlayInfo ? "button" : undefined}
        tabIndex={firstOverlayInfo || secondOverlayInfo ? 0 : undefined}
        style={{
          ...(firstOverlayInfo || secondOverlayInfo ? { cursor: "pointer" } : { cursor: 'unset' }),
          ...(isCentered ? { justifyContent: "center" } : {})
        }}
        aria-expanded={overlayOn}
        aria-label={firstOverlayInfo || secondOverlayInfo ? `Voir plus d'informations sur ${menuTitle}` : undefined}
      >
        <p className="core-menu-title">{menuTitle}</p>
        <p
          className="core-menu-more-info">{moreInfo}
        </p>
      </div>

      {
        menuDescription
          ? <p
            style={isCentered ? { textAlign: 'center' } : { textAlign: 'unset' }}
            className="body1 menu-item-description">{menuDescription}
          </p>
          : null
      }

      {
        firstOverlayInfo || secondOverlayInfo
          ? <MoreInfosOverlay firstInfo={firstOverlayInfo} secondInfo={secondOverlayInfo} handleKeyDown={handleKeyDown} />
          : null
      }

    </div >
  );
};


export default MenuItem;