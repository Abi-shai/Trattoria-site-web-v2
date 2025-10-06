import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { DividerOnOtherPages } from "../../../components/divider/Divider";

import { roséData, blancData, rougeData, bulleData } from "../../../menu-data";

import VinsImage from '../../../assets/images/carte/vins.png';

import './VIns.css';

const Vins = () => {

  useEffect(() => {
    document.title = 'Vins — Trattoria Da Alex';
  }, []);

  const currentWith = UseWindowSize().width;


  return (
    <>
      <PageHeader img={VinsImage} title="Vini" description="Vins" />
      <main className="menu-body-main-wrapper">

        <section className="mixed-wine-category">

          <div className="wine-category">
            {
              currentWith > 1080
                ? <MenuSectionHeader leftAligned={true} title="ROSÉ" />
                : <MenuSectionHeader title="ROSÉ" />
            }
            {
              roséData.map((menu, i) => {
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
          </div>

          {
            currentWith < 1080
              ? <DividerOnOtherPages />
              : null
          }

          <div className="wine-category">
            {
              currentWith > 1080
                ? <MenuSectionHeader leftAligned={true} title="Blanc" />
                : <MenuSectionHeader title="Blanc" />
            }
            {
              blancData.map((menu, i) => {
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
          </div>

        </section>

        <DividerOnOtherPages />

        <section className="mixed-wine-category">

          <div className="wine-category">
            {
              currentWith > 1080
                ? <MenuSectionHeader leftAligned={true} title="ROUGE" />
                : <MenuSectionHeader title="ROUGE" />
            }
            {
              rougeData.map((menu, i) => {
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
          </div>

          {
            currentWith < 1080
              ? <DividerOnOtherPages />
              : null
          }

          <div className="wine-category">
            {
              currentWith > 1080
                ? <MenuSectionHeader leftAligned={true} title="NOS BULLES" />
                : <MenuSectionHeader title="NOS BULLES" />
            }
            {
              bulleData.map((menu, i) => {
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
          </div>

        </section>

      </main>
    </>
  );
};

export default Vins;