import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";
import { DividerOnOtherPages } from "../../../components/divider/Divider";
import MenuItem from "../../../components/MenuItem/MenuItem";

import { pizzaGlobalData, provolaData, specialiData, pizzaMoreInfos, propositionsDuMois } from "../../../menu-data";

import PizzaImage from '../../../assets/images/carte/pizze-page.png';
import PropositionDuMois from "../proposition-du-mois/PropositionDuMois";

const Pizza = () => {

  useEffect(() => {
    document.title = 'Pizza | Trattoria Da Alex';
  }, []);

  const removedSpecialiLastItem = specialiData.slice(0, -1);
  const removedProvolaLastItem = provolaData.slice(0, -1);
  const removedPizzaGlobalLastItem = pizzaGlobalData.slice(0, -1);

  const currentWith = UseWindowSize().width;

  const pizzaDuMoisData = propositionsDuMois.pizzaDuMois[0];

  return (
    <>


      <PageHeader img={PizzaImage} title='PIZZA' />
      <main className="menu-body-main-wrapper">


        {/* <MenuSectionHeader title="Pizza du mois" />

        <section className="menu-group-wrapper">
          <MenuItem
            menuTitle={pizzaDuMoisData.mois}
            moreInfo={pizzaDuMoisData.moreInfo}
            firstOverlayInfo={pizzaDuMoisData.moreInfos.notes[0]}
            menuDescription={pizzaDuMoisData.description}
            isCentered
          />
        </section> */}

        {/* <DividerOnOtherPages /> */}

        <section className="menu-group-wrapper">
          {
            currentWith < 1080
              ? removedPizzaGlobalLastItem.map((menu, i) => {
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
              : pizzaGlobalData.map((menu, i) => {
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
            provolaData.map((menu, i) => {
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

        {/* <MenuSectionHeader title="le speciali" />


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
        </section> */}

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