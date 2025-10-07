import { useEffect } from "react";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { DividerOnOtherPages } from "../../../components/divider/Divider";

import { cocktailsData, cocktailsMoreInfos } from "../../../menu-data";

import CocktailsImage from '../../../assets/images/carte/cocktails.png';

import './Cocktails.css';

const Cocktails = () => {

  useEffect(() => {
    document.title = 'Cocktails | Trattoria Da Alex';
  }, []);

  return (
    <>
      <PageHeader img={CocktailsImage} title="Cocktails" />
      <main className="menu-body-main-wrapper">

        <section className="menu-group-wrapper">
          {
            cocktailsData.map((menu, i) => {
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
            Object.values(cocktailsMoreInfos.notes).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

      </main>
    </>
  );
};

export default Cocktails;