import React from "react";
import Card from "../Component/cards/WomenCard";
import Brandfilter from "../Component/filters/brand/WomenBrandFilter";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
function WomensPage() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Brandfilter />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default WomensPage;
