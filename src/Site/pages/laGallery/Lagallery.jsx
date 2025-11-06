import UseWindowSize from "../../../utility/useWindowSize";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo, useState, useEffect, useContext } from "react";
import FullScreenStateContext from "../../../context/FullscreenContext";
import { RemoveScroll } from "react-remove-scroll";

import galleryData from "../../../gallery-data";

import FullScreenIcon from '../../../assets/icons/fullscreen.svg?react';
import CloseIcon from '../../../assets/icons/close.svg?react';
import ChevronRight from '../../../assets/icons/chevron-right.svg?react';
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './Lagallery.css';


const GalleryImage = memo(({
  imageSrc,
  imgIndex,
  currentWith,
  hoveredIndex,
  setHoveredIndex, // <-- Juste pour le survol
  setSelectedIndex, // <-- Juste pour le clic
  toggleState
}) => {

  const handleOpenModal = () => {
    setSelectedIndex(imgIndex); // On dit quelle image est sélectionnée
    toggleState(); // On ouvre la modale
  };

  return (
    <>
      {
        currentWith > 1080
          ? <div
            className="gallery-image"
            onMouseEnter={() => setHoveredIndex(imgIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={handleOpenModal} // On appelle notre nouvelle fonction
          >
            <LazyLoadImage
              src={imageSrc}
              alt="Photo de gallery"
              effect="blur"
            />

            <div
              style={hoveredIndex === imgIndex ? { opacity: 1 } : { opacity: 0 }}
              className="gallery-image-overlay"
            >
              <FullScreenIcon />
            </div>
          </div>
          : <div
            className="gallery-image"
            onClick={handleOpenModal} // Même fonction ici
          >
            <LazyLoadImage
              src={imageSrc}
              alt="Photo de gallery"
              effect="blur"
              width="400" // N'oublie pas d'ajouter width/height
              height="300"
            />
          </div>
      }
    </>
  );
});



const Lagallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { state, toggleState } = useContext(FullScreenStateContext);
  const currentWith = UseWindowSize().width;

  const totalImages = galleryData.length;

  useEffect(() => {
    document.title = 'Gallery | Trattoria Da Alex';

    // Fonction qui gère les appuis de touches
    const handleKeyDown = (event) => {
      // Ne rien faire si la modale n'est pas ouverte
      if (state !== 'opened') return;

      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'Escape') {
        toggleState(); // Ferme la modale avec "Echap"
      }
    };

    // Ajoute l'écouteur d'événement au document
    document.addEventListener('keydown', handleKeyDown);

    // Nettoie l'écouteur quand le composant est détruit
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [state, toggleState]);

  const handleNext = () => {
    setSelectedIndex(currentId => {
      // Si on est à la dernière image (l'ID photo est égal au total)
      if (currentId === totalImages) {
        return 1; // On repart au début (ID 1)
      }
      return currentId + 1; // Sinon, on fait +1
    });
  };

  const handlePrev = () => {
    setSelectedIndex(currentId => {
      // Si on est à la première image (ID 1)
      if (currentId === 1) {
        return totalImages; // On va à la fin
      }
      return currentId - 1; // Sinon, on fait -1
    });
  };


  // Trouve l'image sélectionnée en toute sécurité
  const selectedImage = selectedIndex !== null
    ? galleryData.find(img => img.photoId === selectedIndex)
    : null;

  return (
    <main className="gallery-page">
      <div className="gallery-wrapper">
        {
          galleryData.map(slot => {
            return <GalleryImage
              key={slot.photoId}
              imgIndex={slot.photoId}
              imageSrc={slot.imageSrc}
              currentWith={currentWith}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              setSelectedIndex={setSelectedIndex} // On passe le nouveau setter
              toggleState={toggleState}
            />
          })
        }
      </div>
      {
        (state === 'opened' && selectedImage)
          ?
          <RemoveScroll>
            <div className="full-image-wrapper">
              <img className="full-image-gallery" src={selectedImage.imageSrc} />
              <div
                onClick={toggleState}
                className="close-icon"
              >
                <CloseIcon />
              </div>
              <div className="swiping-icons">
                <div className="left" onClick={handlePrev}>
                  <ChevronLeft />
                </div>
                <div className="right" onClick={handleNext}>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </RemoveScroll>
          : null
      }
    </main>
  );
};

export default memo(Lagallery);