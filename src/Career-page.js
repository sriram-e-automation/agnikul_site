import React from "react";
import "./css/career.css";
import navBar from "./js/common";
import Init from "./js/career";
import log from "./images/logo.png";
import orbit from "./images/form-icons/orbital-inclination.png";
import payload from "./images/form-icons/payload-mass.png";
import { Link } from "react-router-dom";
import down from "./images/form-icons/down-arrow.png";
import office from "./images/form-icons/office.png";
import job from "./images/form-icons/job.png";
import NavBarComponent from "./navbar";
import shop from './images/products/shopWhite.svg'

function Career() {
  Init(); // function to initialize animations and swipers

  return (
    <div className="body">
      {/* ***************NAVBAR******************* */}
      <NavBarComponent></NavBarComponent>{" "}
      {/*********************************CAREER HEADING***********************************************************************/}
      <div className="container-fluid custom-form career__form">
        <p className="career__section-head">Careers</p>
        <p className="career__section-text">
          Anyone who is really, really good at anything has a place at Agnikul.
        </p>
        {/*********************************CAREER FORM***********************************************************************/}

        <form>
          <div className="row">
            <div className="col-sm">
              <div className="dropdown" id="form-crew">
                <button
                  className="custom-form-control dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-boundary="#form-crew"
                >
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xs">
                      <img src={office} className="custom"></img>
                    </div>
                    <div className="col">
                      <p className="form-control-name" id="crew-field">
                        CREW
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
                >
                  <div className="custom-form-options-inner" id="crew">
                    <p className="dropdown-item" id="elec">
                      Electrical & Electronics Crew
                    </p>
                    <p className="dropdown-item" id="sw">
                      Software Crew
                    </p>
                    <p className="dropdown-item" id="sws">
                      Structural Systems Crew
                    </p>
                    <p className="dropdown-item" id="fls">
                      Fluid Systems Crew
                    </p>
                    <p className="dropdown-item" id="op">
                      Operations Crew
                    </p>
                    <p className="dropdown-item" id="lase">
                      Launch Services Crew
                    </p>
                    <p className="dropdown-item" id="fiac">
                      Finance and Accounting Crew
                    </p>
                    <p className="dropdown-item" id="hr">
                      Human Resources Crew
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="dropdown" id="form-job">
                <button
                  className="custom-form-control dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-boundary="#form-job"
                >
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xs">
                      <img src={job} className="custom"></img>
                    </div>
                    <div className="col">
                      <p className="form-control-name" id="job-field">
                        JOB
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
                >
                  <div className="custom-form-options-inner" id="job">
                    <p className="dropdown-item" href="#">
                      Select a Crew
                      {/*
                        A json is present in the career.js file. For altering and adding career options, change the json
                      */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* *********** CAREER DESCRIPTIONS ***************************************/}
        {/*
            Make sure we give the id attribute of job option in the dropdown and that of description properly.
            If the dropdown has the id other-profiles, then the description must have other-profiles-desc
        */}
        <div className="career__description visible" id="blank">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="career__description" id="other-profiles-desc">
          <br></br>
          <br></br>
          <p className="career__text">
            We have a few more exciting profiles. If you are curious, please
            send your resume in PDF format and a 3 line email describing - who
            you are, why you want to apply to Agnikul and something interesting
            about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div className="career__description" id="backup-profiles-desc">
          <br></br>
          <br></br>
          <p className="career__text">
            For a detailed job description, please send your resume in PDF
            format and a 3 line email describing - who you are, why you want to
            apply to Agnikul and something interesting about yourself. Send
            resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="maker-or-fabricator-mechanical-desc"
        >
          <p className="career__job">Associate Fabricator</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Responsible for overseeing the build and inspection process for
                the structural assembly and integration of the Flight systems
              </li>
              <li className="career__text">
                Develop, qualify, and refine manufacturing processes to bring
                vehicle hardware from prototype to flight quality.
              </li>
              <li className="career__text">
                Work with design engineers & Senior Manufacturing Buff to
                evaluate designs for manufacturability and implementation in a
                rapidly-evolving production environment
              </li>
              <li className="career__text">
                Quickly resolve non-conformances and work with the Quality team
                to implement root cause corrective actions.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <p className="career__text">
              Diploma degree in mechanical or aerospace engineering
              <br></br>or<br></br>
              3+ years of experience in a manufacturing environment
              (internship/co-op experience will be considered)
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Bachelor’s degree in mechanical, chemical, or aerospace
                engineering
              </li>
              <li className="career__text">
                Knowledge of metallic manufacturing techniques, processes, and
                equipment related to machining, welding, drilling, and
                automation
              </li>
              <li className="career__text">
                Mechanical component and/or tooling design and analysis (3D
                computer-aided design)
              </li>
              <li className="career__text">
                Ability to write detailed repair reports (advanced MS Office
                skills)
              </li>
              <li className="career__text">
                Experience with process development from R&D to high-volume
                manufacturing
              </li>
              <li className="career__text">
                Experience writing work instructions and procedures for critical
                aerospace parts
              </li>
              <li className="career__text">
                Experience in a production environment within the aerospace
                industry
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Position may require extended work hours
              </li>
              <li className="career__text">
                Position requires working directly with hardware on the floor
                for extended periods of time
              </li>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location:{" "}
            <span className="career__text">IIT Madras, Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="maker-or-fabricator-avionics-desc"
        >
          <p className="career__job">Associate Fabricator</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Responsible for overseeing the build and inspection process for
                the electrical and electronics assembly for the integration of
                flight systems
              </li>
              <li className="career__text">
                Develop, qualify, and refine manufacturing processes to bring
                vehicle computer hardware from prototype to flight quality.
              </li>
              <li className="career__text">
                Responsible for interfacing the data acquisitions systems with
                the flight hardware and control systems.
              </li>
              <li className="career__text">
                Work with design engineers & Senior Manufacturing Buff to
                evaluate designs for manufacturability and implementation in a
                rapidly-evolving production environment
              </li>
              <li className="career__text">
                Quickly resolve non-conformances and work with the Quality team
                to implement root cause corrective actions.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <p className="career__text">
              Diploma degree in Electronics or Mechatronics engineering
              <br></br>or<br></br>A minimum of 2 year of maintenance technician
              experience
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Bachelor’s degree in electronics engineering technology degree
              </li>
              <li className="career__text">
                Experience with thermal vacuum testing
              </li>
              <li className="career__text">
                Experience with vibration and shock testing.
              </li>
              <li className="career__text">
                Ability to write detailed repair reports (advanced MS Office
                skills)
              </li>
              <li className="career__text">
                Some experience in space, aviation, military or other
                high-reliability operating environments is highly desirable.
              </li>
              <li className="career__text">Software skills- Python desired</li>
              <li className="career__text">
                Capable of working with diverse electrical test equipment analog
                and digital and RF.
              </li>
              <li className="career__text">Strong team working skills.</li>
              <li className="career__text">Excellent attention to detail.</li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location:{" "}
            <span className="career__text">IIT Madras, Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div className="career__description" id="electric-motor-designer-desc">
          <p className="career__job">Electric Motor Designer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <p className="career__text">
              If you like to think what goes around, comes around - this is for
              you
            </p>
            <p className="career__text">
              If you have wondered why magnetic poles are never lonely - this is
              for you
            </p>
            <p className="career__text">
              If you have wondered if every motor is a Faraday's cage - this is
              for you
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Leads/owns the electromagnetic development of custom
                high-performance electric motors and actuators across PMDC, AC
                Inductor Motors and/or brushless DC motor.
              </li>
              <li className="career__text">
                Design of all aspects of AC universal motor (magnetic circuit,
                winding, brushes, brush holder, commutator, material selection.)
              </li>
              <li className="career__text">
                Understand the development of alternate motor types such as High
                Voltage PM DC and Brushless DC motors, high frequency induction
                motors etc.
              </li>
              <li className="career__text">
                Support in selection of Brushless DC electric motor and PMDC
                motors.
              </li>
              <li className="career__text">
                Ownership of all aspects of motor design including motor system
                mechanical and electrical components such as armature, output
                shaft, terminals, etc. Aids in the creation of CAD and 2D
                drawings for stators, rotors and assemblies
              </li>
              <li className="career__text">
                Develops the design for winding architecture, magnetic
                architecture, flux carrier stamping and lamination joining.
              </li>
              <li className="career__text">
                Creates framework for insulation systems, interconnections,
                thermal systems, sensing, Identifying and qualifying suppliers
                of raw materials, components, and assemblies.
              </li>
              <li className="career__text">
                Validates performance and derives and delivers a durability
                testing profile.
              </li>
              <li className="career__text">
                Designs keeping in mind - DFM, cost reductions, and second.
              </li>
              <li className="career__text">
                Architects and performs thermal performance analysis for
                magnetic designs.
              </li>
              <li className="career__text">
                Be able to perform : GD&T, 3D & 2D Drawings, DFMEA, PFMEA,
                structural & thermal FEA.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">EXPERIENCE</p>
            <ul>
              <li className="career__text">
                BS or MS in Mechanical or Electrical Engineering or similar
                discipline.
              </li>
              <li className="career__text">
                2+ years’ work experience in motor design or electrical
                machines.
              </li>
              <li className="career__text">
                Experience and familiarity with Finite Element Analysis.
              </li>
              <li className="career__text">
                Experience and familiarity with electro-magnetics, 3 phase power
                systems.
              </li>
              <li className="career__text">
                Experience with building of prototypes.
              </li>
              <li className="career__text">
                Experience with SolidWorks is a plus.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as
                needed..
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most compact electric motors
                in the world!
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="embedded-systems-software-developer-desc"
        >
          <p className="career__job">Embedded Software Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you make typos such as “keil down” instead of “kneel down” -
                this is for you
              </li>
              <li className="career__text">
                If “assembly line” means one line of code - this is for you
              </li>
              <li className="career__text">
                If you think the next cricket match version should be “8080” -
                this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, develop and test (not necessarily space hardened)
                avionics firmware that will support the functions of our launch
                vehicles and test systems.
              </li>
              <li className="career__text">
                Strong firmware debugging capabilities with respect to embedded
                system issues
              </li>
              <li className="career__text">
                Create firmware systems with efficiency, modularity,
                extensibility, and robustness
              </li>
              <li className="career__text">
                Design communication protocols and demonstrate the ability to
                work with I2C, SPI, UART, USB, CAN and Ethernet.
              </li>
              <li className="career__text">
                Support through production and testing phase is expected
              </li>
              <li className="career__text">
                Design and lead boards with different MCUs(Cortex M4, MSP),
                peripherals, features, and development environments.
              </li>
              <li className="career__text">
                Define board schematics and know EE fundamentals
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor of Science Degree in Electrical Engineering, Computer
                Engineering or Physics.
              </li>
              <li className="career__text">
                Proficient in C and C++ embedded firmware development
              </li>
              <li className="career__text">
                Experience with FPGA programming is a plus
              </li>
              <li className="career__text">
                Simple soldering and rework experience is a plus
              </li>
              <li className="career__text">
                Professional experience with experience in fast-paced projects
                (non-aerospace is okay); CPU-based circuit cards, consumer
                electronics, wireless devices, and/or low power platforms.
              </li>
              <li className="career__text">
                Professional experience with analog, digital or mixed-signal
                design principles including designs using operational
                amplifiers, filters, and transistors.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters of Science Degree in Electrical Engineering, Computer
                Engineering or equivalent area of focus.
              </li>
              <li className="career__text">
                2+ years of board level experience designing hardware from
                concept through production; strong emphasis on full lifecycle
                development of new hardware systems -- not small incremental
                updates to legacy hardware
              </li>
              <li className="career__text">
                Strong understanding of computers and programming languages
                (C/C++, Simulation tools, Assembly language).
              </li>
              <li className="career__text">
                Ability to work in a fast paced, autonomously driven, and
                demanding start-up atmosphere
              </li>
              <li className="career__text">
                Excellent communication skills both written and verbal.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most compact electric motors
                in the world!
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="launch-vehicle-structural-engineer-desc"
        >
          <p className="career__job">
            Launch Vehicle Structural Vehicle Engineer
          </p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES ?</p>
            <ul>
              <li className="career__text">
                If you have wondered where the center of gravity of the Penrose
                Stairs lies, this is for you.
              </li>
              <li className="career__text">
                Even better if you have spent more than 100 hours trying to
                figure out the best material for Space Elevator Tethers.
              </li>
              <li className="career__text">
                Preferably, you have also googled: "Inconel vs. carbon
                composites for 3d printing"
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Responsible for build of initial development hardware, ensuring
                efficient manufacturability and modifying design as needed
                (Can’t “stress” this point enough - pun intended)
              </li>
              <li className="career__text">
                Perform, document, and present static, dynamic, custom-modal,
                thermo-mechanical, fatigue and fracture analyses
              </li>
              <li className="career__text">
                Perform initial sizing analyses by hand calculation, detailed
                structural analysis using Finite element analysis tools
              </li>
              <li className="career__text">
                Perform detailed fluid system layout and/or mechanical design
                utilizing CAD and understanding of materials
              </li>
              <li className="career__text">
                Seek out and evaluate state-of-the-art analysis techniques and
                tools
              </li>
              <li className="career__text">
                Identify and procure long lead items such as machining parts,
                seals, forgings, etc.
              </li>
              <li className="career__text">
                Coordinate and perform development and qualification efforts of
                hardware
              </li>
              <li className="career__text">
                Design and build testing equipment or stands
              </li>
              <li className="career__text">
                Manage the transition from development to production for flight
                quality hardware
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor’s degree in an engineering discipline
              </li>
              <li className="career__text">
                Experience with Finite Element Analysis (FEA) and commercial
                tools
              </li>
              <li className="career__text">
                Excellent understanding of fatigue and fracture mechanics
                principles
              </li>
              <li className="career__text">
                Ability to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Master’s degree or PhD in an engineering discipline
              </li>
              <li className="career__text">
                Strong background in solid mechanics and structural dynamics
                (custom-modal, transient, and random vibration analysis)
              </li>
              <li className="career__text">
                Expert on fatigue, crack initiation, propagation mechanisms and
                metallic failure prevention
              </li>
              <li className="career__text">
                Familiar with crack growth analysis codes
              </li>
              <li className="career__text">
                Excellent oral and written communication skills
              </li>
              <li className="career__text">
                Ability to deliver against an aggressive schedule
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>


        
        <div
          className="career__description"
          id="mission-design-software-developer-desc"
        >
          <p className="career__job">Mission Design Software Developer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you belong to the category of typing a semicolon instead of a
                full stop, this is for you; //(We are syntax agnostic in our
                search though (any language experience is okay!);)
              </li>
              <li className="career__text">
                If you see a car's headlights and wonder what happened to your
                ability for abstraction, this is for you.
              </li>
              <li className="career__text">
                If you can see a launch vehicle as a 21st century robot, this is
                for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Optimize trajectories the launch vehicle will have to fly in to
                get to orbit.
              </li>
              <li className="career__text">
                Work with Propulsion and GNC Engineers to code engine
                characterization, carry out simulations, and integrate programs
                into flight control algorithms.
              </li>
              <li className="career__text">
                Work interdisciplinary trades (e.g. with Avionics, GNC, Thermal,
                and Structures) that result in the most optimal vehicle level
                configuration.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor’s degree in computer science, physics, electrical
                engineering, or equivalent engineering discipline.
              </li>
              <li className="career__text">
                Understands the basic physics behind projectile motion.
              </li>
              <li className="career__text">
                Applied experience coding in an object-oriented language.
              </li>
              <li className="career__text">
                Ability to work long hours, weekends etc. if needed (almost
                always!).
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Ability to design and implement robust and scalable systems with
                flexible and scalable UI.
              </li>
              <li className="career__text">
                Professional experience with standard front-end technologies
                like modern HTML, CSS, JavaScript (we use AngularJS, Polymer,
                Backbone.js, React, and more), REST, JSON.
              </li>
              <li className="career__text">
                Deep understanding of object oriented programming.
              </li>
              <li className="career__text">
                Deep understanding of distributed, horizontally scalable
                systems.
              </li>
              <li className="career__text">
                Experiences with cloud technologies such as AWS, Azure or Google
                Cloud Engine.
              </li>
              <li className="career__text">
                Focus on performance bottlenecks and performance improvement
                techniques.
              </li>
              <li className="career__text">
                Familiar with basic principles of compressible and
                incompressible flow, thermodynamics, thermochemistry, mechanics,
                materials, and electrical circuits.
              </li>
              <li className="career__text">
                A background in scientific computing, high-performance
                computing, or mathematics.
              </li>
              <li className="career__text">
                Strong skills with debuggers, profilers, and unit testing.
              </li>
              <li className="career__text">
                Interest in/competence with multiple languages and technologies
                (Python, C++, Simulation tools, SQL).
              </li>
              <li className="career__text">
                Familiar with Agile software development techniques,
                particularly Test-Driven Development, and Continuous
                Integration.
              </li>
              <li className="career__text">
                Experience with database management.
              </li>
              <li className="career__text">
                Able to prioritize and execute tasks in a high-pressure
                environment with ongoing drive for continuous improvement in all
                aspects of work.
              </li>
              <li className="career__text">
                Excellent communication skills and ability to succinctly present
                recommendations to stakeholders, the customer, and management.
              </li>
              <li className="career__text">
                Able to work well in an integrated collaborative team
                environment, including frequent interactions with technicians,
                other engineers, and managers.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>

        {/*Embedded Software Engineer-Linux Start*/}
        <div
          className="career__description"
          id="embedded-software-engineer-linux-desc"
        >
          <p className="career__job">Embedded Software Engineer - Linux</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you are constantly worried about memory overflow, divide by 0 - this is for you.
              </li>
              <li className="career__text">
                If you like recursive acronyms such as GNU - this is for you.
              </li>
              <li className="career__text">
                If you like working on real time systems - this is for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, develop and test (space hardened) avionics firmware that will support the functions of our launch vehicles and test systems.
              </li>
              <li className="career__text">
                Strong firmware debugging capabilities with respect to embedded system issues.
              </li>
              <li className="career__text">
                Create firmware systems with efficiency, modularity, extensibility, and robustness.
              </li>
              <li className="career__text">
                Knowledgeable about serial communication protocols and ability to read bus traces (I2C, SPI, UART, USB, etc.).
              </li>
              <li className="career__text">
                Support through production and testing phase is expected.
              </li>
              <li className="career__text">
                Experience with a different MCUs(Cortex M4, MSP), peripherals, features, and development environments.
              </li>
              <li className="career__text">
                Able to read board schematics and know EE fundamentals.
              </li>
              <li className="career__text">
                Experience with FPGA programming is a plus.
              </li>
              <li className="career__text">
                Simple soldering and rework experience is a plus.
              </li>
              <li className="career__text">
                Proficient in C and C++ embedded firmware development.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor of Science Degree in Electrical Engineering, Computer Engineering or Physics.
              </li>
              <li className="career__text">
                A minimum of 3 years of first-hand experience with Embedded Linux development.
              </li>
              <li className="career__text">
                A good knowledge of porting Linux kernel to various ARM-based SOCs, architecture, and peripherals.
              </li>
              <li className="career__text">
                Experience with Embedded Linux root file systems (Yocto, OpenEmbedded, Buildroot).
              </li>
              <li className="career__text">
                Experience in BSP, Linux Internals, Linux Device Driver Development.
              </li>
              <li className="career__text">
                Working knowledge of Ethernet and TCP/IP networking.
              </li>
              <li className="career__text">
                A firm understanding of Bootloader (U-boot) and porting to different architectures.
              </li>
              <li className="career__text">
                Experience working on RTOS (FreeRTOS, Keil RTX, etc.).  
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters of Science Degree in Electrical Engineering, Computer Engineering or equivalent area of focus.
              </li>
              <li className="career__text">
                2+ years of board level experience designing hardware from concept through production; strong emphasis on full lifecycle development of new hardware systems -- not small incremental updates to legacy hardware.
              </li>
              <li className="career__text">
                Ability to work in a fast paced, autonomously driven, and demanding start-up atmosphere
              </li>
              <li className="career__text">
                Excellent communication skills both written and verbal.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have created a new simple OS for rockets.
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*Embedded Software Engineer-Linux End*/}

        {/*ERPNext Developer Start*/}
        <div
          className="career__description"
          id="erpnext-developer-desc"
        >
          <p className="career__job">ERPNext Developer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you think, Why should people creating purchase orders and maintaining part inventory suffer? - this is for you.
              </li>
              <li className="career__text">
                If you think, why should engineers crafting designs not have the ability to quickly create work orders? - this is for you.
              </li>
              <li className="career__text">
                If you think, why should not every component have a story from sourcing to stores? - this is for you.
              </li>
              <li className="career__text">
                If you think, Why should not work floor crew members not be able to appreciate process flow from design to execution? - this is for you
              </li>
              <li className="career__text">
                With this in mind, we are setting out to build out our own software that will help us be both a research company and a process focussed company.
                If this sounds interesting, you may like to be one of the people writing this code! 
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Create the fundamental software framework that would enable process implementation at Agnikul.
              </li>
              <li className="career__text">
                Detect and troubleshoot software issues.
              </li>
              <li className="career__text">
                Write clear quality code for software and applications and perform test reviews.
              </li>
              <li className="career__text">
                Develop, implement, & test APIs.
              </li>
              <li className="career__text">
                Provide input on software development projects.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Comfort using programming languages and relational databases.
              </li>
              <li className="career__text">
                Understand ERPNext and Frappe framework thoroughly.
              </li>
              <li className="career__text">
                Strong debugging and troubleshooting skills.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                2+ years' of development experience with agile development methodologies.
              </li>
              <li className="career__text">
                Be able to understand software development life cycle, unit and integration system testing.
              </li>
              <li className="career__text">
                Experience with Python, Javascript, MySQL, MariaDB and Jinja templates.
              </li>
              <li className="career__text">
                Appreciation for all aspects of development including the server side, client side and API.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most complex operations strategy in the world.
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*ERPNext Developer End*/}
        
        {/*LabVIEW Developer Start*/}
        <div
          className="career__description"
          id="labview-developer-desc"
        >
          <p className="career__job">LabVIEW Developer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you think instrumentation is more important than a test itself - this is for you.
              </li>
              <li className="career__text">
                If you think a good GUI is one of the best tools to motivate testers - this is for you.
              </li>
              <li className="career__text">
                If you love enabling people control complex systems - this is for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, develop and test (space hardened) avionics hardware that will support the functions of our launch vehicles and spacecraft.
              </li>
              <li className="career__text">
                Will assist with prototyping, schematic capture, debugging, hardware bug tracking, functional verification and signal characterization.
              </li>
              <li className="career__text">
                Efficiently develop complex software in the LabVIEW programming environment.
              </li>
              <li className="career__text">
                Accurately estimate the timelines required to develop LabVIEW programs.
              </li>
              <li className="career__text">
                Practice effective revision control of programs that are developed. 
              </li>
              <li className="career__text">
                Effectively troubleshoot the systems associated with the LabVIEW program, 
                including not only the software but other aspects such as the host PC, sensors, electrical junctions, etc.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor of Science Degree in Electrical Engineering, Computer Engineering or Physics.
              </li>
              <li className="career__text">
                Professional experience with experience in fast-paced projects (non-aerospace is okay); CPU-based circuit cards, consumer electronics, wireless devices, and/or low power platforms.
              </li>
              <li className="career__text">
                Professional experience with analog, digital or mixed-signal design principles including designs using operational amplifiers, filters, and transistors.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters of Science Degree in Electrical Engineering, Computer Engineering or equivalent area of focus.
              </li>
              <li className="career__text">
                At least 1000 hours of experience programming in LabVIEW. 
              </li>
              <li className="career__text">
                Minimum certification of National Instruments CLAD, Certified LabVIEW Developer.
              </li>
              <li className="career__text">
                Experience with laboratory instrumentation such as encoders, LVDTs, oscilloscopes, micrometers, and capacitive probes.
              </li>
              <li className="career__text">
                Experience with solid modeling or electrical CAD is desirable but not required.
              </li>
              <li className="career__text">
                2+ years of board level experience designing hardware from concept through production; strong emphasis on full lifecycle development of new hardware systems -- not small incremental updates to legacy hardware.
              </li>
              <li className="career__text">
                Strong understanding of computers and programming languages (C/C++, Assembly language).
              </li>
              <li className="career__text">
                Ability to work in a fast paced, autonomously driven, and demanding start-up atmosphere
              </li>
              <li className="career__text">
                Excellent communication skills both written and verbal.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have created one of the most complex ground test system architecture in the world.
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*LabVIEW Developer End*/}

        <div
          className="career__description"
          id="power-electronics-engineer-desc"
        >
          <p className="career__job">Power Electronics Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you end up saying "SMPS me" instead of "SMS me" when you want
                someone to message you - this is for you.
              </li>
              <li className="career__text">
                If you understand jokes like "Life is a bunch of bucks and
                boosts" - this is for you.
              </li>
              <li className="career__text">
                If you wished MOSFET's were current controlled devices or BJTs
                are voltage controlled devices - this is definitely for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Create the fundamental power electronics architecture and
                associated software and hardware systems for Agnikul's vehicle.
              </li>
              <li className="career__text">
                Contribute engineering expertise in design, study, and testing
                of DC-DC power converters for harsh environments.
              </li>
              <li className="career__text">
                Deliver on power system and sub-system level design trades and
                develop requirements at a system level and a component level.
              </li>
              <li className="career__text">
                Design DC-DC topologies and select optimal architectures and
                components for board level power.
              </li>
              <li className="career__text">
                Design, handle and test systems with lithium-ion battery with
                due respect for their safety, and usage.
              </li>
              <li className="career__text">
                Design AC-DC converters for both flight and ground systems.
              </li>
              <li className="career__text">
                Design extremely compact AC-DC converters with a special focus
                on mechanical design.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master's degree in electrical engineering, power
                systems or electronics engineering or any degree that enhanced
                your ability to model and deal with power electronics.
              </li>
              <li className="career__text">
                Ability to work long hours and weekends as needed..
              </li>
              <li className="career__text">
                Experience in modeling, simulation, and testing of power
                electronics.
              </li>
              <li className="career__text">
                Working experience in voltage and current mode control and
                compensator.
              </li>
              <li className="career__text">
                Familiarity with power supply testing and packaging for harsh
                environments.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as
                needed..
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most compact electric drives
                in the world!
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="space-robotics-and-control-engineer-desc"
        >
          <p className="career__job">Space Robotics and Controls Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you like to think the other extreme of the north pole is
                north “zero” - this is for you.
              </li>
              <li className="career__text">
                If you don’t need someone to tell you LQR is good enough - this
                is for you.
              </li>
              <li className="career__text">
                If you believe lead-lag compensation is the essence of all human
                interactions - this is for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Works on independent sections of controller design and
                integration process for launch vehicle control systems and
                related components in the vehicle’s guidance systems.
              </li>
              <li className="career__text">
                Specifically,
                <ul>
                  <li className="career__text">
                    Aid in the development of Autopilot linear stability testing
                    and analysis.
                  </li>
                  <li className="career__text">
                    Design Non-linear 6DOF simulation analysis and scenario
                    analysis.
                  </li>
                  <li className="career__text">
                    Review system level and launch vehicle requirements.
                  </li>
                  <li className="career__text">
                    Lead development and maintenance of software tools that
                    predict pre-flight performance under nominal, off-nominal
                    conditions.
                  </li>
                  <li className="career__text">
                    Perform post flight verification of simulation predictions
                    and Monte Carlo through multiple flight conditions.
                  </li>
                  <li className="career__text">
                    Create hazards assessment programs and tools to understand
                    probability of impact and expected damage from off-nominal
                    and failure modes.
                  </li>
                  <li className="career__text">
                    Support design reviews and milestones as necessary.
                  </li>
                </ul>
              </li>
              <li className="career__text">
                Assists independent sections of propulsion control systems.
              </li>
              <li className="career__text">
                Aid specifically, the development of some or all of the
                following.
                <ul>
                  <li className="career__text">
                    Design of Mixture ratio control & stability analysis.
                  </li>
                  <li className="career__text">
                    Integration of mixture ratio control, electric motor speed
                    control and propellant utilization loops.
                  </li>
                  <li className="career__text">
                    Development of system level requirements for cross coupled
                    dynamics between propellant utilization algorithms and
                    vehicle guidance / autopilot algorithms.
                  </li>
                  <li className="career__text">
                    Support design reviews and milestones as necessary.
                  </li>
                </ul>
              </li>
              <li className="career__text">
                Supports hardware design & implementation of the vehicle across
                multiple control systems.
                <ul>
                  <li className="career__text">
                    Analog and mixed signal design with focus on launch vehicle
                    hardware.
                  </li>
                  <li className="career__text">
                    Board level design for both ground checkout systems and
                    flight hardware.
                  </li>
                  <li className="career__text">
                    Support design reviews and milestones as necessary.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master’s Degree in Controls Engineering, Electrical
                engineering, Electronics & Communications engineering.
              </li>
              <li className="career__text">
                Highly developed computer skills using EE design/analysis
                software.
              </li>
              <li className="career__text">
                Decent software programming skills.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Ph.D. in Electrical engineering, Electronics & Communications
                engineering.
              </li>
              <li className="career__text">
                Good understanding of product development and Control network
                (CAN).
              </li>
              <li className="career__text">
                1+ experience with mechanical systems and engines.
              </li>
              <li className="career__text">
                Good understanding of engine controller design and
                implementation.
              </li>
              <li className="career__text">
                Good understanding of orbital mechanics, multi-body dynamics,
                and controls-structures interaction.
              </li>
              <li className="career__text">
                Experience with static constrained optimization, calculus of
                variations, dynamic optimization, maximum principle.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>

        {/*Navigation Guidance and Control Systems Engineer Start*/}
        <div
          className="career__description"
          id="navigation-guidance-and-control-systems-engineer-desc"
        >
          <p className="career__job">Navigation Guidance and Control Systems Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you like to think the other extreme of the north pole is north zero - this is for you.
              </li>
              <li className="career__text">
                If you don’t need someone to tell you LQR is good enough - this is for you.
              </li>
              <li className="career__text">
                If you believe lead-lag compensation is the essence of all human interactions - this is for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Leads the controller design and integration process for launch vehicle control systems and related components.
              </li>
              <li className="career__text">
                Specifically, Aid in the development of Autopilot linear stability testing and analysis.
              </li>
              <li className="career__text">
                Design Non-linear 6DOF simulation analysis and scenario analysis.
              </li>
              <li className="career__text">
                Review system level and launch vehicle requirements.
              </li>
              <li className="career__text">
                Lead development and maintenance of software tools that predict pre-flight performance under nominal, off-nominal conditions.
              </li>
              <li className="career__text">
                Perform post flight verification of simulation predictions and Monte Carlo through multiple flight conditions.
              </li>
              <li className="career__text">
                Create hazards assessment programs and tools to understand probability of impact and 
                expected damage from off-nominal and failure modes.
              </li>
              <li className="career__text">
                Support design reviews and milestones as necessary.
              </li>
              <li className="career__text">
                Assists independent sections of propulsion control systems.
              </li>
              <li className="career__text">
                Aid specifically, the development of some or all of the following.
              </li>
              <li className="career__text">
                Design of Mixture ratio control & stability analysis.
              </li>
              <li className="career__text">
                Integration of mixture ratio control, electric motor speed control and propellant utilization loops.
              </li>
              <li className="career__text">
                Development of system level requirements for cross coupled dynamics between propellant utilization algorithms and vehicle guidance / autopilot algorithms.
              </li>
              <li className="career__text">
                Support design reviews and milestones as necessary.
              </li>
              <li className="career__text">
                Supports hardware design & implementation of the vehicle across multiple control systems.
              </li>
              <li className="career__text">
                Analog and mixed signal design with focus on launch vehicle hardware.
              </li>
              <li className="career__text">
                Board level design for both ground checkout systems and flight hardware.
              </li>
              <li className="career__text">
                Support design reviews and milestones as necessary
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors in Electrical engineering, Electronics & Communications or Mechanical engineering.
              </li>
              <li className="career__text">
                Highly developed computer skills using EE design/analysis software.
              </li>
              <li className="career__text">
                Good understanding of product development and Control network. 
              </li>
              <li className="career__text">
                Decent software programming skills.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters degree in Electrical engineering, Electronics & Communications engineering.
              </li>
              <li className="career__text">
                2+ years experience with spacecraft ACS hardware and software development - ACS design, manufacture, simulation, and test.
              </li>
              <li className="career__text">
                2+ years experience with mechanical systems and engines.
              </li>
              <li className="career__text">
                Hands on experience using electrical/software test and analysis equipment.
              </li>
              <li className="career__text">
                Good understanding of orbital mechanics, multi-body dynamics, and controls-structures interaction.
              </li>
              <li className="career__text">
                Experience with static constrained optimization, calculus of variations, dynamic optimization, maximum principle, Riccati equations, learning and adaptation in controllers. 
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most challenging autopilot algorithms in the world.
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*Navigation Guidance and Control Systems Engineer End*/}

        {/*RF Designer Start */}
        <div
          className="career__description"
          id="rf-systems-design-engineer-desc"
        >
          <p className="career__job">RF Systems Design Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you like keeping things wireless - this is for you
              </li>
              <li className="career__text">
                If you are appreciative of how our brains demodulate 
                signals from the high frequency noise around us - this is for you
              </li>
              <li className="career__text">
                If you have wondered why humans don't have antennae to communicate 
                - this is definitely for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Create RF hardware specifications for the RF system and RF blocks
              </li>
              <li className="career__text">
                Design, debug, resolve analog/RF/mixed signal noise issues and RF coupling, shielding and grounding.
              </li>
              <li className="career__text">
                Simulate and model RF front-end &#38; back-end architecture and 
                related systems, working with designers, Modem/DSP and ASIC engineers to divide functions between hardware &#38; software.
              </li>
              <li className="career__text">
                Develop RF circuits, components, board and space qualified packages.
              </li>
              <li className="career__text">
                Characterize prototypes for certain RF components
              </li>
              <li className="career__text">
                Characterize and analyze complete radio system performance
              </li>
              <li className="career__text">
                Assist in the development of automated test equipment for lab measurements
              </li>
              <li className="career__text">
                Module level design, testing and integration of RF modules.
              </li>
              <li className="career__text">
                Interaction with vendors for component sourcing, selection and procurement.
              </li>
              <li className="career__text">
                Defining testing, EMI/EMC, environmental qualification process for the RF modules based on standards.
              </li>
              <li className="career__text">
                Developing Ground based testing schemes and software for testing and validating the developed onboard systems.
              </li>
              <li className="career__text">
                Proper documentation of the work done for internal/external reviews.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master’s Degree in Electrical Engineering or similar discipline with focus on RF design
              </li>
              <li className="career__text">
                Strong hands on experience using RF test equipment including spectrum analyzer, vector network analyzer, noise figure meter, and impedance tuner.
              </li>
              <li className="career__text">
                Experience with EM simulation tools.
              </li>
              <li className="career__text">
                Strong knowledge of semiconductors, analog circuits, RF design fundamentals, wireless systems and electromagnetics.
              </li>
              <li className="career__text">
                Understanding of RF design parameters and concepts including gain, noise figure, S parameters, impedance matching, harmonics, stability.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                5+ years of experience in Design, Test and integration of RF communications system.
              </li>
              <li className="career__text">
                Strong understanding and experience in RADAR algorithm development, Network theory, I-Q signal processing, link budget estimation.
              </li>
              <li className="career__text">
                Experience in principles, Figures of merit and selection of RF components like Antenna, filters, RF IC, Attenuators, Mixers, Baluns, Duplexers, RF couplers etc.
              </li>
              <li className="career__text">
                Experience in Software defined Radios and FPGA
              </li>
              <li className="career__text">
                4+ years of experience in RF electronics debugging and testing with testing tools like Spectrum analyzer, Network analyzer, Signal generators etc.
              </li>
              <li className="career__text">
                Experience in RF PCB design, power and grounding schemes.
              </li>
              <li className="career__text">
                Ability work in fast paced, agile environment with minimal supervision
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have designed one of the most power efficient data transmitters that is possible in the world today
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*RF Designer End */}

        {/*Printed Circuit Board Design Engineer */}
        <div
          className="career__description"
          id="printed-circuit-board-design-engineer-desc"
        >
          <p className="career__job">Printed Circuit Board Design Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you like designing PCBs - this is for you.
              </li>
              <li className="career__text">
                If you can't tolerate loosely hanging wires even in prototypes - this is for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, develop and test (space hardened) avionics firmware that will support 
                the functions of our launch vehicles and test systems.
              </li>
              <li className="career__text">
                Schematic design, generate Bill Of Materials (BOM). Be able to debug the PCB after fabrication.
              </li>
              <li className="career__text">
                Support through the production and testing phase is expected.
              </li>
              <li className="career__text">
                Review design guidelines to create PCB layouts including PCB footprints.
              </li>
              <li className="career__text">
                Support firmware engineers with optimal hardware designs.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Diploma in Electrical Engineering.
              </li>
              <li className="career__text">
                2 years experience in 4-6 layer PCB design, worked with BGAs.
              </li>
              <li className="career__text">
                Professional experience with experience in fast-paced projects (non-aerospace is okay); CPU-based circuit cards, consumer electronics, wireless devices, and/or low power platforms.
              </li>
              <li className="career__text">
                Professional experience with analog, digital or mixed-signal design principles including designs using operational amplifiers, filters, and transistors.
              </li>
              <li className="career__text">
                Experience with PCB design software.
              </li>
              <li className="career__text">
                Knowledge in High-Speed Digital interfaces such as memory buses( eMMC, LPDDR, NAND, etc.)  
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Bachelors/Masters of Science Degree in Electrical Engineering, Computer Engineering or equivalent area of focus.
              </li>
              <li className="career__text">
                2+ years of board level experience designing hardware from concept through production; strong emphasis on full lifecycle development of new hardware systems -- not small incremental updates to legacy hardware.
              </li>
              <li className="career__text">
                Ability to work in a fast paced, autonomously driven, and demanding start-up atmosphere
              </li>
              <li className="career__text">
                Excellent communication skills both written and verbal.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                You might have created one of the densest PCBs in the world.
              </li>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*Printer Circuit Board Design Engineer End */}

        <div
          className="career__description"
          id="vehicle-dynamics-engineer-desc"
        >
          <p className="career__job">Vehicle Dynamics Engineer</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you know why water tanker lorries in India have their tops
                open - this is for you. (Even better if you have tried to model
                slosh dynamics of a water tanker lorry).
              </li>
              <li className="career__text">
                If you can mathematically predict the instantaneous position and
                velocity of how your life will evolve - this is for you.
              </li>
              <li className="career__text">
                If you like designing autopilots - this is definitely for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Design, analyze and build flight dynamics models for launch
                vehicles.
              </li>
              <li className="career__text">
                Design high fidelity simulations of hypersonic flight systems,
                deriving from experience in flight dynamics, navigation,
                guidance, and control.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelors / Master's degree in controls engineering, aerospace
                or mechanical engineering or any degree that enhanced your
                ability to model systems mathematically.
              </li>
              <li className="career__text">
                2-3 years of experience in mathematically modeling system
                dynamics.
              </li>
              <li className="career__text">
                A fascination to bring space closer to everyone on earth.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Master's degree in aeronautical/astronautical, aerospace or
                mechanical engineering.
              </li>
              <li className="career__text">
                Understanding of software-in-the-loop and hardware-in-the-loop
                development.
              </li>
              <li className="career__text">
                Design and analyze control approaches for complex vehicle
                systems, leveraging modern synthesis and analysis methods.
              </li>
              <li className="career__text">
                Be able to understand vehicle plant dynamics and select
                appropriate control methods.
              </li>
              <li className="career__text">
                Research and create launch vehicle guidance algorithm.
              </li>
              <li className="career__text">
                Understanding of system dynamics, trajectory optimization to
                develop algorithms suitable for simulation and onboard use.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/* Launch services crew */}
        <div
          className="career__description"
          id="payload-acquisition-strategist-desc"
        >
          <p className="career__job">Payload Acquisition Strategist</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you worry what goes inside of the payload fairing of a rocket and who makes it - this is for you
              </li>
              <li className="career__text">
                If you have wondered how to start a postcard service to space - this is for you
              </li>
              <li className="career__text">
                If you understand the real meaning of PAYload  - this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Devise customer acquisition and retention strategy for a mini launch vehicle.
              </li>
              <li className="career__text">
                Identify need for and develop a variety of promotional and marketing strategy to attract new and existing payload customers
              </li>
              <li className="career__text">
                Develop resources to support, implement, and 
                monitor effective marketing strategies for a company where the product can extend beyond just a launch vehicle and can extend into insurance pricing etc.
              </li>
              <li className="career__text">
                Devise plans to solve customers needs and create a feedback loop to the engineering and product development team
              </li>
              <li className="career__text">
                Negotiate contracts with clients including MoUs, Letter of Intent and launch contracts
              </li>
              <li className="career__text">
                Lead marketing campaigns and promotional events
              </li>
              <li className="career__text">
                Compile customer research and market analysis and devise customized competitive deals based on both quantitative models and market intuition
              </li>
              <li className="career__text">
                Responsible for maintaining and re-inventing customer relationship management (CRM) system in a mini launch vehicle company
              </li>
              <li className="career__text">
                Responsible for spearheading complex deals that involves government, regulatory bodies and space agencies 
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor's Degree 
              </li>
              <li className="career__text">
                Presentation, marketing and negotiation skills
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters degree in Business or Economics is required
              </li>
              <li className="career__text">
                Prior experience in project management and business development
              </li>
              <li className="career__text">
                2+ years of Experience in marketing for a technology company.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's as well as the ecosystem for launch vehicles
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/* Operations jobs */}
        <div
          className="career__description"
          id="launch-vehicle-operations-strategist-desc"
        >
          <p className="career__job">Launch Vehicle Operations Strategist</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you worry about line or batch  - this is for you
              </li>
              <li className="career__text">
                If you have wondered why Apple outsources its manufacturing outside USA - this is for you
              </li>
              <li className="career__text">
                If you understand Lead and Lean in a same sentence  - this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Identify project requirements by 
                  <ul>
                    <li>Interviewing customers; </li>
                    <li>Analyzing operations;  </li>
                    <li>Determining project scope; </li>
                    <li>Documenting results;  </li>
                    <li>Preparing customer contracts </li>
                  </ul>
                
              </li>
              <li className="career__text">
                Develop launch vehicle optimization problem solutions by describing requirements in a work-flowchart and diagram; 
                studying system capabilities; analyzing alternative solutions; preparing system specifications; writing programs.
              </li>
              <li className="career__text">
                Develop project estimates by identifying phases and elements, personnel requirements, and costs.
              </li>
              <li className="career__text">
                Enhance operations through systems thinking by researching and resolving day-to-day operational demands of the company
              </li>
              <li className="career__text">
                Prepare launch vehicle survey reports by collecting, analyzing, and summarizing information.
              </li>
              <li className="career__text">
                Maintain professional and technical knowledge by attending educational workshops; reviewing professional publications; establishing personal networks; benchmarking state-of-the-art practices; participating in professional societies.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor's Degree 
              </li>
              <li className="career__text">
                Problem Solving 
              </li>
              <li className="career__text">
                Quality Focus
              </li>
              <li className="career__text">
                Cross Cultural Negotiations
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters degree in Business or Economics is required
              </li>
              <li className="career__text">
                Prior experience in project management.
              </li>
              <li className="career__text">
                Knowledge of Quickbooks or SAP (softwares change)
              </li>
              <li className="career__text">
                General Consulting Skills, Project Management, Process Improvement, Client Relationships, Reporting Skills, 
                Networking Knowledge, Networking Standards, Technical Zeal, Job Knowledge
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's as well as the ecosystem for launch vehicles
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        <div
          className="career__description"
          id="launch-vehicle-economist-desc"
        >
          <p className="career__job">Launch Vehicle Economist</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you know how a launch vehicle could affect GDP  - this is for you
              </li>
              <li className="career__text">
                If you have wondered about trade offs in trade  - this is for you
              </li>
              <li className="career__text">
                If you understand money value of time ( &amp; time value of money, of course)  - this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Perform financial analysis of launch vehicle costing and strategize financial planning based on forecasted business needs and targets
              </li>
              <li className="career__text">
                Analyze launch vehicle pricing data using mathematical models and statistical techniques
              </li>
              <li className="career__text">
                Prepare budgets &amp; submit recommendations for the approval or disapproval of funds requests.
              </li>
              <li className="career__text">
                Create and be part of AgniKul’s financial model that creates efficient cash flow and increases profits.
              </li>
              <li className="career__text">
                Examine pricing and supply-demand estimates for completeness, accuracy, and conformance with procedures and regulations.
              </li>
              <li className="career__text">
                Perform cost-benefits analysis to compare operating programs, review financial requests, and explore alternative financing methods.
              </li>
              <li className="career__text">
                Create a supply chain curve and work along side the Operations strategist to map out the economics of rocket making. 
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor's Degree. 
              </li>
              <li className="career__text">
                Cost and budget planning skills.
              </li>
              <li className="career__text">
                Ability to understand financial statements.
              </li>
              <li className="career__text">
                Understanding of e-business / e-procurement systems.
              </li>
              <li className="career__text">
                Understanding of cross-cultural / global issues.
              </li>
              <li className="career__text">
                Business ethics.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters degree in Business or Economics is required
              </li>
              <li className="career__text">
                Prior experience in project management.
              </li>
              <li className="career__text">
                Economic development theories and practices.
              </li>
              <li className="career__text">
                Business planning and business expansion/marketing strategies.
              </li>
              <li className="career__text">
                Financial management and analysis.
              </li>
              <li className="career__text">
                Building strategic partnerships and facilitating the development of collaborative relationships.
              </li>
              <li className="career__text">
                Understanding of principles and trends within the economic development industry.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's as well as the ecosystem for launch vehicles
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>

        {/*Finance and Accounting Specialist Start */}
        <div
          className="career__description"
          id="finance-and-accounting-specialist-desc"
        >
          <p className="career__job">Finance and Accounting Specialist</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you like to understand how to cost a launch vehicle - this is for you
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Prepare asset, liability, and capital account entries by compiling and understanding account information.
              </li>
              <li className="career__text">
                Document financial transactions by documenting account information.
              </li>
              <li className="career__text">
                Recommend financial actions by understanding accounting alternatives.
              </li>
              <li className="career__text">
                Summarize financial status by gathering information; creating balance sheet, profit and loss statement, and other reports.
              </li>
              <li className="career__text">
                Maintain controls by preparing and recommending policies and procedures.
              </li>
              <li className="career__text">
                Reconcile / tally financial discrepancies by gathering and understanding account information.
              </li>
              <li className="career__text">
                Prepare payments by verifying documentation, and requesting disbursements.
              </li>
              <li className="career__text">
                Answer accounting questions by researching and understanding accounting policy and regulations.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor Degree in Finance or Economics or Accounting.
              </li>
              <li className="career__text">
                Some experience in fast-paced projects (non-aerospace is okay);
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Masters Degree in Accounting or equivalent area of focus.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*Finance and Account Specialist End*/}

        {/*Human Capital Resources Partner Start */}
        <div
          className="career__description"
          id="human-capital-resource-parnter-desc"
        >
          <p className="career__job">Human Capital Resources Partner</p>
          <div className="career__section">
            <p className="career__head">Eligibility</p>
            <p className="career__text">
              We strongly prefer working with individuals who are passionate
              about aerospace and are willing to work with us for the long term.
            </p>
          </div>
          <div className="career__section">
            <p className="career__head">WHAT IT TAKES</p>
            <ul>
              <li className="career__text">
                If you love dealing with engineers, programmers, lawyers 
                and finance professionals on the same day at the same time, this is for you.
              </li>
              <li className="career__text">
                If you are believe that good teams build great products, this is for you
              </li>
              <li className="career__text">
                If you believe in shaping the people behind a product, this is for you.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">RESPONSIBILITIES</p>
            <ul>
              <li className="career__text">
                Provide careful direction and guidance on multi-layer employee relations issues, company structure, crew planning, crew engagement, dynamics management, and other human capital initiatives.
              </li>
              <li className="career__text">
                Mentor and coach leadership through delivery and product management issues and help them enhance their leadership skills.
              </li>
              <li className="career__text">
                Use meaningful data to identify patterns and areas of question, to monitor direction of remedial actions.
              </li>
              <li className="career__text">
                Manage and help enforce legal compliance with relevant laws and company guidelines and policies.
              </li>
              <li className="career__text">
                Support dynamics and change management to introduce innovative and impactful HR initiatives and changes, often working in close partnership with co founders.
              </li>
              <li className="career__text">
                Design and rapidly execute solutions, guidelines, or approaches that cut across all crews and stakeholders to achieve company vision without sacrificing compliance or company culture.
              </li>            
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">BASIC QUALIFICATIONS</p>
            <ul>
              <li className="career__text">
                Bachelor Degree. 
              </li>
              <li className="career__text">
                2+ years of experience in Human Resources.
              </li>
              <li className="career__text">
                Experience managing a team of direct reports.
              </li>
              <li className="career__text">
                Excellent verbal and written communication skills.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">PREFERRED SKILLS AND EXPERIENCE</p>
            <ul>
              <li className="career__text">
                Passion for human capital, professional relationship management and understanding natural people behaviour.
              </li>
              <li className="career__text">
                5+ years of experience in Human Resources.
              </li>
              <li className="career__text">
                Prior experience working with executive-level leadership.
              </li>
              <li className="career__text">
                Prior experience working with people from all strata of educational qualifications cutting across educational streams and geographic boundaries.
              </li>
              <li className="career__text">
                Excellent interpersonal skills and the ability to demonstrate empathy.
              </li>
              <li className="career__text">
                Comfortable pushing back on senior leadership and challenging the status quo.
              </li>
              <li className="career__text">
                Strong organizational skills and ability to prioritize work.
              </li>
              <li className="career__text">
                Excellent at managing time and prioritizing work.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">ADDITIONAL REQUIREMENTS</p>
            <ul>
              <li className="career__text">
                Must be available to work extended hours and weekends as needed.
              </li>
            </ul>
          </div>
          <div className="career__section">
            <p className="career__head">What you could take away?</p>
            <ul>
              <li className="career__text">
                Your work will directly impact the company's (and the rocket's)
                trajectory.
              </li>
              <li className="career__text">
                You will learn rocket science from some of the most senior and
                respected minds in ISRO.
              </li>
              <li className="career__text">
                You will work on shaping space policy in India.
              </li>
              <li className="career__text">
                You will dirty your hands in a global supply/chain optimization
                problem.
              </li>
            </ul>
          </div>
          <p className="career__head">
            Location: <span className="career__text">Chennai, India</span>
          </p>

          <p className="career__head">
            Employment Type: <span className="career__text">Full Time</span>
          </p>

          <br></br>
          <p className="career__text">
            If interested, please send your resume in PDF format and a 3 line
            email describing - who you are, why you want to apply to Agnikul and
            something interesting about yourself. Send resumes to{" "}
            <a href="mailto:humancapital@agnikul.in" className="career__mail">
              humancapital@agnikul.in
            </a>
          </p>
        </div>
        {/*Human Capital Resources Partners End*/}

        
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
                    href="https://shop.agnikul.in/"
                    target="_blank"
                  >
                    <img src={shop} alt="" />
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

export default Career;
