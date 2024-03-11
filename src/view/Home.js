import React from "react";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Recommends from "../components/Recommends";
import NewBrianView from "../components/NewBrianView";
import Trending from "../components/Trending";
import Original from "../components/Original";

const Home = () => {
  return (
    <main className="main-container">
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewBrianView />
      <Trending />
      <Original />
    </main>
  );
};

export default Home;
