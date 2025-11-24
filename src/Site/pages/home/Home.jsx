import { NavLink } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

import UserFeedback from "../../../user-feedback";

import { ButtonPrimary } from "../../../components/Button/Button";
import { DividerOnHome } from "../../../components/divider/Divider";

import HeroSectionImage from '../../../assets/images/hero-section.png';
import PizzeImage from '../../../assets/images/carte/pizze.png';
import CicchettiImage from '../../../assets/images/carte/cicchetti.png';
import AntipastiImage from '../../../assets/images/carte/antipasti.png';
import PrimiImage from '../../../assets/images/carte/primi.png';
import SecondiImage from '../../../assets/images/carte/secondi.png';
import CocktailsImage from '../../../assets/images/carte/cocktails.png';
import DessertsImage from '../../../assets/images/carte/desserts.png';

import ChevronRight from '../../../assets/icons/chevron-right.svg?react';
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react';

import Motif from '../../../assets/motif/motif.png';

import './Home.css';




// Template pour toutes les sous-catégories de la carte
const MenuOnTheCard = ({ imgSrc, imgAlt, categoryTitle, url }) => {
  return (
    <NavLink to={url} className="menu-category-wrapper">
      <img src={imgSrc} alt={imgAlt} />
      <div className="menu-category-overlay"></div>
      <p className="menu-category-title">{categoryTitle}</p>
    </NavLink>
  )
}


const FeedbackInfo = ({ feedback, person }) => {
  return (
    <div className="embla__slide">
      <p className="body1 feedback">{feedback}</p>
      <p className="trattoria-font-heading-1 person">{person}</p>
    </div>
  );
}


const ActivityDot = ({ index, selectedIndex, scrollTo }) => {
  return (
    <div
      className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
      onClick={() => scrollTo(index)}
    >

    </div>
  );
}



const MenuDay = ({ day, daySpot, mainDish, secondDish, thirdDish, currentDay, bold }) => {
  return (
    <div
      className="menu-day-wrapper"
      style={currentDay === daySpot ? { backgroundColor: 'var(--component-over-brand-color)' } : null}
    >
      <p className="day">{day}</p>
      <p className="main-dish">{mainDish}</p>
      <p className={bold ? "second-dish special-bold" : "second-dish"}>{secondDish}</p>
      {
        thirdDish
          ? <p className="second-dish">{thirdDish}</p>
          : null
      }
    </div>
  )
}



// Les sections menu de la semaine et testimonials
const MenuAndTestimonials = ({ currentDay }) => {

  // 👇 1. AJOUT : Un état pour suivre l'index de la slide sélectionnée
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);


  // 1. On récupère l'API d'Embla en plus de la ref
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }); // loop: true pour un défilement infini

  // 2. On crée des fonctions pour naviguer
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  // Fonction pour scroller à une slide spécifique quand on clique sur un dot
  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Met à jour l'index sélectionné quand l'utilisateur scrolle
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  // 👇 2. AJOUT : Un effet pour initialiser et mettre à jour l'état
  useEffect(() => {
    if (!emblaApi) return;
    // Récupère le nombre total de slides/dots à créer
    setScrollSnaps(emblaApi.scrollSnapList());
    // Écoute l'événement 'select' d'Embla
    emblaApi.on('select', onSelect);
    // Nettoie l'écouteur
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);



  return (
    <section className="menu-and-testimonials-wrapper">

      <div className="menu-de-la-semaine-wrapper">
        <h3 className="h3">Le menu de la semaine</h3>
        <div className="wrapper-insider">
          <MenuDay currentDay={currentDay} day='Lundi' daySpot={1} mainDish='Escalopes de porc au provola fumée' secondDish='Polenta, Épinards' />
          <MenuDay currentDay={currentDay} day='Mardi' daySpot={2} mainDish='Lotte à la livournaise' secondDish='Purée' />
          <MenuDay currentDay={currentDay} day='Mercredi' daySpot={3} mainDish='Poulet Biancoforte' secondDish='Couscous marocain' />
          <MenuDay currentDay={currentDay} day='Jeudi' daySpot={4} mainDish='Filet de turbot pané' secondDish='Gratin de légumes et pommes de terre' />
          <MenuDay currentDay={currentDay} bold={true} day='Vendredi' daySpot={5} mainDish='Paella' secondDish='Bœuf braisé' thirdDish='Polenta' />
        </div>
      </div>

      <DividerOnHome />

      {/* Testimonials */}
      <div className="testimonials-container">

        <div className="embla__buttons">
          <div
            className="action-wrapper embla__button embla__button--prev"
            onClick={scrollPrev}
          >
            <ChevronLeft />
          </div>
        </div>



        <div className="core-testimonials-wrapper">

          <h3 className="h3">Ils laissent leur impression</h3>

          <div className="embla" >

            <div className="embla__viewport" ref={emblaRef}>

              <div className="embla__container" ref={emblaRef}>

                {
                  UserFeedback.map(data => {
                    return <FeedbackInfo key={data.id} feedback={data.feedback} person={data.persona} />
                  })
                }

              </div>
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <ActivityDot
                key={index}
                index={index}
                scrollTo={scrollTo}
                selectedIndex={selectedIndex}
              />
            ))}

          </div>

        </div>



        <div className="embla__buttons">
          <div
            className="action-wrapper embla__button embla__button--prev"
            onClick={scrollNext}
          >
            <ChevronRight />
          </div>
        </div>


      </div>
    </section >
  )
}



const Home = () => {

  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const theDay = currentDate.getDay();
    setCurrentDay(theDay);
    console.log(currentDay);
  }, [])

  useEffect(() => {
    document.title = 'Accueil | Trattoria Da Alex';
  }, []);



  return (
    <main className="home-content">
      <section className="hero-section">

        <div className="pitch-wrapper">

          <div className="text-wrapper">
            <h2>Buon appetito!</h2>
            <p className="body1">Alex et son équipe vous accueilleront dans une atmosphère chaleureuse et accueillante.</p>
          </div>
          <a
            href="https://trattoriadaalex.mon-restau.com/"
            className="buttonPrimary cta"
            target='_blank'
          >
            Commander en ligne / Réserver une place
          </a>
        </div>

        <div className="image">
          <img src={HeroSectionImage} alt="Alex" />
        </div>

        <div className="overlay"></div>

      </section>


      <section className="open-hours">

        <h3 className="h3">La trattoria est ouverte</h3>
        <div className="categories">

          <div className="categorie">
            <p className="categorie-heading">Bar</p>
            <p className="categorie-openning-day">Du Lundi au Samedi</p>
            <p className="body1 categorie-openning-hours">9h à 00h</p>
          </div>

          <div className="categorie">
            <p className="categorie-heading">Cuisine et Pizzeria</p>
            <p className="categorie-openning-day">Du Lundi au Samedi</p>
            <p className="body1 categorie-openning-hours">9h à 23h</p>
          </div>

        </div>

      </section>

      <DividerOnHome />

      <section className="la-carte-section">

        <h3 className="h3">La carte</h3>
        <div className="la-carte-wrapper">

          <div className="row-1">
            <MenuOnTheCard imgSrc={PizzeImage} imgAlt="Pizze" categoryTitle="PIZZE" url="/pizza" />
            <MenuOnTheCard imgSrc={CicchettiImage} imgAlt="Cicchetti" categoryTitle="CiCCHETTI" url="/carte/cicchetti" />
          </div>

          <div className="row-2">
            <div className="big-wrapper">
              <MenuOnTheCard imgSrc={AntipastiImage} imgAlt="Antipasti" categoryTitle="ANTIPASTI" url="/carte/antipasti" />
            </div>
            <div className="inside-row">
              <MenuOnTheCard imgSrc={PrimiImage} imgAlt="Primi" categoryTitle="PRIMI" url="/carte/primi" />
              <MenuOnTheCard imgSrc={SecondiImage} imgAlt="Secondi" categoryTitle="SECONDI" url="/carte/secondi" />
            </div>
          </div>

          <div className="row-3">
            <MenuOnTheCard imgSrc={CocktailsImage} imgAlt="Cocktails" categoryTitle="COCKTAILS" url="/carte/cocktails" />
            <MenuOnTheCard imgSrc={DessertsImage} imgAlt="Desserts" categoryTitle="DESSERTS" url="/carte/desserts" />
          </div>

        </div>

      </section>

      <MenuAndTestimonials currentDay={currentDay} />

    </main>
  );
};

export default Home;