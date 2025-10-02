import { useState } from "react";

import Close from '../../assets/icons/close.svg?react';

import './MenuItem.css';


const MenuItem = ({ menuTitle, moreInfo, menuDescription, firstOverlayInfo, secondOverlayInfo }) => {

  const [overlayOn, setOverlayOn] = useState(false);

  const setterOverlayOn = () => {
    return setOverlayOn(true);
  }

  const setterOverlayOff = () => {
    return setOverlayOn(false);
  }


  const MoreInfosOverlay = ({ firstInfo, secondInfo }) => {

    return (
      <div
        className="more-info-wrapper"
        style={overlayOn ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="heading">
          Informations supplémentaires
          <div
            className="close-button"
            onClick={setterOverlayOff}
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

  return (
    <div
      className="menu-item-wrapper"
      style={overlayOn ? { overflow: 'visible' } : { overflow: 'hidden' }}
    >

      <div
        className="menu-item-title"
        onClick={overlayOn ? setterOverlayOff : setterOverlayOn}
        style={firstOverlayInfo || secondOverlayInfo ? { cursor: "pointer" } : { cursor: 'unset' }}
      >
        <p>{menuTitle}</p>
        <p>{moreInfo}</p>
      </div>

      {
        menuDescription
          ? <p className="body1 menu-item-description">{menuDescription}</p>
          : null
      }

      {
        firstOverlayInfo || secondOverlayInfo
          ? <MoreInfosOverlay firstInfo={firstOverlayInfo} secondInfo={secondOverlayInfo} />
          : null
      }

    </div>
  );
};


export default MenuItem;