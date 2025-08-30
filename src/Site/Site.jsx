import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Home from "./pages/home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";

import './Site.css';

const Site = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurant" element={<Pizza />} />
          <Route path="/restaurant" element={<Cicchetti />} />
          <Route path="/restaurant" element={<Antipasti />} />
          <Route path="/restaurant" element={<Primi />} />
          <Route path="/restaurant" element={<Secondi />} />
          <Route path="/restaurant" element={<Desserts />} />
          <Route path="/restaurant" element={<Aperitifs />} />
          <Route path="/restaurant" element={<Cocktails />} />
          <Route path="/restaurant" element={<Vins />} />
          <Route path="/restaurant" element={<LaGallery />} />
          <Route path="/restaurant" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Site;
