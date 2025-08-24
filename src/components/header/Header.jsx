import { NavLink } from "react-router-dom";

import { ButtonPrimary } from "../Button/Button";

import ChevronDown from '../../assets/icons/chevron-down.svg?react';
import TrattoriaLogo from '../../assets/images/trattoria.png';

import './Header.css';

const ListNavOption = ({ navContent, showDivider }) => {
  return (
    <div className="listNavWrapper">
      <div className="content-wrapper">
        <p className="cta">{navContent}</p>
      </div>

      {
        showDivider
          ? <div className="divider"></div>
          : null
      }
    </div>
  )
}


const MenuPopOver = () => {
  return (
    <div className="menu-popover">
      <ListNavOption navContent={'Cicchetti'} />
      <ListNavOption navContent={'Antipasti'} />
      <ListNavOption navContent={'Primi'} />
      <ListNavOption navContent={'Secondi'} />
      <ListNavOption navContent={'Desserts'} showDivider={true} />
      <ListNavOption navContent={'Apéritifs'} />
      <ListNavOption navContent={'Cocktails'} />
      <ListNavOption navContent={'Vins'} />
    </div>
  )
}


const Header = () => {
  return (
    <header>

      <div className="logo">
        <NavLink to="/" aria-label="Retour à l’accueil">
          <img src={TrattoriaLogo} alt="Trattoria Da Alex" />
        </NavLink>
      </div>

      <nav aria-label="Navigation principale">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurant"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Le restaurant
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurant"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Pizza
            </NavLink></li>
          <li className="special-link">
            <NavLink
              to="/restaurant"
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              La carte
              <ChevronDown />
            </NavLink>
            <MenuPopOver />
          </li>
          <li>
            <NavLink
              to="/restaurant"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Gallery
            </NavLink></li>
          <li>
            <NavLink
              to="/restaurant"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav >

      <ButtonPrimary content='Commander / Réserver' showIconRight={true} />

    </header >
  );
};

export default Header;