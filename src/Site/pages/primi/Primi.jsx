import { useEffect } from "react";

import UseWindowSize from "../../../utility/useWindowSize";

import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { DividerOnOtherPages } from "../../../components/divider/Divider";

import { risottiData, pastaSeccaData, pastaFrescaData, primiMoreInfos } from "../../../menu-data";

import PrimiImage from '../../../assets/images/carte/primi.png';

import './Primi.css';

const Primi = () => {

  const removedLastItem = pastaSeccaData.slice(0, -1);
  const currentWith = UseWindowSize().width;

  useEffect(() => {
    document.title = 'Primi | Trattoria Da Alex';
  }, []);

  return (
    <>
      <PageHeader img={PrimiImage} title="Primi" />
      <main className="menu-body-main-wrapper">

        <MenuSectionHeader title="Risotti" />

        <section className="menu-group-wrapper">
          {
            risottiData.map((data, i) => {
              return <MenuItem key={i} menuTitle={data.title} menuDescription={data.description} />
            })
          }
        </section>
        <DividerOnOtherPages />

        <MenuSectionHeader title="PASTA SECCA**" description="Pâtes sèches" />

        <section className="menu-group-wrapper">
          {
            currentWith < 1080
              ? removedLastItem.map((data, i) => {
                return <MenuItem key={i} menuTitle={data.title} menuDescription={data.description} firstOverlayInfo={data.overlay.first} moreInfo={data.moreInfo} secondOverlayInfo={data.overlay.second} />
              })
              : pastaSeccaData.map((data, i) => {
                return <MenuItem key={i} menuTitle={data.title} menuDescription={data.description} firstOverlayInfo={data.overlay.first} moreInfo={data.moreInfo} secondOverlayInfo={data.overlay.second} />
              })
          }
        </section>

        <DividerOnOtherPages />

        <MenuSectionHeader title="PASTA FRESCA" description="Pâtes fraîches" />

        <section className="menu-group-wrapper">
          {
            pastaFrescaData.map((data, i) => {
              return <MenuItem key={i} menuTitle={data.title} menuDescription={data.description} />
            })
          }
        </section>

        <DividerOnOtherPages />


        <div className="menu-more-infos-wrapper">
          {
            Object.values(primiMoreInfos.notes).map((value, i) => {
              return <p key={i}>{value}</p>
            })
          }
        </div>

      </main>
    </>
  );
};

export default Primi;