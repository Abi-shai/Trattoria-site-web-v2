import { NavLink } from "react-router-dom";
import ChevronDown from '../../assets/icons/chevron-down.svg?react';

import './Button.css';


// Style de button 1 / Avec le fond
const ButtonPrimary = ({ content, showIconRight, hasHref, onClick }) => {
  return (
    <>
      {
        hasHref
          ? <a
            className="cta buttonPrimary"
            href={hasHref}
            onClick={onClick}
          >
            {content}

            {/* Logique pour construire un boolean qui va se charger de l'affichage de l'icône lorsqu'il est true */}
            {
              showIconRight
                ? <ChevronDown />
                : null
            }
          </a>

          : <button className="cta buttonPrimary">
            {content}

            {/* Logique pour construire un boolean qui va se charger de l'affichage de l'icône lorsqu'il est true */}
            {
              showIconRight
                ? <ChevronDown />
                : null
            }
          </button>
      }

    </>
  );
};



const ButtonNavLink = ({ content, showIconRight, link, onClick }) => {
  return (
    <NavLink to={link} className="cta buttonPrimary" onClick={onClick}>
      {content}

      {/* Logique pour construire un boolean qui va se charger de l'affichage de l'icône lorsqu'il est true */}
      {
        showIconRight
          ? <ChevronDown />
          : null
      }
    </NavLink>
  );
};


// Style de button 2 / Avec les bordures
const ButtonSecondary = ({ type, content, showIconRight }) => {
  return (
    <button type={type} className="cta buttonSecondary">
      {content}

      {/* Logique pour construire un boolean qui va se charger de l'affichage de l'icône lorsqu'il est true */}
      {
        showIconRight
          ? <ChevronDown />
          : null
      }
    </button>
  );
};


// Bouton de style link (comme celle sur la utility bar)
const LinkButton = ({ content, icon, href, style }) => {
  return (
    <a
      style={style}
      href={href}
      target="_blank"
      className="cta link-button">

      {/* Logique pour construire un boolean qui va se charger de l'affichage de l'icône lorsqu'il est true */}

      {icon}

      {content}

    </a>
  );
};


export { ButtonPrimary, ButtonNavLink, ButtonSecondary, LinkButton };