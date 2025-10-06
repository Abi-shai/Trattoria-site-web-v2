import { useEffect } from "react";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";

import { aperitifsData } from "../../../menu-data";

import AperitifsImage from '../../../assets/images/carte/aperitifs.webp';

import './Aperitifs.css';

const Aperitifs = () => {

  useEffect(() => {
    document.title = 'Trattoria Da Alex — Apéritifs';
  }, []);

  return (
    <>
      <PageHeader img={AperitifsImage} title="Apetitivi" description="Apéritifs" />
      <main className="menu-body-main-wrapper">
        <section className="menu-group-wrapper">
          {
            aperitifsData.map((menu, i) => {
              return (
                <MenuItem
                  key={i}
                  menuTitle={menu.title}
                  moreInfo={menu.moreInfo}
                  menuDescription={menu.description}
                  firstOverlayInfo={menu.overlay.first}
                  secondOverlayInfo={menu.overlay.second}
                />)
            })
          }
        </section>
      </main>
    </>
  );
};

export default Aperitifs;