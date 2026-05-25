import { useState, useEffect, useContext } from 'react';
import FullScreenStateContext from "../../context/FullscreenContext";

import { ButtonNavLink } from '../Button/Button';
import CloseIcon from '../../assets/icons/close.svg?react';

import EventImage from '../../assets/images/current-event.jpeg';

import './eventModal.css';


const CURRENT_EVENT_ID = 'propositions-du-mois-avril-2026';
const DISPLAY_DELAY = 3000;

const EventModal = () => {
  const { eventModal, openEventModal, closeEventModal } = useContext(FullScreenStateContext);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

  // Modale désactivée en attendant les propositions de Mai
  useEffect(() => {}, [openEventModal]);


  // Fonction pour gérer la fermeture
  const handleClose = () => {
    setShouldAnimateIn(false);
    setTimeout(() => {
      try {
        localStorage.setItem(CURRENT_EVENT_ID, 'true');
      } catch (error) {
        console.error("Impossible de sauvegarder le choix", error);
      }
      closeEventModal();
    }, 750);

    if (!eventModal) {
      return null;
    }
  };


  return (
    <>
      {
        eventModal
          ? <div className={`modal-event-wrapper ${shouldAnimateIn ? 'is-active' : ''}`}>
            <div className="modal-event-core-content-wrapper">

              <img src={EventImage} alt="Évènement à la Trattoria Da Alex" />
              <div className="modal-event-details">

                <div className="event-occasion-and-infos">
                  {/* Commented out the data because of the current event nature */}
                  {/* <p className="body1 day">Mercredi 12 Novembre</p> */}
                  <div className="event-divider"></div>
                  <h3>Nouvelles propositions du mois</h3>
                  <p className="body1 infos-of-the-event">Il y'a des nouveautés à la Trattoria Da Alex en ce moment...découvrez les nouvelles propositions du mois !</p>
                </div>

                <div className="event-cta-wrapper">
                  <ButtonNavLink
                    link="/carte/propositions-du-mois"
                    content="Découvrir les propositions"
                    onClick={handleClose}
                  />
                </div>

              </div>
            </div>
            <div className="event-close-icon" onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>

          : null
      }

    </>
  );
};

export default EventModal;
