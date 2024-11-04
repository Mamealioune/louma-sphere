import React from "react";
import Categories from "../Components/Categories";
import Jumbotron from "../Components/Jumbotron";
import Navbar from "../Components/Navbar";
import ScrollTopButton from "../Components/ScrollTopButton";
import ProduictCard from "../ProduictCard";

const Accueil = () => {
  return <div>
    <Navbar />
    <Categories />
    <Jumbotron />
    <ProduictCard />
    <ScrollTopButton />
  </div>;
};

export default Accueil;
