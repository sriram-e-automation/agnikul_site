import React, { Component, isValidElement } from "react";
import "./css/book.css";
import log from "./images/logo.png";
import navBar from "./js/common";
import spaceshipWhite from "./images/form-icons/spaceship-white.png";
import Init from "./js/book";
import { Link } from "react-router-dom";
import $ from "jquery";

import NavBarComponent from './navbar';

import flag from "./images/form-icons/launch-location.png";
import orbit from "./images/form-icons/orbital-inclination.png";
import payload from "./images/form-icons/payload-mass.png";
import phone from "./images/form-icons/phone.png";
import mail from "./images/form-icons/letter.png";
import mountain from "./images/form-icons/mountain.png";
import office from "./images/form-icons/office.png";
import location from "./images/form-icons/location.png";
import person from "./images/form-icons/person.png";
import down from "./images/form-icons/down-arrow.png";

import blank from "./images/launch/blank.png";
import AsiaPacific from "./images/launch/Asiapacific.png";
import India from "./images/launch/India.png";
import NorthAmerica from "./images/launch/Northernamerica.png";
import NorthEurope from "./images/launch/Northerneurope.png";



class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launch: "LAUNCH LOCATION",
      orbit: "ORBITAL INCLINATION",
      payload: "PAYLOAD MASS",
      current: blank
    };

    // filling the form if the book my alunch page is called from home page.
    if (props.location != undefined && props.location.state != undefined) {
      if (props.location.state.launch != undefined)
        this.state.launch = props.location.state.launch;
      if (props.location.state.orbit != undefined)
        this.state.orbit = props.location.state.orbit;
      if (props.location.state.payload != undefined)
        this.state.payload = props.location.state.payload;
    }

    this.enterLaunch = this.enterLaunch.bind(this);
    this.enterPayload = this.enterPayload.bind(this);
    this.enterOrbit = this.enterOrbit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
   return (true);
  }
  return (false);
}

  submitForm(e) {
    e.preventDefault();
    const URL =
      "https://script.google.com/macros/s/AKfycbyL2MxkYA_j_Omj0ImUJpU_uHUyv-TgHiIBm9CHiHzuXMjsPcQ/exec";
    var location = this.state.launch;
    var orbit = this.state.orbit;
    var payload = this.state.payload;
    var name = $("#name-field").val();
    var email = $("#email-field").val();
    var company = $("#company-field").val();
    var altitude = $("#altitude-field").text();
    var phone = $("#phone-field").val();
    var preferred = $("#preferred-field").text();
    var tac = document.getElementById("tac");
    var notProper = false;
    $(".form-warning").css("display", "none");
    if (!$("#location-field").hasClass("selected"))
    {
      notProper = true;
      $("#launch-warning").css("display", "block");
    }
    if (!$("#inclination-field").hasClass("selected")) {
      notProper = true;
      $("#orbit-warning").css("display", "block");
    }
    if (!$("#payload-field").hasClass("selected")) {
      notProper = true;
      $("#payload-warning").css("display", "block");
    }
    if (!$("#altitude-field").hasClass("selected")) {
      notProper = true;
      $("#altitude-warning").css("display", "block");
    }
    if (!$("#preferred-field").hasClass("selected")) {
      notProper = true;
      $("#preferred-warning").css("display", "block");
    }
    if (name == "") {
      notProper = true;
      $("#name-warning").css("display", "block");
    }
    if (email == "") {
      notProper = true;
      $("#email-warning").html("Required*");
      $("#email-warning").css("display", "block");
    }
    else if (!this.ValidateEmail(email))
    {
      notProper = true;
      $("#email-warning").html("Enter proper email");
      $("#email-warning").css("display", "block");
    }

    if (!tac.checked)
    {
      notProper = true;
      $("#tac-warning").css("display", "block");
    }
    
    if (notProper)
      return;
    
    $(".custom-button span").html("SUBMITTING..");
    $(".form-warning").css("display", "none");
    var jqxhr = $.ajax({
      url: URL,
      method: "GET",
      dataType: "json",
      data: {
        "Launch Location": location,
        "Orbital Inclination": orbit,
        "Payload Mass": payload,
        "Name": name,
        "Email Address": email,
        "Company": company,
        "Orbital Altitude": altitude,
        "Preferred Site for Payload Integration" : preferred,
        "Phone": phone,
        "Timestamp": new Date(),
      },
    }).done(function (response) {
      window.location = process.env.PUBLIC_URL + "#/book-complete";
    });
  }

  enterLaunch(name) {
    var image = blank;
    if (
      !document.getElementById("location-field").classList.contains("selected")
    )
      document.getElementById("location-field").classList.add("selected");
     if (name == "Asia Pacific") image = AsiaPacific;
     if (name == "Northern Europe") image = NorthEurope;
     if (name == "Northern America") image = NorthAmerica;
     if (name == "India") image = India;
    this.setState({
      launch: name,
      current: image
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
    Init(); // function to initialize animations and swipers

    return (
      <div className="body">
        {/* ***************NAVBAR******************* */}
        <NavBarComponent></NavBarComponent>{" "}
        {/*********************************BOOK MY LAUNCH FORM***********************************************************************/}
        <div className="book__overall-div">
          <p className="book__heading">Book your launch</p>
          <p className="book__head-text">
            Launches should be customer driven but when we look around we find
            them mostly launch vehicle driven. We want to turn it around,
            completely and make it customer-centric.
          </p>
          <div className="book__form-content">
            <form>
              {/*********************************STEP 1***********************************************************************/}

              <p className="book__step">STEP 01</p>
              <div className="container-fluid custom-form">
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown" id="form-launch">
                      <button
                        className="dropdown-toggle custom-form-control"
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
                              className={
                                this.state.launch == "LAUNCH LOCATION"
                                  ? "form-control-name"
                                  : "form-control-name selected"
                              }
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
                    <p className="form-warning" id="launch-warning">
                      Required*
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="book__world-map">
                      <img className="world_image" src={this.state.current} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown" id="form-orbit">
                      <button
                        className=" custom-form-control-half dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="form-orbit"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={orbit} className="custom"></img>
                          </div>
                          <div className="col">
                            <p
                              className={
                                this.state.orbit == "ORBITAL INCLINATION"
                                  ? "form-control-name"
                                  : "form-control-name selected"
                              }
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
                    <p className="form-warning" id="orbit-warning">
                      Required*
                    </p>
                  </div>
                  <div className="col-sm">
                    <div className="dropdown" id="form-payload">
                      <button
                        className="custom-form-control-half dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="form-payload"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={payload} className="custom"></img>
                          </div>
                          <div className="col">
                            <p
                              className={
                                this.state.payload == "PAYLOAD MASS"
                                  ? "form-control-name"
                                  : "form-control-name selected"
                              }
                              id="payload-field"
                            >
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
                    <p className="form-warning" id="payload-warning">
                      Required*
                    </p>
                  </div>
                </div>
              </div>

              {/*********************************STEP 2***********************************************************************/}

              <p className="book__step">STEP 02</p>

              <div className="container-fluid custom-form">
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown" id="form-altitude">
                      <button
                        className="dropdown-toggle custom-form-control"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="form-altitude"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={mountain} className="custom"></img>
                          </div>
                          <div className="col">
                            <p
                              className="form-control-name"
                              id="altitude-field"
                            >
                              ORBITAL ALTITUDE
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
                        id="altitude"
                      >
                        <div className="custom-form-options-inner">
                          <p className="dropdown-item">&lt; 400 km</p>
                          <p className="dropdown-item">400 - 500 km</p>
                          <p className="dropdown-item">500 - 600 km</p>
                          <p className="dropdown-item">600 - 700 km</p>
                          <p className="dropdown-item">&gt; 700 km</p>
                        </div>
                      </div>
                    </div>
                    <p className="form-warning" id="altitude-warning">
                      Required*
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown" id="form-preferred">
                      <button
                        className="dropdown-toggle custom-form-control"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-boundary="form-preferred"
                      >
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={location} className="custom"></img>
                          </div>
                          <div className="col">
                            <p
                              className="form-control-name"
                              id="preferred-field"
                            >
                              PREFERRED SITE OF PAYLOAD INTEGRATION
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
                        id="preferred"
                      >
                        <div className="custom-form-options-inner">
                          <p className="dropdown-item disabled">
                            PREFERRED SITE FOR PAYLOAD INTEGRATION
                          </p>
                          <p className="dropdown-item">Launchpad</p>
                          <p className="dropdown-item">Leave it to Agnikul</p>
                        </div>
                      </div>
                    </div>
                    <p className="form-warning" id="preferred-warning">
                      Required*
                    </p>
                  </div>
                </div>
              </div>

              {/*********************************STEP 3***********************************************************************/}

              <p className="book__step">STEP 03</p>
              <div className="container-fluid custom-form">
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown">
                      <div className="custom-form-control" type="button">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={person} className="custom"></img>
                          </div>
                          <div className="col">
                            <input
                              className="form-control-name"
                              id="name-field"
                              placeholder="NAME"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="form-warning" id="name-warning">
                      Required*
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown">
                      <div className="custom-form-control">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={phone} className="custom"></img>
                          </div>
                          <div className="col">
                            <input
                              className="form-control-name"
                              id="company-field"
                              placeholder="COMPANY"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown">
                      <div className="custom-form-control" type="button">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={mail} className="custom"></img>
                          </div>
                          <div className="col">
                            <input
                              className="form-control-name"
                              id="email-field"
                              type="email"
                              placeholder="EMAIL ADDRESS"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="form-warning" id="email-warning">
                      Required*
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="dropdown">
                      <div className="custom-form-control">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-xs">
                            <img src={phone} className="custom"></img>
                          </div>
                          <div className="col">
                            <input
                              className="form-control-name"
                              id="phone-field"
                              type="phone"
                              placeholder="PHONE NUMBER"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-form-check-group">
                  <label className="custom-form-check-label" htmlFor="tac">
                    <input
                      className="custom-form-check"
                      type="checkbox"
                      id="tac"
                    />
                    <span className="custom-form-check-span"></span>I accept the{" "}
                    <a className="book__terms__link bookk__terms__link">
                      terms, conditions and privacy policy
                    </a>{" "}
                    of the company.
                  </label>

                  <p className="form-warning" id="tac-warning">
                    Required*
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      className="custom-button"
                      onClick={(e) => this.submitForm(e)}
                      type="submit"
                    >
                      <img src={spaceshipWhite}></img>
                      <span>BUILD MY VEHICLE</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
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
                        className="fa fa-lg fa-instagram"
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

export default Book;
