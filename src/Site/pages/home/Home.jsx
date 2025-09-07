import { ButtonPrimary } from "../../../components/Button/Button";

import HeroSectionImage from '../../../assets/images/hero-section.png';

import './Home.css';

const Home = () => {
  return (
    <div className="home-content">
      <section>

        <div className="pitch-wrapper">

          <div className="text-wrapper">
            <h2>Buon appetito!</h2>
            <p className="body1">Alex et son équipe vous accueilleront dans une atmosphère chaleureuse et accueillante.</p>
          </div>
          <ButtonPrimary content='Commander en ligne / Réserver une place' />
        </div>

        <div className="image">
          <img src={HeroSectionImage} alt="Alex" />
        </div>

        <div className="overlay"></div>

      </section>
    </div>
  );
};

export default Home;