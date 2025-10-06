import UseWindowSize from "../../../utility/useWindowSize";

import { useState, useEffect } from "react";
import { useContext } from "react";
import FullScreenStateContext from "../../../context/FullscreenContext";

import galleryData from "../../../gallery-data";

import SearchIcon from '../../../assets/icons/search.svg?react';
import CloseIcon from '../../../assets/icons/close.svg?react';

import './Lagallery.css';

const Lagallery = () => {

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { state, toggleState } = useContext(FullScreenStateContext);

  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Gallery — Trattoria Da Alex';
  }, []);

  const setterHoveredIndex = (index) => {
    setHoveredIndex(index);
    console.log(hoveredIndex);
    console.log(state)
  }

  const GalleryImage = ({ imageSrc, imgIndex }) => {
    return (
      <>
        {
          currentWith > 1080

            ? < div
              className="gallery-image"
              onMouseEnter={() => setterHoveredIndex(imgIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={toggleState}
            >
              <img src={imageSrc} alt="Photo de gallery" />
              <div
                style={hoveredIndex === imgIndex ? { opacity: 1 } : { opacity: 0 }}
                className="gallery-image-overlay"
              >
                <SearchIcon />
              </div>


            </div >

            : < div
              className="gallery-image"
              onClick={() => { toggleState(), setterHoveredIndex(imgIndex) }}
            >
              <img src={imageSrc} alt="Photo de gallery" />

            </div >
        }
      </>
    );
  };

  return (
    <main className="gallery-page">
      <div className="gallery-wrapper">
        {
          galleryData.map(slot => {
            return <GalleryImage imgIndex={slot.photoId} key={slot.photoId} imageSrc={slot.imageSrc} />
          })
        }
      </div>
      {
        state === 'opened'
          ?
          <div className="full-image-wrapper">
            <img className="full-image-gallery" src={galleryData[hoveredIndex - 1].imageSrc} />
            <div
              onClick={toggleState}
              className="close-icon"
            >
              <CloseIcon />
            </div>
          </div>
          : null
      }
    </main>

  );
};

export default Lagallery;