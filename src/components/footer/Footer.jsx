import { LinkButton } from "../Button/Button";
import { NavLink } from "react-router-dom";

import TrattoriaLogo from '../../assets/images/trattoria.png';
import InstagramLogo from '../../assets/icons/insta.svg?react';
import Om from '../../assets/icons/om.png';
import Wave from '../../assets/icons/wave.png';
import Yas from '../../assets/icons/yas.png';
import Visa from '../../assets/icons/visa.png';


import './Footer.css';

const Footer = () => {

  const footerLinksData = [
    {
      label: 'La carte',
      links: [
        { title: 'Pizza', route: '/pizza' },
        { title: 'Cicchetti', route: '/carte/cicchetti' },
        { title: 'Antipasti', route: '/carte/antipasti' },
        { title: 'Primi', route: '/carte/primi' },
        { title: 'Secondi', route: '/carte/secondi' },
        { title: 'Desserts', route: '/carte/desserts' },
      ]
    },
    {
      label: 'Vins et boissons',
      links: [
        { title: 'Apéritifs', route: '/carte/aperitifs' },
        { title: 'Cocktails', route: '/carte/cocktails' },
        { title: 'Vins', route: '/carte/vins' },
      ]
    },
    {
      label: "Horaire d'ouverture",
      links: [
        { title: 'Du Lundi au Samedi' },
        { title: 'La cuisine : 12h - 23h' },
        { title: 'Le bar : 09h - 23h' },
      ]
    },
    {
      label: 'Plus d’informations',
      links: [
        { title: 'Le restaurant', route: '/restaurant' },
        { title: 'Gallery', route: '/gallery' },
        { title: 'Contacts', route: '/contacts' },
      ]
    }
  ];


  const FooterLinks = () => {
    return (
      <>
        {
          footerLinksData.map((block, i) => {
            <div className="footer-bloc" key={block[i]}>
              <p className="label">{block.label}</p>
              <div className="footer-links-data">
                {
                  block.links.map(slot => {
                    {
                      slot.route
                        ? <NavLink to={slot.route} className="cta slot">{slot.title}</NavLink>
                        : <p className="cta slot">{slot.title}</p>
                    }

                  })
                }
              </div>
            </div>
          })
        }
      </>
    )
  }



  return (
    <footer>
      <div className="main-footer">
        <div className="left-section">
          <NavLink to='/'>
            <img src={TrattoriaLogo} alt="Trattoria" />
          </NavLink>
          <div className="instagram-wrapper">
            <LinkButton style={{ color: 'var(--gray-color-30)' }} content='@Trattoriadaalex' icon={<InstagramLogo />} href='https://www.instagram.com/trattoriadaalex/' />

          </div>
        </div>
        <div className="right-section">

          {
            footerLinksData.map((block, i) => {
              return (
                <div className="footer-block" key={i}>
                  <p className="label">{block.label}</p>
                  <div className="footer-links-data">
                    {
                      block.links.map((slot, i) => {
                        {
                          return (
                            slot.route
                              ? <NavLink key={i} to={slot.route} className="cta slot">{slot.title}</NavLink>
                              : <p key={i} className="cta slot">{slot.title}</p>
                          )
                        }

                      })
                    }
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

      <div className="divider"></div>

      <div className="second-footer">

        <p className="copygright">Copyright 2025 — Trattoria Da Alex</p>
        <div className="payment-wrapper">
          <p>Trattoria Da Alex accepte</p>
          <div className="services-wrapper">
            <img src={Visa} alt="Visa" />
            <img src={Wave} alt="Wave" />
            <img src={Om} alt="Orange Money" />
            <img src={Yas} alt="Yas" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;