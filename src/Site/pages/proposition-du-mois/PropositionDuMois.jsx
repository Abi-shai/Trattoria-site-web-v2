import { useEffect } from "react";

import { propositionsDuMois } from "../../../menu-data";

import UseWindowSize from "../../../utility/useWindowSize";
import PageHeader from "../../../components/pageHeader/PageHeader";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { DividerOnOtherPages } from "../../../components/divider/Divider";
import MenuSectionHeader from "../../../components/menuSectionHeader/MenuSectionHeader";


import PropositionsDuMoisImage from '../../../assets/images/carte/propositions-du-mois.png';

import './PropositionDuMois.css';

const PropositionDuMois = () => {

  const currentWith = UseWindowSize().width;

  const propositionDuChefData = propositionsDuMois.propositionsDuChef;
  const cocktailDuJeudiData = propositionsDuMois.cocktailDuJeudi[0];
  const pizzaDuMoisData = propositionsDuMois.pizzaDuMois[0];
  console.log(cocktailDuJeudiData);

  const removedPropositionDuChefLastItem = propositionDuChefData.slice(0, -1);

  useEffect(() => {

    document.title = 'Propositions du mois | Trattoria Da Alex';
  }, []);

  return (
    <>
      <PageHeader img={PropositionsDuMoisImage} title="Propositions du mois" description="Janvier" />
      <main className="menu-body-main-wrapper">

        <MenuSectionHeader title="Propositions du chef" />
        <section className="menu-group-wrapper">
          {

            currentWith > 1080

              ? propositionDuChefData.map((p, i) => {
                return (
                  <>
                    <MenuItem
                      key={i}
                      menuTitle={p.title}
                      menuDescription={p.description}
                    />
                  </>)
              })

              : removedPropositionDuChefLastItem.map((p, i) => {
                return (
                  <>
                    <MenuItem
                      key={i}
                      menuTitle={p.title}
                      menuDescription={p.description}
                    />
                  </>)
              })

          }
        </section>

        <DividerOnOtherPages />

        <section className="proposition-du-mois">
          <MenuItem
            menuTitle={cocktailDuJeudiData.title}
            menuDescription={cocktailDuJeudiData.ingredients}
            isCentered
          />

          <div className="promo-banner">
            <p>{cocktailDuJeudiData.promoDetails}</p>
          </div>
        </section>

        <DividerOnOtherPages />

        <section className="menu-group-wrapper">
          <MenuItem
            menuTitle={pizzaDuMoisData.title}
            moreInfo={pizzaDuMoisData.moreInfo}
            firstOverlayInfo={pizzaDuMoisData.moreInfos.notes[0]}
            menuDescription={pizzaDuMoisData.description}
            isCentered
          />
        </section>

        <DividerOnOtherPages />

        <div className="menu-more-infos-wrapper">
          <p>{pizzaDuMoisData.moreInfos.notes[1]}</p>
        </div>

      </main>
    </>
  );
};

export default PropositionDuMois;