import { useScrollDirection } from "../../utility/HidingElementScroll";

import { useState } from "react";

import { NavLink } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";

import { ButtonPrimary } from "../Button/Button";

import ChevronDown from '../../assets/icons/chevron-down.svg?react';
import HamMenu from '../../assets/icons/ham-menu.svg?react';
import Close from '../../assets/icons/close.svg?react';
import TrattoriaLogo from '../../assets/images/trattoria.png';

import './Header.css';


// Each option of the card mennu component
const ListNavOption = ({ navContent, showDivider, navLink }) => {

  return (
    <div className="listNavWrapper">
      <NavLink
        to={navLink}
        end
        className={({ isActive }) =>
          isActive ? " content-wrapper nav-active" : "content-wrapper nav-link"
        }>
        <p className="cta">{navContent}</p>
      </NavLink>

      {
        showDivider
          ? <div className="divider"></div>
          : null
      }
    </div>
  )
}


// The copponent lsiting the menu inside the card, while whovering
const MenuPopOver = () => {
  return (
    <div className="menu-popover">
      <ListNavOption navLink='/carte/propositions-du-mois' navContent={'Proposition du mois'} showDivider={true} />
      <ListNavOption navLink='/carte/cicchetti' navContent={'Cicchetti'} />
      <ListNavOption navLink='/carte/antipasti' navContent={'Antipasti'} />
      <ListNavOption navLink='/carte/primi' navContent={'Primi'} />
      <ListNavOption navLink='/carte/secondi' navContent={'Secondi'} />
      <ListNavOption navLink='/carte/desserts' navContent={'Desserts'} showDivider={true} />
      <ListNavOption navLink='/carte/aperitifs' navContent={'Apéritifs'} />
      <ListNavOption navLink='/carte/cocktails' navContent={'Cocktails'} />
      <ListNavOption navLink='/carte/vins' navContent={'Vins'} />
    </div>
  )
}


const Header = () => {


  const scrollDirection = useScrollDirection();

  const [MenuOpened, setMenuOpened] = useState('closed');
  const [CartOpened, setCartOpen] = useState('closed');


  // Checking the state of the nav menu, mobile version
  const setterMenuOpened = () => {
    if (MenuOpened === 'closed') {
      setMenuOpened('open');
    } else {
      setMenuOpened('closed');
    }

    console.log(MenuOpened);
  }


  // Checking the state of the cart menu
  const setterCartOpened = () => {
    if (MenuOpened === 'open') {
      setMenuOpened('expanded');
      setCartOpen('open');
    } else {
      setMenuOpened('open');
      setCartOpen('close');
    }
  }


  return (
    <header
      className={`site-header ${scrollDirection === 'down' ? 'hidden' : ''}`}
      style={MenuOpened === 'closed' ? { height: '72px' } : MenuOpened === 'open' ? { height: '100svh', backgroundColor: 'var(--black-color)' } : MenuOpened === 'expanded' ? { height: '100svh', backgroundColor: 'var(--black-color)' } : null}>

      <div className="principal-wrapper">

        <div className="logo">
          <NavLink to="/" aria-label="Retour à l’accueil">
            <img src={TrattoriaLogo} alt="Trattoria Da Alex" />
          </NavLink>
        </div>

        <nav aria-label="Navigation principale" className="desktop">
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
                to="/pizza"
                end
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
              >
                Pizza
              </NavLink></li>
            <li className="special-link">
              <NavLink
                to="/carte"
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
                to="/gallery"
                end
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
              >
                Gallery
              </NavLink></li>
            <li>
              <NavLink
                to="/contacts"
                end
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="reserve-and-order">
          <a href="https://trattoriadaalex.mon-restau.com/" target="blank" className="buttonPrimary click-button">
            <p className="cta">Commander / Réserver</p>
          </a>
        </div>



        <div className="ham-menu" onClick={setterMenuOpened}>
          {
            MenuOpened === 'closed'
              ? <HamMenu />
              : MenuOpened === 'open'
                ? <Close />
                : <Close />
          }
        </div>




      </div>



      {/* Navigation secondaire, Mobile */}
      <nav aria-label="Navigation Principale" className="mobile">
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
              to="/pizza"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Pizza
            </NavLink></li>
          <li className="special-link" onClick={setterCartOpened} style={CartOpened === 'open' ? { height: '398px', padding: '0.5em' } : { height: '36px' }}>

            <div className="wrapper-1">
              <a
                to="/carte"
              >
                La carte
                <ChevronDown style={CartOpened === 'open' ? { transform: 'rotateZ(-180deg)' } : null} />
              </a>
            </div>



            {
              CartOpened === 'open'
                ? <div className="divider"></div>
                : null
            }




            {
              CartOpened === 'open'
                ? <div className="wrapper-2">
                  <ul>
                    <li>
                      <NavLink
                        to="/carte/cicchetti"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Cicchetti
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carte/antipasti"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Antipasti
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carte/primi"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Primi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carte/secondi"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Secondi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carte/desserts"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Desserts
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                      <NavLink
                        to="/carte/aperitifs"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Apéritifs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carte/cocktails"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Cocktails
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/carte/vins"
                        end
                        className={({ isActive }) =>
                          isActive ? "nav-active" : "nav-link"
                        }
                      >
                        Vins
                      </NavLink>
                    </li>
                  </ul>
                </div>

                : null
            }
          </li>
          <li>
            <NavLink
              to="/gallery"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Gallery
            </NavLink></li>
          <li>
            <NavLink
              to="/contacts"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;