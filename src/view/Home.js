import React, { useEffect } from "react";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Recommends from "../components/Recommends";
import NewBrianView from "../components/NewBrianView";
import Trending from "../components/Trending";
import Original from "../components/Original";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  // const navigate = useNavigate();
  // const { uid } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (uid == null) {
  //     return navigate("/login");
  //   } else {
  //     return navigate("/");
  //   }
  // }, [uid, navigate]);

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
