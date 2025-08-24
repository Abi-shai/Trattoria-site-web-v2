import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Home from "./routes/home/Home";
import Restaurant from "./routes/Restaurant/Restaurant";

import './Site.css';

const Site = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Site;
