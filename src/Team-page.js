import React from "react";
import "./css/team.css";
// import "swiper/css";
import "swiper/css/swiper.min.css";

import log from "./images/logo.png";
import Init from "./js/team";
import navBar from "./js/common";

import srinath from "./images/team/Srinath.jpg";
import moinn from "./images/team/Moin.jpg";

import shop from "./images/products/shopWhite.svg";
import youtube from "./images/products/youtube.png";
import perumal from "./images/about/advisors/Perumal.jpg";
import pvr from "./images/about/advisors/PVR.jpg";
import satya from "./images/about/advisors/Satya.jpg";
import sekar from "./images/about/advisors/Shekar.jpg";


import NavBarComponent from "./navbar";

import { Link } from "react-router-dom";

function Team() {
  Init(); // function to initialize animations and swipers

  return (
    <div className="body">
      {/* ***************NAVBAR******************* */}
      <NavBarComponent></NavBarComponent>{" "}
      {/* *************** TEAM BANNER ********************* */}
      {/*
      If we want to add a member, add the photo in public/images folder. 
      Also name the photo as a number. The photos should be numbered from 1 
      to <Number of members>.
      After that, alter the numberOfMembers variable in team.js file.
      */}
      <div className="team__team-banner">
        <div className="row">
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col col-m">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col col-m">
            <img className="holder" />
            <img className="holder-2" />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col-2 team__banner-content">
            <p className="team__banner-heading">Meet Agnikul's crew</p>
            <p className="team__banner-text">
              The human engines driving Agnikul are our extremely dedicated and
              hardworking crew. We are a fairly young team of 60 people, guided
              by an extremely accomplished set of advisors - we constantly
              strive to balance experience with passion.
            </p>
          </div>
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col col-m">
            <img className="holder" />
            <img className="holder-2" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col col-m">
            <img className="holder" />
            <img className="holder-2" />
          </div>
          <div className="col col-m">
            <img className="holder" />
            <img className="holder-2" />
          </div>
        </div>
      </div>
      {/* *************** FOUNDING TEAM ********************* */}
      <div className="team__second-section">
        <div className="team__second-content">
          <h3 className="team__second-section-heading">Founding Team</h3>
          <p className="team__second-section-text">
            Our executive team draws on decades of experience across multiple
            successful technology startups and helps guide the company towards
            its strategic goals.
          </p>
        </div>
      </div>
      {/* *************** FOUNDER CARDS ********************* */}
      <div className="team__third-section container-fluid">
        <div className="row justify-content-center founders">
          <div className="col-sm founder-card">
            <img className="founder-image" src={srinath} />
            <p className="founder-name">Srinath Ravichandran</p>
            <p className="founder-desi">CO-FOUNDER</p>
            <p className="founder-text">
              Srinath is a Wall Street trader turned Aerospace Engineer with
              over 10 years of experience in Engineering, Finance, and Project
              Management. He has a Bachelor's degree in Electrical Engineering
              from College of Engineering, Guindy, and Masters degrees in
              Financial Engineering from Columbia University and Aerospace
              Engineering from the University of Illinois at Urbana Champaign.
              Srinath believes in using his multi disciplinary experience to
              solve large scale problems that humanity faces today. He started
              Agnikul with the simple idea that going to space shouldn't be the
              hardest part of living in and working from space. In his leisure
              time, he follows the film industry and tries to write screenplays.
            </p>
            <div className="founder-logos">
              <a href="https://twitter.com/srinathr155" target="_blank">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/srinath-ravichandran-09679a7/"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              {/* <a><i className="fa fa-lg fa-instagram fa-lg"></i></a>
                            <a><i className="fa fa-facebook fa-lg"></i></a> */}
            </div>
          </div>
          <div className="col-sm founder-card">
            <img className="founder-image" src={moinn} />
            <p className="founder-name">Moin SPM</p>
            <p className="founder-desi">CO-FOUNDER</p>
            <p className="founder-text">
              Moin is an Operations Specialist with over 7 years of experience
              in Engineering Management, Manufacturing, and Supply Chain
              operations. He has a Bachelor’s degree in Aeronautics from Anna
              University, Chennai, and a Master’s Degree in Business
              Administration from the University of Newcastle, Australia. He
              also has a keen interest in Space Law. Prior to Agnikul, he led a
              contract manufacturing company in the CPG sector. He is truly
              fascinated by space and how its frameworks combine physics,
              engineering, and safety. He believes in making space accessible
              for everyone & that allowed him to start Agnikul with Srinath. In
              his spare time, he tries to spend time playing guitar.
            </p>
            <div className="founder-logos">
              <a href="https://twitter.com/moin_spm" target="_blank">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/moin-spm-53a80342/"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              {/* <a><i className="fa fa-lg fa-instagram fa-lg"></i></a>
                            <a><i className="fa fa-facebook fa-lg"></i></a> */}
            </div>
          </div>
        </div>
      </div>
      {/* *************** ADVISORS ********************* */}
      <div className="team__fourth-section">
        <p className="team__section-head">Advisors</p>

        <div className="advisors">
          <div className="advisor-swiper swiper-container">
            <div className="swiper-wrapper">
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={satya} />
                  <p className="advisor-name">SR Chakravarthy</p>
                  <p className="advisor-award">
                    Professor & Head - Combustion R&D Center(NCCRD), IIT Madras
                  </p>
                  <p className="advisor-desi">
                    An accomplished rocket scientist, combustion expert with
                    over 25 years of experience, cofounder of 3 IIT Madras
                    startups.
                  </p>
                </div>
              </div>
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={perumal} />
                  <p className="advisor-name">RV Perumal, Padma Bhushan</p>
                  <p className="advisor-award">
                    (Retd.) GSLV Project Director & ISRO Veteran
                  </p>
                  <p className="advisor-desi">
                    An accomplished rocket scientist and the Project Director of
                    India’s first GSLV rocket. Over 40 years of experience in
                    rocket building.
                  </p>
                </div>
              </div>
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={pvr} />
                  <p className="advisor-name">PV Ramakrishnan</p>
                  <p className="advisor-award">
                    Prof. (Emeritus) - Electronics and Communication
                    Engineering.
                  </p>
                  <p className="advisor-desi">
                    Project Director of Anna University Satellite(ANUSAT)-1.
                    Over 35 years of experience in electronics and avionics
                    design.
                  </p>
                </div>
              </div>
              <div className="advisor-swiper-slide swiper-slide">
                <div className="advisor-slide-content">
                  <img className="advisor-slide-img" src={sekar} />
                  <p className="advisor-name">N Shekar</p>
                  <p className="advisor-award">
                    (Retd.) Head of AIDAT,<br></br>MD CDG - Boeing, India
                  </p>
                  <p className="advisor-desi">
                    Accomplished aerospace industry veteran with over 40 years
                    of experience in building and scaling industry products.
                  </p>
                </div>
              </div>
            </div>
            <div className="advisor-swiper-pagination swiper-pagination"></div>
            <div className="advisor-swiper-button-prev swiper-button-prev"></div>
            <div className="advisor-swiper-button-next swiper-button-next"></div>
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
              These terms of use are an agreement between Agnikul Cosmos Private
              Limited (“Agnikul”, “we”, “us” or “our”) and users of its website
              (“you”, “your” or “user”). This agreement (the “Agreement”) also
              governs your use of this website{" "}
              <a href="https://nikul.in">(https://www.agnikul.in/)</a> (the
              “Site”). By using the Site, you acknowledge that you have reviewed
              and agree to all of the terms of this Agreement and agree to be
              bound by them in connection with your use of the Site. By
              entering, accessing, browsing, submitting information to, or
              otherwise using this site, you acknowledge and agree to the
              following terms and conditions.
            </p>
            <div className="custom-modal-section">
              <p className="custom-modal-head">Intellectual Property</p>
              <p className="custom-modal-text">
                All intellectual property rights in the Site including content,
                graphics and copyright works are owned by us. We exclusively own
                all rights in the compilation, design and layout of the Site.
                <br></br>
                You may access, view and print the content on the Site provided
                that you only use that content for your personal use or
                otherwise in relation to using or considering our services.
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
                provide these features, functionality, and links to you only as
                a convenience and do not endorse any linked websites or social
                media sites and are not responsible for the contents or
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
                may do so, including to our affiliates or providers who complete
                transactions or perform services on our behalf, or if we are
                required to by law.<br></br>
                Any personal information you provide to us may be stored on our
                providers’ secure servers. This may involve transferring your
                information to countries which have less legal protection for
                personal information than the countries in which you or we are
                based.<br></br>
                We may also collect technical data and related information when
                you access or log on to the Site. This may include information
                about your computer/tablet/mobile phone and the way users arrive
                at, browse or interact with the Site. We may collect this
                information through the use of cookies or other means. If you
                want to disable cookies, you can do so by changing your browser
                settings, although this may alter the functionality of the Site.
                We use the technical information collected to have a better
                understanding of how people use the Site and how we might
                improve it
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">All Liabilities Excluded</p>
              <p className="custom-modal-text">
                You agree that your use of this Site is at your sole risk.
                Because of the number of possible sources of information
                available through the Site, and the inherent hazards and
                uncertainties of electronic distribution, there may be delays,
                omissions, inaccuracies or other problems with such information.
                <br></br>
                To the extent permitted by law:
              </p>
              <ol>
                <li className="custom-modal-text">
                  all warranties, representations and guarantees are excluded,
                  including suitability, fitness for purpose, appropriateness,
                  availability for use, accuracy or completeness of the Site or
                  the content on or accessed through it;
                </li>
                <li className="custom-modal-text">
                  under no circumstances shall Agnikul or its affiliates, agents
                  or licensors be liable to you or anyone else for any damages
                  (whether direct, indirect, punitive, incidental, special,
                  consequential or otherwise, or whether resulting from tort,
                  contract or other theories of law) including but not limited
                  to attorneys’ fees and lost profits, in connection with, or in
                  any manner arising out of: (1) the use or inability to use
                  this Site and its content; (2) any goods or services obtained
                  through third parties referenced or made available on or
                  through this Site; (3) any errors or omissions in the content
                  or information on the Site; or (4) any computer virus or other
                  programming device, even if Agnikul is advised of the
                  possibility thereof; and
                </li>
                <li className="custom-modal-text">
                  you indemnify us against all loss we suffer or incur as a
                  direct or indirect result of your failure to comply with this
                  Agreement.
                </li>
              </ol>
              <p className="custom-modal-text">
                If you become dissatisfied with this Site, or the terms,
                conditions or policies governing this Site, your sole and
                exclusive remedy is to discontinue using this Site. This
                limitation on damages is essential to the agreement between you
                and us and the Site would not be provided free of charge without
                such limitation.
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">
                Governing Law and Jurisdiction
              </p>
              <p className="custom-modal-text">
                The Site, all related content, and this Agreement shall be
                governed by and construed in accordance with the laws of India,
                without regard to the principles of conflicts of laws. The
                courts of Chennai, India shall have exclusive jurisdiction on
                any dispute that arises in relation to this Agreement or your
                use of the Site.
              </p>
            </div>
            <div className="custom-modal-section">
              <p className="custom-modal-head">Amendments</p>
              <p className="custom-modal-text">
                We may amend this Agreement from time to time, and you should
                ensure that you check and read the same regularly. If you
                continue to use the Site after this Agreement is amended, you
                are deemed to have agreed with the new terms of this Agreement.
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
                <p className="footer-bolder">Agnikul Cosmos Private Limited.</p>
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
                  Technopark Rd, Karyavattom, Thiruvananthapuram, Kerala 695581
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="footer-section">
                <div className="row">
                  <div className="col-xs">
                    <a href="https://medium.com/agnikuls-blog" target="_blank">
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
                  <a href="https://twitter.com/@agnikulcosmos" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://instagram.com/agnikul/" target="_blank">
                    <i className="fa fa-lg fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agnikul-cosmos/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured"
                    target="_blank"
                  >
                    <img src={youtube} alt="" style={{marginRight: "10px",width:"34px"}}/>
                  </a>
                  <a
                    href="https://shop.agnikul.in/"
                    target="_blank"
                    style={{
                      borderRadius: "25px",
                      backgroundColor: "#2a572e",
                      padding:"7px 7px 10px 7px",
                    }}
                  >
                    <img src={shop} alt="" style={{width:"20px"}}/>
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

export default Team;
