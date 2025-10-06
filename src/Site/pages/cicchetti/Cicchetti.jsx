import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";

import CicchettiImage from '../../../assets/images/carte/cicchetti.png';

import { cicchettiData } from "../../../menu-data";

import './Cicchetti.css';

const Ciccheti = () => {

  const removeLastItem = cicchettiData.slice(0, -1);
  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Cicchetti — Trattoria Da Alex';
  }, []);


  return (
    <>
      <PageHeader img={CicchettiImage} title="CICCHETI" description="Amuses-bouche" />
      <main className="menu-body-main-wrapper">
        <section className="menu-group-wrapper">
          {
            currentWith < 1081
              ?
              removeLastItem.map((menu, i) => {
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

              : cicchettiData.map((menu, i) => {
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

export default Ciccheti;