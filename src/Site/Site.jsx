import { useState } from "react";
import ReactGA from 'react-ga4';

import FullScreenStateContext from "../context/FullscreenContext";
import ScrollToTop from "../utility/ScrollToTop";
import { BrowserRouter, Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import RouteChangeTracker from "../utility/RouteChangeTracker";

import Header from "../components/header/Header";
import UtilityBar from "../components/utilityBar/UtilityBar";
import Footer from '../components/footer/Footer'

import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import Ciccheti from "./pages/cicchetti/Cicchetti";
import Antipasti from "./pages/antipasti/Antipasti";
import Primi from "./pages/primi/Primi";
import Secondi from "./pages/secondi/Secondi";
import Desserts from "./pages/desserts/Desserts";
import Aperitifs from "./pages/aperitifs/Aperitifs";
import Cocktails from "./pages/cocktails/Cocktails";
import Vins from "./pages/vins/Vins";
import Lagallery from "./pages/laGallery/Lagallery";
import Contacts from "./pages/contacts/Contacts";
import Pizza from "./pages/pizza/Pizza";


import './Site.css';

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

const PageLayout = () => {
  const location = useLocation();

  return (
    <>
      <RouteChangeTracker />
      <ScrollToTop />
      {/* On applique la clé sur le conteneur des barres de navigation */}
      <div className="top-bars" key={location.pathname}>
        <UtilityBar />
        <Header />
      </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/pizza" element={<Pizza />} />

        <Route path="/carte" element={<Outlet />}>
          {/* Redirige de "/carte" vers la première sous-page par défaut */}
          <Route index element={<Navigate to="/carte/cicchetti" replace />} />
          <Route path="cicchetti" element={<Ciccheti />} />
          <Route path="antipasti" element={<Antipasti />} />
          <Route path="primi" element={<Primi />} />
          <Route path="secondi" element={<Secondi />} />
          <Route path="desserts" element={<Desserts />} />
          <Route path="aperitifs" element={<Aperitifs />} />
          <Route path="cocktails" element={<Cocktails />} />
          <Route path="vins" element={<Vins />} />
        </Route>
        <Route path="/gallery" element={<Lagallery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}


const Site = () => {
  const [state, setState] = useState('closed');

  const toggleState = () => {
    setState(currentState => (currentState === 'opened' ? 'closed' : 'opened'));
    console.log(state);
  };

  return (
    <FullScreenStateContext.Provider value={{ state, toggleState }} >
      <div
        style={state === 'opened' ? { height: '100svh', overflow: 'hidden' } : {}}
        className="site-page"
      >
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </div>
    </FullScreenStateContext.Provider>
  );
}

export default Site;
