import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import { DividerOnOtherPages } from "../../../components/divider/Divider";
import MenuItem from "../../../components/MenuItem/MenuItem";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";

import { viandeData, poissonData, secondiMoreInfos } from "../../../menu-data";

import SecondiImage from '../../../assets/images/carte/secondi.png';

import './Secondi.css';

const Secondi = () => {
  const removedPoissonLastItem = poissonData.slice(0, -1);
  const removedViandeLastItem = viandeData.slice(0, -1);
  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Secondi | Trattoria Da Alex';
  }, []);

  return (
    <>
      <PageHeader img={SecondiImage} title="Secondi" />
      <main className="menu-body-main-wrapper">
        <MenuSectionHeader title="Viande" />
        <section className="menu-group-wrapper">
          {
            currentWith > 1080
              ? viandeData.map((menu, i) => {
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
              : removedViandeLastItem.map((menu, i) => {
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

        <MenuSectionHeader title="Poisson" />

        <section className="menu-group-wrapper">
          {
            currentWith > 1080
              ? poissonData.map((menu, i) => {
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
              : removedPoissonLastItem.map((menu, i) => {
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

        <MenuSectionHeader title="Accompagnements" />

        <div className="menu-more-infos-wrapper">
          {
            Object.values(secondiMoreInfos.suppléments).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

        <DividerOnOtherPages />

        <MenuSectionHeader title="Sauces" />

        <div className="menu-more-infos-wrapper">
          {
            Object.values(secondiMoreInfos.sauces).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>


        <DividerOnOtherPages />

        <div className="menu-more-infos-wrapper">
          {
            Object.values(secondiMoreInfos.notes).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

      </main>
    </>
  );
};

export default Secondi;