import { useScrollDirection } from "../../utility/HidingElementScroll";

import TripNotation from '../../assets/images/trip-notation.svg?react';
import Commenting from '../../assets/icons/commenting.svg?react'
import Location from '../../assets/icons/location.svg?react'

import { LinkButton } from "../button/Button";

import './UtilityBar.css';

const UtilityBar = () => {

  const hrefs = {
    comment: "https://www.tripadvisor.fr/ClientLink?value=NzI2Xy9Vc2VyUmV2aWV3RWRpdC1nMjkzODMxLWQ5NjA0NjAwLVRyYXR0b3JpYV9kYV9BbGV4LURha2FyX0Rha2FyX1JlZ2lvbi5odG1sX05oYw%3D%3D",
    localistion: "https://maps.app.goo.gl/a2HhF4dFhabCaJiX8",
    trip_advisor: "https://www.tripadvisor.fr/Restaurant_Review-g293831-d9604600-Reviews-Trattoria_da_Alex-Dakar_Dakar_Region.html"
  };

  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`utility-wrapper ${scrollDirection === 'down' ? 'hidden' : ''}`}
    >

      <div className="left-content">
        <a
          href={hrefs.trip_advisor}
          target="_blank"
          className="trip-logo"
        >
          <TripNotation />
        </a>
        <LinkButton href={hrefs.comment} content='Laisser une note sur TripAdvisor' icon={<Commenting />} />
      </div>

      <div className="right-content">
        <LinkButton href={hrefs.localistion} content={"Point E Boulevard de l'Est, Dakar Sénégal"} icon={<Location />} />
      </div>
    </div>
  );
};

export default UtilityBar;