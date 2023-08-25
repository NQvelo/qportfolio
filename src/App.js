import React from "react";
import Cards from "./components/Cards";

import ButtonComp from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Header";

import "./App.css";
import Header from "./components/Header";
import BottomNavBar from "./components/ButtomNavBar";

import Spline from "@splinetool/react-spline";

import {
  faHome,
  faSearch,
  faHeart,
  faUser,
  faPager,
  faAnchorLock,
  faArrowsDownToPeople,
} from "@fortawesome/free-solid-svg-icons";

import { Helmet } from "react-helmet";

function Main() {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>qportfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="coverDiv">
        <Header />
        <div className="splineDiv">
          <Spline
            className="slineelement"
            style={{
              width: "100%",
              height: "400px",
              marginTop: "80px",
            }}
            scene="https://prod.spline.design/LdZCf6cVAt5VOaEW/scene.splinecode"
          />
        </div>

        <div className="coverText">
          <h1> Crafting Dreams into Visual Reality</h1>
          <p>
            Dive into my portfolio, where artistic passions come alive. Explore
            a fusion of creativity, skill, and imagination, woven into a
            tapestry of visual stories and innovative designs. Welcome!
          </p>
          <div className="buttonclass">
            <ButtonComp
              label={"Create a meeting"}
              backgroundColor={"white"}
              borderColor={"transparent"}
              fontColor={"black"}
            />
            <ButtonComp
              label={"Download app"}
              backgroundColor={"transparent"}
              borderColor={"white"}
              fontColor={"white"}
            />
          </div>
        </div>
      </div>

      <div className="secondscreen">
        <h1>services</h1>
        <p>servicesservicesservicesservicesservicesservicesservices</p>
        <div className="grid-container">
          <Cards icon={faHome} />
          <Cards icon={faHeart} />
          <Cards icon={faPager} />
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}

export default Main;
