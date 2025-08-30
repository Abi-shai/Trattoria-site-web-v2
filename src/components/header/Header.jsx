import { useState } from "react";

import { NavLink } from "react-router-dom";

import { ButtonPrimary } from "../Button/Button";

import ChevronDown from '../../assets/icons/chevron-down.svg?react';
import HamMenu from '../../assets/icons/ham-menu.svg?react';
import Close from '../../assets/icons/close.svg?react';
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

  const [MenuOpened, setMenuOpened] = useState('closed');
  const [CartOpened, setCartOpen] = useState('closed');

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
    <header style={MenuOpened === 'closed' ? { height: '72px' } : MenuOpened === 'open' ? { height: '348px' } : MenuOpened === 'expanded' ? { height: '726px' } : null}>

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
        </nav>

        <ButtonPrimary content='Commander / Réserver' showIconRight={true} />

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
              to="/restaurant"
              end
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-link"
              }
            >
              Pizza
            </NavLink></li>
          <li className="special-link" onClick={setterCartOpened} style={CartOpened === 'open' ? { height: '398px', padding: '0.5em' } : { height: '36px' }}>

            <div className="wrapper-1">
              <NavLink
                to="/restaurant"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
              >
                La carte
                <ChevronDown style={CartOpened === 'open' ? { transform: 'rotateZ(-180deg)' } : null} />
              </NavLink>
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
                        to="/"
                        end
                        className="nav-link"
                      >
                        Cicchetti
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
                      >
                        Antipasti
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
                      >
                        Primi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
                      >
                        Secondi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
                      >
                        Desserts
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
                      >
                        Apéritifs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
                      >
                        Cocktails
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        end
                        className="nav-link"
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
      </nav>

    </header >
  );
};

export default Header;