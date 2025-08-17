import ChevronDown from '../../assets/icons/chevron-down.svg?react';

import './Button.css';


// Style de button 1 / Avec le fond
const ButtonPrimary = ({ content, showIconRight }) => {
  return (
    <button className="cta buttonPrimary">
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


// Style de button 2 / Avec les bordures
const ButtonSecondary = ({ content, showIconRight }) => {
  return (
    <button className="cta buttonSecondary">
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


export { ButtonPrimary, ButtonSecondary };