import { useEffect } from "react";

import PageHeader from "../../../components/pageHeader/PageHeader";

import RestaurantImage from '../../../assets/images/restaurant.jpg';
import RestaurantInsider from '../../../assets/images/restaurant-on-page.jpg';
import Axel from '../../../assets/images/axel.png';
import Karaoké from '../../../assets/images/karaoké.png';
import { DividerOnOtherPages } from "../../../components/divider/Divider";

import './Restaurant.css';


const Restaurant = () => {

  useEffect(() => {
    document.title = 'Trattoria Da Alex — Restaurant';
  }, []);

  return (
    <>
      <PageHeader
        img={RestaurantImage}
        title="Le restaurant"
        description="Un véritable refuge, où chaleur et convivialité se rencontrent."
      />
      <main className="restaurant-main">
        <p className="body1 parag">
          Alex et son équipe vous invitent à vivre une expérience culinaire unique dans un cadre accueillant et agréable. Avec une décoration soignée et un design mettant en valeur le bois par ses carreaux élégants, des poutres apparentes et le four au feu de bois, notre salle crée une atmosphère intimiste idéale pour savourer notre délicieuse cuisine italienne, reconnue pour sa qualité et diversité.
        </p>
        <img
          className="on-restaurant-page-image"
          src={RestaurantInsider}
          alt="La Trattoria de l'intérieur"
        />
        <p className="body1 parag">
          Notre menu à la carte vous propose un voyage gustatif à travers des plats raffinés et variés, qui allient tradition et innovation. Nous avons également le plaisir d'organiser régulièrement des soirées à thème, telles que des karaokés, des soirées pizza à volonté et des événements sportifs, pour animer vos soirées.
        </p>
        <DividerOnOtherPages />
        <div className="images-wrapper">
          <img
            className="on-restaurant-page-image-2"
            src={Axel}
            alt="Un jeune homme qui danse"
          />
          <img
            className="on-restaurant-page-image-2"
            src={Karaoké}
            alt="Une soirée Karaoké"
          />
        </div>
        <p className="body1 parag">
          Chaque détail est pensé pour que vous vous sentiez comme en Italie. Venez partager des moments inoubliables avec nous !
        </p>
      </main>
    </>
  );
};

export default Restaurant;