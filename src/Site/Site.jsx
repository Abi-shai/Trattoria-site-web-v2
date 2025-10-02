import { useState } from "react";
import FullScreenStateContext from "../context/FullscreenContext";
import ScrollToTop from "../utility/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import UtilityBar from "../components/utilityBar/UtilityBar";
import Footer from '../components/footer/Footer'

import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
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
import Pizza from "./pages/Pizza/Pizza";



import './Site.css';

const Site = () => {

  const [state, setState] = useState('closed');

  const toggleState = () => {
    setState(currentState => (currentState === 'closed' ? 'opened' : 'closed'));
  };


  return (
    <FullScreenStateContext.Provider value={{ state, toggleState }} >
      <div
        style={state === 'opened' ? { height: '100vh', overflow: 'hidden' } : {}}
        className="site-page"
      >

        <BrowserRouter>
          <ScrollToTop />
          <div className="top-bars">
            <UtilityBar />
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/carte">
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
        </BrowserRouter>

      </div>
    </FullScreenStateContext.Provider>
  )
}

export default Site;
