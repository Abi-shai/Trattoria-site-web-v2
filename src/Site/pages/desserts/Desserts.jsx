import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { DividerOnOtherPages } from "../../../components/divider/Divider";

import { dessertsData, dessertsMoreInfos } from "../../../menu-data";

import DessertsImage from '../../../assets/images/carte/desserts.png';

import './Desserts.css';

const Desserts = () => {
  const removedLastItem = dessertsData.slice(0, -1);
  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Desserts | Trattoria Da Alex';
  }, []);

  return (

    <>
      <PageHeader img={DessertsImage} title="Desserts" />
      <main className="menu-body-main-wrapper">

        <section className="menu-group-wrapper">
          {
            currentWith > 1080
              ? dessertsData.map((menu, i) => {
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
              : removedLastItem.map((menu, i) => {
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


        <div className="menu-more-infos-wrapper">
          {
            Object.values(dessertsMoreInfos.notes).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

      </main>

    </>
  );
};

export default Desserts;