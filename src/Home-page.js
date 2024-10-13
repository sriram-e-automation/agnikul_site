import React from "react";
import "./css/home.css";
import Init from "./js/home";
import { Link } from "react-router-dom";
import log from "./images/logo.png";
import agnibaan from "./images/home/home-agni.jpg";
import satelite from "./images/small-logo.png";
import navBar from "./js/common";
import cardback from "./images/home/card-back.png";
import spaceshipWhite from "./images/form-icons/spaceship-white.png";
import flag from "./images/form-icons/launch-location.png";
import orbit from "./images/form-icons/orbital-inclination.png";
import payload from "./images/form-icons/payload-mass.png";
import bannericon from "./images/home/banner-icon.png";
import quote from "./images/home/quote.png";
import dots from "./images/home/form-back.png";
import down from "./images/form-icons/down-arrow.png";
import NavBarComponent from "./navbar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      launch: "LAUNCH LOCATION",
      orbit: "ORBITAL INCLINATION",
      payload: "PAYLOAD MASS",
    };

    this.enterLaunch = this.enterLaunch.bind(this);
    this.enterPayload = this.enterPayload.bind(this);
    this.enterOrbit = this.enterOrbit.bind(this);
  }

  enterLaunch(name) {
    if (
      !document.getElementById("location-field").classList.contains("selected")
    )
      document.getElementById("location-field").classList.add("selected");
    this.setState({
      launch: name,
    });
  }

  enterOrbit(name) {
    if (
      !document
        .getElementById("inclination-field")
        .classList.contains("selected")
    )
      document.getElementById("inclination-field").classList.add("selected");
    this.setState({
      orbit: name,
    });
  }

  enterPayload(name) {
    if (
      !document.getElementById("payload-field").classList.contains("selected")
    )
      document.getElementById("payload-field").classList.add("selected");
    this.setState({
      payload: name,
    });
  }

  render() {
    Init(); // function to initialize animations and swipers // function to initialize animations and swipers

    return (
      <div className="body">
        {/* ***************NAVBAR******************* */}
        <NavBarComponent></NavBarComponent>{" "}
        {/*********************************HOME BANNER***********************************************************************/}
        <div className="home__home-banner">
          <div className="home__banner-content">
            <img src={bannericon} className="home__banner-icon" />
            <h1 className="home__banner-first-line">Bringing Space Within</h1>
            <h1 className="home__banner-second-line">Everyone's Reach</h1>
            <p className="home__banner-text">
              Going to space shouldn’t be the hardest part of utilizing, living
              in or working from space. So, why not design & build a product
              that makes the earth-to-space journey as simple, as quick and as
              affordable as possible?
            </p>
            <Link className="home__banner-link" to="/agnibaan">
              Check out Agnibaan
            </Link>
          </div>
        </div>
        {/*********************************AGNIBAAN TRAILER***********************************************************************/}
        <div className="home__second-section">
          <div className="home__second-content">
            <img src={satelite} className="home__second-section-icon" />
            <h3 className="home__second-section-heading">
              Agnibaan is a highly customizable, 2 stage launch vehicle.
            </h3>
            <p className="home__second-section-text">
              Capable of taking upto 100 kg to orbits around 700 km high,
              Agnibaan can access both low and high inclination orbits and is
              completely mobile - designed for accessing more than 10
              launchports.
            </p>
            <br></br>
            <p className="home__second-section-text">
              Driven by LOX/Kerosene engines in all its stages, Agnibaan is
              configurable by the customer. Yes, Agnibaan doesn’t fly with the
              same number of engines all the time. The mission, the satellite
              and the launchport itself would decide how many engines go on the
              first stage.
            </p>
            <p className="home__second-section-text">
              How is this possible? What about controllability? Assembly?
            </p>
            <Link to="/agnibaan" className="home__second-section-link">
              Tell me more
            </Link>
          </div>
          <div className="home__right-image">
            <img
              className="home__right-within home__right-within-animated"
              src={agnibaan}
            />
          </div>
        </div>
        {/*********************************FACTS & FIGURES***********************************************************************/}
        <div className="container-fluid home__third-section">
          <div className="home__third-content">
            <img src={quote} className="home__quote"></img>
            <img src={satelite} className="home__third-section-icon" />
            <h3 className="home__second-section-heading">Facts & Figures</h3>
            <p className="home__second-section-text">
              Agnibaan’s first stage could have 4 / 5 / 6 or 7 engines. An
              optional third “baby” stage might be available for select
              missions.
            </p>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="card" id="firstcard">
                <img className="home__back-icon" src={cardback} />
                <div className="card-body">
                  <h1 className="card-head">
                    <b>5</b>
                  </h1>
                  <h3 className="card-title">
                    <b>Configurations</b>
                  </h3>
                  <p className="card-text">
                    A first stage with 4 / 5 / 6 or 7 engines. A “baby” stage
                    could be made available for select missions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="home__back-icon" src={cardback} />
                <div className="card-body">
                  <h1 className="card-head">
                    <b>2</b>
                  </h1>
                  <h3 className="card-title">
                    <b>Weeks</b>
                  </h3>
                  <p className="card-text">
                    Payload integration to launch won’t take more than a
                    fortnight. Yes, launch-when-you-want.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="home__back-icon" src={cardback} />
                <div className="card-body">
                  <h1 className="card-head">
                    <b>10+</b>
                  </h1>
                  <h3 className="card-title">
                    <b>Launch Ports</b>
                  </h3>
                  <p className="card-text">
                    Access to 10+ launchports today. Access to 25+ coming soon.
                    Yes, launch-where-you-want.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img className="home__back-icon" src={cardback} />
                <div className="card-body">
                  <h1 className="card-head">
                    <b>100kg</b>
                  </h1>
                  <h3 className="card-title">
                    <b>Mass</b>
                  </h3>
                  <p className="card-text">
                    Same price per kg for any payload in the 25-100 kg range.
                    Yes, pay-for-what-you-launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*********************************BOOK MY LAUNCH TRAILER**********************************************************************/}
        <div className="home__fourth-section">
          <div className="home__fourth-head">
            <p className="home__mid-text">Ready To Launch ?</p>
            <br></br>
            <br></br>
            <p className="home__fourth-section-text">
              Yes, Agnibaan is configurable (If you have not picked that up
              already)!. So, let’s go to space together.
            </p>
            <div className="row">
                  <div className="col">
                    <a href="#/book" className="custom-button ">
                      <img src={spaceshipWhite}></img>
                      <span> BOOK A LAUNCH</span>
                    </a>
                  </div>
                </div>
            {/* <form>
              <div className="container-fluid custom-form">
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown" id="form-launch">
                      <button
                        className="dropdown-toggle custom-form-control form-launch"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="form-launch"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={flag} className="custom"></img>
                          </div>
                          <div className="col">
                            <p
                              className="form-control-name"
                              id="location-field"
                            >
                              {this.state.launch}
                            </p>
                          </div>
                          <div className="col-xs">
                            <img className="arrow" src={down} />
                          </div>
                        </div>
                      </button>
                      <div
                        className="dropdown-menu custom-form-options"
                        aria-labelledby="dropdownMenuButton"
                        id="location"
                      >
                        <div className="custom-form-options-inner">
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterLaunch("Asia Pacific")}
                          >
                            Asia Pacific
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterLaunch("India")}
                          >
                            India
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterLaunch("Northern Europe")}
                          >
                            Northern Europe
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) =>
                              this.enterLaunch("Northern America")
                            }
                          >
                            Northern America
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown" id="form-orbit">
                      <button
                        className=" custom-form-control-half dropdown-toggle form-orbit"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="#form-orbit"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={orbit} className="custom"></img>
                          </div>
                          <div className="col">
                            <p
                              className="form-control-name"
                              id="inclination-field"
                            >
                              {this.state.orbit}
                            </p>
                          </div>
                          <div className="col-xs">
                            <img className="arrow" src={down} />
                          </div>
                        </div>
                      </button>
                      <div
                        className="dropdown-menu custom-form-options"
                        aria-labelledby="dropdownMenuButton"
                        id="inclination"
                      >
                        <div className="custom-form-options-inner">
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterOrbit("SSO")}
                          >
                            SSO
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterOrbit("50 deg to SSo")}
                          >
                            50 deg to SSO
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterOrbit("0 - 50 deg")}
                          >
                            0 - 50 deg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="dropdown" id="form-payload">
                      <button
                        className="custom-form-control-half dropdown-toggle form-payload"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="#form-payload"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={payload} className="custom"></img>
                          </div>
                          <div className="col">
                            <p className="form-control-name" id="payload-field">
                              {this.state.payload}
                            </p>
                          </div>
                          <div className="col-xs">
                            <img className="arrow" src={down} />
                          </div>
                        </div>
                      </button>
                      <div
                        className="dropdown-menu custom-form-options"
                        aria-labelledby="dropdownMenuButton"
                        id="payload"
                      >
                        <div className="custom-form-options-inner">
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterPayload("< 20 kg")}
                          >
                            {" "}
                            &lt; 20 kg
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterPayload("20 - 40 kg")}
                          >
                            20 - 40 kg
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterPayload("40 - 60 kg")}
                          >
                            40 - 60 kg
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterPayload("60 - 80 kg")}
                          >
                            60 - 80 kg
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterPayload("80 - 100 kg")}
                          >
                            80 - 100 kg
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={(e) => this.enterPayload("> 100 kg")}
                          >
                            {" "}
                            &gt; 100 kg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="form-warning">Fill out all fields</p>
                <div className="row">
                  <div className="col">
                    <button className="custom-button custom-modal-show">
                      <img src={spaceshipWhite}></img>
                      <span> BUILD MY VEHICLE</span>
                    </button>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
          <img src={dots} className="form-back" />
        </div>
        {/* <div className="home__fifth-section">
          <p className="home__fifth-content">I am curious</p>
          <p className="home__fifth-section-link">
            <a>If you have a question, please reach out.</a>
          </p>
        </div> */}
        {/*********************************MODAL AFTER CLICKING THE FORM BUTTON***********************************************************************/}
        <div className="home__custom-modal-out">
          <div className="home__custom-modal-outer">
            <div className="home__custom-modal">
              <p className="home__close-icon">X</p>
              <p className="home__custom-modal-text">
                We have received this information. Thanks! Can you please take
                1-2 mins more to give us more information so that we can assign
                a Payload Acquisition Strategist to your query?
              </p>
              <Link
                to={{
                  pathname: "/book",
                  state: {
                    launch: this.state.launch,
                    orbit: this.state.orbit,
                    payload: this.state.payload,
                  },
                }}
              >
                <button className="custom-button custom-modal-button">
                  <span>Let's Make Orbit</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ****************FOOTER AND MODAL FOR PRIVACY POLICY****************** */}
        <div className="custom-modal-out">
          <div className="custom-modal-outer">
            <div className="custom-modal">
              <p className="close-icon">X</p>
              <p className="custom-modal-heading">
                TERMS, CONDITIONS AND PRIVACY POLICY
              </p>
              <p className="custom-modal-text">
                These terms of use are an agreement between Agnikul Cosmos
                Private Limited (“Agnikul”, “we”, “us” or “our”) and users of
                its website (“you”, “your” or “user”). This agreement (the
                “Agreement”) also governs your use of this website{" "}
                <a href="https://nikul.in">(https://www.agnikul.in/)</a> (the
                “Site”). By using the Site, you acknowledge that you have
                reviewed and agree to all of the terms of this Agreement and
                agree to be bound by them in connection with your use of the
                Site. By entering, accessing, browsing, submitting information
                to, or otherwise using this site, you acknowledge and agree to
                the following terms and conditions.
              </p>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Intellectual Property</p>
                <p className="custom-modal-text">
                  All intellectual property rights in the Site including
                  content, graphics and copyright works are owned by us. We
                  exclusively own all rights in the compilation, design and
                  layout of the Site.<br></br>
                  You may access, view and print the content on the Site
                  provided that you only use that content for your personal use
                  or otherwise in relation to using or considering our services.
                  <br></br>
                  You must obtain our written permission to copy, reproduce or
                  publish any of the content (including graphics, videos,
                  photographs or other copyright works) on the Site
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Third Party Websites</p>
                <p className="custom-modal_text">
                  From time to time, the Site may include features and
                  functionality that allow you to interact with other sites that
                  are not under our control, including social media websites. We
                  provide these features, functionality, and links to you only
                  as a convenience and do not endorse any linked websites or
                  social media sites and are not responsible for the contents or
                  transmission of any linked websites or social media sites.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">
                  Provision of Information and Privacy
                </p>
                <p className="custom-modal-text">
                  You are not required to provide personal information to us. If
                  you provide information to us, you will ensure that such
                  information is accurate and complete.<br></br>
                  We collect the personal information provided to us and may use
                  it for communicating with you, statistical analysis, and
                  research and development.<br></br>
                  We do not generally disclose personal information to third
                  parties for use for their own purposes. In some instances, we
                  may do so, including to our affiliates or providers who
                  complete transactions or perform services on our behalf, or if
                  we are required to by law.<br></br>
                  Any personal information you provide to us may be stored on
                  our providers’ secure servers. This may involve transferring
                  your information to countries which have less legal protection
                  for personal information than the countries in which you or we
                  are based.<br></br>
                  We may also collect technical data and related information
                  when you access or log on to the Site. This may include
                  information about your computer/tablet/mobile phone and the
                  way users arrive at, browse or interact with the Site. We may
                  collect this information through the use of cookies or other
                  means. If you want to disable cookies, you can do so by
                  changing your browser settings, although this may alter the
                  functionality of the Site. We use the technical information
                  collected to have a better understanding of how people use the
                  Site and how we might improve it
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">All Liabilities Excluded</p>
                <p className="custom-modal-text">
                  You agree that your use of this Site is at your sole risk.
                  Because of the number of possible sources of information
                  available through the Site, and the inherent hazards and
                  uncertainties of electronic distribution, there may be delays,
                  omissions, inaccuracies or other problems with such
                  information.<br></br>
                  To the extent permitted by law:
                </p>
                <ol>
                  <li className="custom-modal-text">
                    all warranties, representations and guarantees are excluded,
                    including suitability, fitness for purpose, appropriateness,
                    availability for use, accuracy or completeness of the Site
                    or the content on or accessed through it;
                  </li>
                  <li className="custom-modal-text">
                    under no circumstances shall Agnikul or its affiliates,
                    agents or licensors be liable to you or anyone else for any
                    damages (whether direct, indirect, punitive, incidental,
                    special, consequential or otherwise, or whether resulting
                    from tort, contract or other theories of law) including but
                    not limited to attorneys’ fees and lost profits, in
                    connection with, or in any manner arising out of: (1) the
                    use or inability to use this Site and its content; (2) any
                    goods or services obtained through third parties referenced
                    or made available on or through this Site; (3) any errors or
                    omissions in the content or information on the Site; or (4)
                    any computer virus or other programming device, even if
                    Agnikul is advised of the possibility thereof; and
                  </li>
                  <li className="custom-modal-text">
                    you indemnify us against all loss we suffer or incur as a
                    direct or indirect result of your failure to comply with
                    this Agreement.
                  </li>
                </ol>
                <p className="custom-modal-text">
                  If you become dissatisfied with this Site, or the terms,
                  conditions or policies governing this Site, your sole and
                  exclusive remedy is to discontinue using this Site. This
                  limitation on damages is essential to the agreement between
                  you and us and the Site would not be provided free of charge
                  without such limitation.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">
                  Governing Law and Jurisdiction
                </p>
                <p className="custom-modal-text">
                  The Site, all related content, and this Agreement shall be
                  governed by and construed in accordance with the laws of
                  India, without regard to the principles of conflicts of laws.
                  The courts of Chennai, India shall have exclusive jurisdiction
                  on any dispute that arises in relation to this Agreement or
                  your use of the Site.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Amendments</p>
                <p className="custom-modal-text">
                  We may amend this Agreement from time to time, and you should
                  ensure that you check and read the same regularly. If you
                  continue to use the Site after this Agreement is amended, you
                  are deemed to have agreed with the new terms of this
                  Agreement.
                </p>
              </div>
              <div className="custom-modal-section">
                <p className="custom-modal-head">Contact</p>
                <p className="custom-modal-text">
                  If you have any queries, please contact privacy@agnikul.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <div className="footer-section">
                  <p className="footer-normal phone">Phone</p>
                  <p className="footer-bolder">+91 72472 46334</p>
                </div>
              </div>
              <div className="col-sm border-column">
                <div className="footer-section">
                  <p className="footer-normal">Addresses</p>
                  <p className="footer-bolder">
                    Agnikul Cosmos Private Limited.
                  </p>
                  <p className="footer-bold">
                    National Center for Combustion R&D, <br></br>3rd floor, IIT
                    Madras, <br></br> Chennai 600036
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="footer-section footer-feel-free">
                  <p className="footer-normal">
                    Curious to know more about us ? Reach out to
                  </p>
                  <a href="mailto:curious@agnikul.in">
                    <p className="footer-bolder">curious@agnikul.in</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="footer-section">
                  <p className="footer-normal">Email</p>
                  <p className="footer-bolder">
                    <Link to="/career" className="nav">
                      Careers
                    </Link>{" "}
                    -
                    <a href="mailto:humancapital@agnikul.in">
                      humancapital@agnikul.in
                    </a>
                  </p>

                  <p className="footer-bolder">
                    <Link to="/book" className="nav">
                      Customers
                    </Link>{" "}
                    -
                    <a href="mailto:payloadpeople@agnikul.in">
                      payloadpeople@agnikul.in
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm border-column">
                <div className="footer-section">
                  <p className="footer-bolder">
                    Agnikul Cosmos Launch Vehicles Private Limited
                  </p>
                  <p className="footer-bold">
                    Kerala Startup Mission, Technopark, Thejaswini, G3B,
                    Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala
                    695581
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="footer-section">
                  <div className="row">
                    <div className="col-xs">
                      <a
                        href="https://medium.com/agnikuls-blog"
                        target="_blank"
                      >
                        <p className="footer-bolder">Blog</p>
                      </a>
                    </div>
                    <div className="col-xs">
                      <Link to="/news" className="footer-bolder">
                        <p className="footer-bolder">News</p>
                      </Link>
                    </div>
                    <div className="col-xs">
                      <a
                        className="footer-bolder"
                        href="https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured"
                        target="_blank"
                      >
                        <p className="footer-bolder">Videos</p>
                      </a>
                    </div>
                  </div>
                  <p className="footer-bolder book__terms__link">
                    Terms, Conditions and Privacy Policy
                  </p>
                  <div className="footer-social-logos">
                    <a
                      href="https://twitter.com/@agnikulcosmos"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://instagram.com/agnikul/" target="_blank">
                      <i
                        className="fa fa-lg fa-lg fa-instagram"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/agnikul-cosmos/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
