import { useState, useEffect, useContext } from 'react';
import FullScreenStateContext from "../../context/FullscreenContext";

import { ButtonPrimary } from '../Button/Button';
import CloseIcon from '../../assets/icons/close.svg?react';

import EventImage from '../../assets/images/current-event.jpeg';

import './eventModal.css';


const CURRENT_EVENT_ID = 'journée-internatinale-happy-hour-event-final-final';
const DISPLAY_DELAY = 3000;

const EventModal = () => {
  const { eventModal, openEventModal, closeEventModal } = useContext(FullScreenStateContext);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem(CURRENT_EVENT_ID);

    if (!hasSeenModal) {
      // 1. On crée un minuteur
      const timer = setTimeout(() => {
        // 2. On ouvre la modale après le délai
        openEventModal();
        setShouldAnimateIn(true);
      }, DISPLAY_DELAY);

      // 3. C'est l'étape de nettoyage (très importante) :
      // Si le composant est détruit (l'utilisateur change de page)
      // avant la fin du délai, on annule le minuteur.
      return () => clearTimeout(timer);
    }
  }, [openEventModal]);


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
                  <p className="body1 day">Mercredi 12 Novembre</p>
                  <div className="event-divider"></div>
                  <h3>Journée internationale du happy hour</h3>
                  <p className="body1 infos-of-the-event">Doublez le plaisir, pas le prix — 2 cocktails + 1 assiette de tapas offerts, le tout à 10 000 FCFA !</p>
                </div>

                <ButtonPrimary hasHref="tel:+221766446405" content="Réserver au 766446405" />

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