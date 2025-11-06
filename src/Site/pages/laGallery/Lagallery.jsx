import UseWindowSize from "../../../utility/useWindowSize";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo, useState, useEffect, useContext } from "react";
import FullScreenStateContext from "../../../context/FullscreenContext";
import { RemoveScroll } from "react-remove-scroll";

import galleryData from "../../../gallery-data";

import SearchIcon from '../../../assets/icons/search.svg?react';
import CloseIcon from '../../../assets/icons/close.svg?react';

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
              <SearchIcon />
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
  const [hoveredIndex, setHoveredIndex] = useState(null); // Pour le survol
  const [selectedIndex, setSelectedIndex] = useState(null); // 👈 NOUVEL ÉTAT POUR LE CLIC
  const { state, toggleState } = useContext(FullScreenStateContext);
  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Gallery | Trattoria Da Alex';
  }, []);

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
            </div>
          </RemoveScroll>
          : null
      }
    </main>
  );
};

export default memo(Lagallery);