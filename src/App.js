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

function Main() {
  return (
    <div className="main">
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
          <h1> One app for your calls and conferences</h1>
          <p>
            Visario is a platform where you can conduct high-quality and secure
            video meetings and calls
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
