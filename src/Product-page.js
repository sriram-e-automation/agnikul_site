import React from "react";
import "./css/products.css";
import Init from "./js/products";
import navBar from "./js/common";
import log from "./images/logo.png";

import rocket1 from "./images/products/rocket-1.png";
import rocket2 from "./images/products/rocket-2.png";
import rocket3 from "./images/products/rocket-3.png";
import truck from "./images/products/truck.png";
import stand from "./images/products/stand.png";
import hydraulic from "./images/products/hydraulic.png";
import hydraulicM from "./images/products/hydraulic-mobile.png";
import shopIcon from './images/products/shop.svg'
import ml from "./images/products/mass.png";
import mask from "./images/products/lift-off-mass.png";
import resize from "./images/products/height.png";
import angle from "./images/products/diameter.png";
import dp from "./images/products/temporary.png";
import aaa from "./images/products/thrust.png";
import shape from "./images/products/max-payload.png";
import server from "./images/products/payload-guide.png";

import thirdFirst from "./images/products/Scroll2_Lower.png";
import thirdSecond from "./images/products/Scroll2_Top1.png";
import thirdThird from "./images/products/Scroll2_Top2.png";
import fourthFirst from "./images/products/Scroll3_Lower.png";

import { Link } from "react-router-dom";



function Product() {
  Init(); // function to initialize animations and swipers

  return (
    <div className="body">
      {/* *************************NAVBAR******************** */}
      <div className="navBar nav-fixed">
        <div
          className="topnav row justify-content-around align-items-baseline"
          id="myTopnav"
        >
          <div className="column-lg nav-brandc">
            <Link to="/">
              <img className="logo" src={log} />
            </Link>
          </div>
          <div className="column-sm">
            <Link to="/about" className="nav-itemc nav-linkc">
              About
            </Link>
          </div>
          <div className="column-md">
            <Link to="/tech" className="nav-itemc nav-linkc">
              Engineering
            </Link>
          </div>
          <div className="column-md">
            <Link to="/agnibaan" className="nav-itemc nav-linkc active">
              Agnibaan
            </Link>
          </div>
          <div className="column-md">
            <Link to="/SorTeD" className="nav-itemc nav-linkc">
              SorTeD
            </Link>
          </div>
          <div className="column-sm">
            <Link to="/team" className="nav-itemc nav-linkc">
              Team
            </Link>
          </div>
          <div className="column-sm">
            <Link to="/news" className="nav-itemc nav-linkc">
              News
            </Link>
          </div>
          <div className="column">
            <Link to="/career" className="nav-itemc nav-linkc">
              Careers
            </Link>
          </div>
          <div id="navButtonDiv" style={{width:"14%"}} className="column-lg">
          <a href="https://shop.agnikul.in/" target="_blank">
            <button className="nav-itemc nav-buttond">
              {" "}
              <img src={shopIcon} alt="" style={{height:"23px", padding:"0px 5px 5px 0px"}}/>
              COSMOS STORE
            </button>
          </a>
        </div>
          <div id="navButtonDiv" className="column-lg">
            <Link to="/book">
              <button className="nav-itemc nav-buttonc">BOOK A LAUNCH</button>
            </Link>
          </div>
        </div>
        <div className="iconc">
          <div onClick={navBar}>
            <i className="fa fa-bars fa-lg"></i>
          </div>
        </div>
      </div>

      <div className="original-div">
        {/* ************************FIRST SCROLL CONTENT******************** */}
        <div className="first-scroll-content">
          <p className="first-scroll-heading">A CONFIGURABLE DESIGN</p>
          <p className="first-scroll-text">
            Agnibaan is a customizable vehicle. When we were at the drawing
            board, we carefully analyzed what our customers really needed. We
            then engineered enough flexibility into the vehicle while carefully
            designing to ensure reliability. Removing a few engines and flying
            is more involved than it sounds. We had to ensure vehicle
            controllability, stability, lift off thrust-to-weight ratio (& many
            other parameters) made sense for each of these versions.<br></br>
            <span>
              (“Agnibaan” is a Sanksrit word that translates to mean “an arrow
              of fire”.)
            </span>
          </p>
        </div>

        {/* ************* ROCKET ********************************* */}
        {/* 
              For the animations of first, second, third and fourth , we need a transform-origin of
              50%, 50%. But, for the last image, we need a transform origin of 100% 50%.
              Hence, tow rocket images are made
        */}
        <div className="rocket-horizontal">
          <img src={rocket1} className="rocket-1" />
          <img src={rocket2} className="rocket-2" />
          <img src={rocket3} className="rocket-3" />
        </div>

        <div className="rocket-horizontal-2">
          <img src={rocket1} className="rocket-1" />
          <img src={rocket2} className="rocket-2" />
          <img src={rocket3} className="rocket-3" />
        </div>

        <img src={truck} className="truck" />
        <img src={stand} className="stand" />

        {/* different images are used for mobile and desktop, since we need a larger black portion for 
        desktop and a smaller black portion for mobile 
        */}

        <img src={hydraulic} className="hydraulic" />

        <img src={hydraulicM} className="hydraulic-mobile" />

        {/* *************** FIRST SCROLL BOTTOM CONTENT ********************* */}
        <div className="first-scroll-specs">
          <div style={{display:"flex", flexDirection:"row"}} className="row justify-content-around">
            <div className="col-xs" style={{width:"250px"}}>
              <img className="product__icon" src={shape}></img>
              <p className="spec-name">MAX PAYLOAD</p>
              <p className="spec-value">100 kg to 700 km LEO</p>
            </div>
            <div className="col-xs" style={{width:"180px"}}>
              <img className="product__icon" src={resize}></img>
              <p className="spec-name">HEIGHT</p>
              <p className="spec-value">18 m</p>
            </div>
            <div className="col-xs" style={{width:"180px"}}>
              <img className="product__icon" src={angle}></img>
              <p className="spec-name">DIAMETER</p>
              <p className="spec-value">1.3 m</p>
            </div>
            <div className="col-xs" style={{width:"200px"}}>
              <img className="product__icon" src={mask}></img>
              <p className="spec-name">LIFT OFF MASS</p>
              <p className="spec-value">14000 kg</p>
            </div>
          </div>
        </div>

        {/* *************** SECOND SCROLL ********************* */}
        <div className="second-scroll second-scroll-1">
          <p className="number">03</p>
          <p className="content">BABY STAGE</p>
        </div>

        <div className="second-scroll second-scroll-2">
          {/* <p className="heading">A NEW PROPULSION CYCLE</p> */}
          <p className="text">
            An optional baby stage sits inside the payload fairing with an
            envelope large enough for almost all small satellite needs.
          </p>
        </div>

        <div className="second-scroll second-scroll-3">
          <div className="row justify-content-around">
            <div className="col">
              <img className="product__icon" src={dp}></img>
              <p className="heading">PAYLOAD ENVELOPE</p>
              <p className="text">
                2 m x 1.5 m envelope with the ability to take one or many
                satellites.
              </p>
            </div>

            <div className="col">
              <img className="product__icon" src={ml}></img>
              <p className="heading">1 - 100kg</p>
              <p className="text">
                Flat costing for any payload between 25 - 100 kg.
              </p>
            </div>

            <div className="col">
              <img className="product__icon" src={server}></img>
              <p className="heading">Payload Guide</p>
              <p className="text">
                For more information, please request our payload
                guide.(payloadpeople@agnikul.in)
              </p>
            </div>
          </div>
        </div>

        {/* *************** THIRD SCROLL********************* */}

        <div className="third-scroll third-scroll-1">
          <p className="number">02</p>
          <p className="content">STAGE 2</p>
        </div>

        <div className="third-scroll third-scroll-2">
          <p className="text">
            Our second stage is powered by the Agnite vacuum optimized engine.
          </p>
        </div>

        <div className="third-scroll third-scroll-3">
          <img className="product__icon" src={aaa}></img>
          <p className="heading">TOTAL THRUST</p>
          <p className="text">Sea Level Thrust - 25 kN.</p>
        </div>

        <div className="third-scroll third-scroll-4">
          <p className="text">
            Agnite is the same engine that powers our first stage as well. It
            can deliver upto 355 seconds of Isp in vacuum. Running an electric
            pump fed engine offers greater & finer propellant utilization
            techniques to enhance payload capacity.
          </p>
        </div>

        {/* <div className="third-scroll  third-image-1">
                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                <image href={homepage} x="-25" width="150" height="100" />
                            </pattern>
                        </defs>
                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />

                    </svg>
                </div> */}

        <div className="third-scroll  third-image-2">
          <svg
            viewBox="0 0 90 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="tf"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image href={thirdFirst} x="12.5" width="75" height="100" />
              </pattern>
            </defs>
            <polygon
              points="45 1 90 25 90 75 45 99 0 75 0 25"
              fill="url(#tf)"
              stroke="#4d8c52"
            />
            {/* <polygon points="145 1 190 25 190 75 145 99 95 75 95 25" fill="url(#img)" />
                        <polygon points="230 1 285 25 270 75 215 99 180 75 180 25" fill="url(#img)" /> */}
          </svg>
        </div>

        <div className="third-scroll  third-image-3">
          <svg
            viewBox="0 0 90 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="ts"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image href={thirdSecond} x="12.5" width="75" height="100" />
              </pattern>
            </defs>
            <polygon
              points="45 1 90 25 90 75 45 99 0 75 0 25"
              fill="url(#ts)"
              stroke="#4d8c52"
            />
          </svg>
        </div>

        <div className="third-scroll  third-image-4">
          <svg
            viewBox="0 0 90 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="tt"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image href={thirdThird} x="12.5" width="75" height="100" />
              </pattern>
            </defs>
            <polygon
              points="45 1 90 25 90 75 45 99 0 75 0 25"
              fill="url(#tt)"
              stroke="#4d8c52"
            />
          </svg>
        </div>

        {/* *************** FOURTH SCROLL********************* */}

        <div className="fourth-scroll fourth-scroll-1">
          <p className="number">01</p>
          <p className="content">STAGE 1</p>
        </div>

        <div className="fourth-scroll fourth-scroll-2">
          <p className="text">
            Agnibaan’s first stage is powered by 7 Agnite engines each
            delivering 25 kN of thrust at sea level. All of these engines are
            electric pump fed engines allowing for simplified engine design and
            highly configurable engine clustering architectures.
          </p>
        </div>

        <div className="fourth-scroll fourth-scroll-3">
          <p className="text">
            Capable of operating with a sea level Isp of 285 seconds, the entire
            combustion section here is a single piece assembly and 100% 3D
            printed.
          </p>
        </div>

        <div className="fourth-scroll fourth-image fourth-image-1">
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="ff"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <image href={fourthFirst} x="12.5" width="75" height="100" />
              </pattern>
            </defs>
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill="url(#ff)"
              stroke="#4d8c52"
            />
          </svg>
        </div>

        {/* <div className="fourth-scroll fourth-image fourth-image-2">
                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                <image href={homepage} x="-25" width="150" height="100" />
                            </pattern>
                        </defs>
                        <polygon points="1 50 25 95 75 95 99 50 75 5 25 5" fill="url(#img)" />
            50 1 95 25 95 75 50 99 5 75 5 25
          </svg>
                </div> */}

        {/* *************** FIFTH SCROLL********************* */}

        <div className="fifth-scroll fifth-scroll-1">
          <p className="number">00</p>
          <p className="content">LAUNCH PEDESTAL - DHANUSH</p>
        </div>

        <div className="fifth-scroll fifth-scroll-2">
          <p className="text">
            Agnibaan was built keeping in mind the capability to launch from
            multiple launchports across the world. So, we built “Dhanush” - the
            launch pedestal - to support full mobility across all configurations
            of Agnibaan. As opposed to (current versions of) Agnibaan, Dhanush
            is meant for multiple uses and is built with durability and
            transportability in mind. <br></br>
            <span>
              (“Dhanush” is a Sanskrit word that translates to “a celestial bow
              (from which arrows are launched)”. So yes, Agnibaan is launched
              from Dhanush!)
            </span>
          </p>
        </div>

        <div className="fifth-scroll fifth-scroll-3">
          <div className="roww">
            <div className="column">
              <img className="product__icon" src={dp}></img>
              <p className="heading">Access to multiple launchports</p>
              <p className="text">
                Dhanush was built and conceived as a separate product that
                enables the process of launching to be reliable and repeatable
                with consistency.
              </p>
            </div>
            <div className="column">
              <img className="product__icon" src={dp}></img>
              <p className="heading">Mobility</p>
              <p className="text">
                Dimensions of Dhanush were designed keeping in mind road
                dimensions and transportability restrictions globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
