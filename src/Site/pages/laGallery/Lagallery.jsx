// import UseWindowSize from "../../../utility/useWindowSize";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { memo } from "react";

// import { useState, useEffect } from "react";
// import { useContext } from "react";
// import FullScreenStateContext from "../../../context/FullscreenContext";

// import galleryData from "../../../gallery-data";

// import SearchIcon from '../../../assets/icons/search.svg?react';
// import CloseIcon from '../../../assets/icons/close.svg?react';

// import './Lagallery.css';

// const Lagallery = () => {

//   const [hoveredIndex, setHoveredIndex] = useState(0);
//   const { state, toggleState } = useContext(FullScreenStateContext);

//   const currentWith = UseWindowSize().width;

//   useEffect(() => {
//     document.title = 'Gallery | Trattoria Da Alex';
//   }, []);

//   const setterHoveredIndex = (index) => {
//     setHoveredIndex(index);
//     console.log(hoveredIndex);
//     console.log(state)
//   }

//   const GalleryImage = ({ imageSrc, imgIndex }) => {
//     return (
//       <>
//         {
//           currentWith > 1080

//             ? < div
//               className="gallery-image"
//               onMouseEnter={() => setterHoveredIndex(imgIndex)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onClick={toggleState}
//             >
//               <LazyLoadImage src={imageSrc} alt="Photo de gallery" effect="blur" />
//               <div
//                 style={hoveredIndex === imgIndex ? { opacity: 1 } : { opacity: 0 }}
//                 className="gallery-image-overlay"
//               >
//                 <SearchIcon />
//               </div>


//             </div >

//             : < div
//               className="gallery-image"
//               onClick={() => { toggleState(), setterHoveredIndex(imgIndex) }}
//             >
//               <LazyLoadImage src={imageSrc} alt="Photo de gallery" effect="blur" />

//             </div >
//         }
//       </>
//     );
//   };

//   return (
//     <main className="gallery-page">
//       <div className="gallery-wrapper">
//         {
//           galleryData.map(slot => {
//             return <GalleryImage imgIndex={slot.photoId} key={slot.photoId} imageSrc={slot.imageSrc} />
//           })
//         }
//       </div>
//       {
//         state === 'opened'
//           ?
//           <div className="full-image-wrapper">
//             <img className="full-image-gallery" src={galleryData[hoveredIndex - 1].imageSrc} />
//             <div
//               onClick={toggleState}
//               className="close-icon"
//             >
//               <CloseIcon />
//             </div>
//           </div>
//           : null
//       }
//     </main>

//   );
// };

// export default memo(Lagallery);




import UseWindowSize from "../../../utility/useWindowSize";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { memo, useState, useEffect, useContext } from "react";
import FullScreenStateContext from "../../../context/FullscreenContext";
import galleryData from "../../../gallery-data";

import SearchIcon from '../../../assets/icons/search.svg?react';
import CloseIcon from '../../../assets/icons/close.svg?react';

import 'react-lazy-load-image-component/src/effects/blur.css'; // N'oublie pas d'importer le CSS de l'effet
import './Lagallery.css';


// ==================================================================
// ÉTAPE 1 : DÉFINIR LE COMPOSANT IMAGE À L'EXTÉRIEUR
// On le "mémorise" aussi pour des performances optimales
// ==================================================================
const GalleryImage = memo(({
  imageSrc,
  imgIndex,
  currentWith,
  hoveredIndex,
  setterHoveredIndex,
  setHoveredIndex,
  toggleState
}) => {


  return (
    <>
      {
        currentWith > 1080
          ? <div
            className="gallery-image"
            onMouseEnter={() => setterHoveredIndex(imgIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => { setterHoveredIndex(imgIndex); toggleState() }}
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
            onClick={() => { setterHoveredIndex(imgIndex); toggleState() }}
          >
            <LazyLoadImage
              src={imageSrc}
              alt="Photo de gallery"
              effect="blur"
            />
          </div>
      }
    </>
  );
});


// ==================================================================
// TON COMPOSANT DE PAGE PRINCIPAL
// ==================================================================
const Lagallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { state, toggleState } = useContext(FullScreenStateContext);
  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Gallery | Trattoria Da Alex';
  }, []);

  const setterHoveredIndex = (index) => {
    setHoveredIndex(index);
  }

  return (
    <main className="gallery-page">
      <div className="gallery-wrapper">
        {
          galleryData.map(slot => {
            // ÉTAPE 1 (suite) : On passe tout par les props
            return <GalleryImage
              key={slot.photoId}
              imgIndex={slot.photoId}
              imageSrc={slot.imageSrc}
              currentWith={currentWith}
              hoveredIndex={hoveredIndex}
              setterHoveredIndex={setterHoveredIndex}
              setHoveredIndex={setHoveredIndex}
              toggleState={toggleState}
            />
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

export default memo(Lagallery); // Tu gardes le memo ici, c'est très bien