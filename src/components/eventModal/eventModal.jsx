import { useState, useEffect, useContext } from 'react';
import FullScreenStateContext from "../../context/FullscreenContext";

import { ButtonPrimary } from '../Button/Button';
import CloseIcon from '../../assets/icons/close.svg?react';

import EventImage from '../../assets/images/event-trattoria.png';

import './eventModal.css';


const CURRENT_EVENT_ID = 'test-8';
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
                  <p className="body2 day">Jeudi 17 juillet, de 20h à 00h</p>
                  <div className="event-divider"></div>
                  <h3>Soirée karaoké</h3>
                  <p className="body1 infos-of-the-event">Ce jeudi, c’est toi la star ! Viens ambiancer la salle à notre Karaoké Night le 17 juillet de 20h à 00h chez Trattoria Da Alex 🎶. Micro, menu à la carte et bonne humeur au rendez-vous !</p>
                </div>

                <ButtonPrimary hasHref="tel:+221766446404" content="Réserver au 76 644 64 05" />

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