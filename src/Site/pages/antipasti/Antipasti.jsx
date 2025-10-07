import { useEffect } from "react";

import { antipastiData, antipastiMoreInfos } from "../../../menu-data";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { DividerOnOtherPages } from "../../../components/divider/Divider";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";


import AntipastiImage from '../../../assets/images/carte/antipasti.png';

import './Antipasti.css';

const Antipasti = () => {

  useEffect(() => {
    document.title = 'Antipasti | Trattoria Da Alex';
  }, []);

  return (
    <>
      <PageHeader img={AntipastiImage} title="Antipasti" description="Entrées" />
      <main className="menu-body-main-wrapper">
        <section className="menu-group-wrapper">
          {
            antipastiData.map((menu, i) => {
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

        <MenuSectionHeader title="Suppléments" />

        <div className="menu-more-infos-wrapper">
          {
            Object.values(antipastiMoreInfos.suppléments).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

        <DividerOnOtherPages />

        <div className="menu-more-infos-wrapper">
          {
            Object.values(antipastiMoreInfos.notes).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

      </main>
    </>
  );
};

export default Antipasti;