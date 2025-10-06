import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";
import { DividerOnOtherPages } from "../../../components/divider/Divider";
import MenuItem from "../../../components/MenuItem/MenuItem";

import { pizzaGlobalData, provolaData, specialiData, pizzaMoreInfos } from "../../../menu-data";

import PizzaImage from '../../../assets/images/carte/pizze-page.png';

import './Pizza.css';

const Pizza = () => {

  useEffect(() => {
    document.title = 'Pizza — Trattoria Da Alex';
  }, []);

  const removedSpecialiLastItem = specialiData.slice(0, -1);
  const removedProvolaLastItem = provolaData.slice(0, -1);
  const currentWith = UseWindowSize().width;

  return (
    <>


      <PageHeader img={PizzaImage} title='PIZZA' />
      <main className="menu-body-main-wrapper">


        <MenuSectionHeader title="Pizza du mois" />

        <section className="pizza-du-mois">
          <p className="mois">Juillet</p>
          <p className="pizza">
            Ricotta, soppressata calabra, pleurotes grises, tomates cerises, écorce de citron
          </p>
        </section>

        <DividerOnOtherPages />

        <section className="menu-group-wrapper">
          {
            pizzaGlobalData.map((menu, i) => {
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

        <DividerOnOtherPages />

        <MenuSectionHeader title="le provola" />

        <section className="menu-group-wrapper">
          {
            currentWith < 1080
              ? removedProvolaLastItem.map((menu, i) => {
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
              : provolaData.map((menu, i) => {
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

        <DividerOnOtherPages />

        <MenuSectionHeader title="le speciali" />


        <section className="menu-group-wrapper">
          {
            currentWith < 1080
              ? removedSpecialiLastItem.map((menu, i) => {
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
              : specialiData.map((menu, i) => {
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


        <DividerOnOtherPages />

        <MenuSectionHeader title="suppléments" />


        <div className="menu-more-infos-wrapper">
          {
            Object.values(pizzaMoreInfos.suppléments).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

        <DividerOnOtherPages />


        <div className="menu-more-infos-wrapper">
          {
            Object.values(pizzaMoreInfos.notes).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

      </main>
    </>
  );
};

export default Pizza;