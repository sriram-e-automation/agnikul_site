
import React, { Component, isValidElement } from "react";
import "./css/book.css";
import log from "./images/logo.png";
import navBar from "./js/common";
import spaceshipWhite from "./images/form-icons/spaceship-white.png";
import Init from "./js/book";
import youtube from "./images/products/youtube.png";
import shop from "./images/products/shopWhite.svg";
import { Link } from "react-router-dom";
import $ from "jquery";

import NavBarComponent from "./navbar";

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
import PublicIcon from "@mui/icons-material/Public";
import blank from "./images/launch/blank.png";
import AsiaPacific from "./images/launch/Asiapacific.png";
import India from "./images/launch/India.png";
import NorthAmerica from "./images/launch/Northernamerica.png";
import NorthEurope from "./images/launch/Northerneurope.png";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch: "LAUNCH LOCATION",
      orbit: "ORBITAL INCLINATION",
      payload: "PAYLOAD MASS",
      altitude: "",
      preferredSite: "",
      name: "",
      email: "",
      company: "",
      phone: "",
      tac: false,
      currentImage: blank,
      errors: {},
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

  validateForm = () => {
    const errors = {};
    if (this.state.launch === "LAUNCH LOCATION") errors.launch = "Required";
    if (this.state.orbit === "ORBITAL INCLINATION") errors.orbit = "Required";
    if (this.state.payload === "PAYLOAD MASS") errors.payload = "Required";
    if (this.state.altitude === "") errors.altitude = "Required";
    if (this.state.preferredSite === "") errors.preferredSite = "Required";
    if (this.state.name === "") errors.name = "Required";
    if (!this.ValidateEmail(this.state.email)) errors.email = "Invalid email";
    if (!this.state.tac) errors.tac = "You must accept the terms";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  ValidateEmail = (mail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
  };
  // submitForm(e) {
  //   e.preventDefault();
  //   const URL =
  //     "https://script.google.com/macros/s/AKfycbyL2MxkYA_j_Omj0ImUJpU_uHUyv-TgHiIBm9CHiHzuXMjsPcQ/exec";
  //   var location = this.state.launch;
  //   var orbit = this.state.orbit;
  //   var payload = this.state.payload;
  //   var name = $("#name-field").val();
  //   var email = $("#email-field").val();
  //   var company = $("#company-field").val();
  //   var altitude = $("#altitude-field").text();
  //   var phone = $("#phone-field").val();
  //   var preferred = $("#preferred-field").text();
  //   var tac = document.getElementById("tac");
  //   var notProper = false;
  //   $(".form-warning").css("display", "none");
  //   if (!$("#location-field").hasClass("selected"))
  //   {
  //     notProper = true;
  //     $("#launch-warning").css("display", "block");
  //   }
  //   if (!$("#inclination-field").hasClass("selected")) {
  //     notProper = true;
  //     $("#orbit-warning").css("display", "block");
  //   }
  //   if (!$("#payload-field").hasClass("selected")) {
  //     notProper = true;
  //     $("#payload-warning").css("display", "block");
  //   }
  //   if (!$("#altitude-field").hasClass("selected")) {
  //     notProper = true;
  //     $("#altitude-warning").css("display", "block");
  //   }
  //   if (!$("#preferred-field").hasClass("selected")) {
  //     notProper = true;
  //     $("#preferred-warning").css("display", "block");
  //   }
  //   if (name == "") {
  //     notProper = true;
  //     $("#name-warning").css("display", "block");
  //   }
  //   if (email == "") {
  //     notProper = true;
  //     $("#email-warning").html("Required*");
  //     $("#email-warning").css("display", "block");
  //   }
  //   else if (!this.ValidateEmail(email))
  //   {
  //     notProper = true;
  //     $("#email-warning").html("Enter proper email");
  //     $("#email-warning").css("display", "block");
  //   }

  //   if (!tac.checked)
  //   {
  //     notProper = true;
  //     $("#tac-warning").css("display", "block");
  //   }

  //   if (notProper)
  //     return;

  //   $(".custom-button span").html("SUBMITTING..");
  //   $(".form-warning").css("display", "none");
  //   var jqxhr = $.ajax({
  //     url: URL,
  //     method: "GET",
  //     dataType: "json",
  //     data: {
  //       "Launch Location": location,
  //       "Orbital Inclination": orbit,
  //       "Payload Mass": payload,
  //       "Name": name,
  //       "Email Address": email,
  //       "Company": company,
  //       "Orbital Altitude": altitude,
  //       "Preferred Site for Payload Integration" : preferred,
  //       "Phone": phone,
  //       "Timestamp": new Date(),
  //     },
  //   }).done(function (response) {
  //     window.location = process.env.PUBLIC_URL + "#/book-complete";
  //   });
  // }
  submitForm = (e) => {
    e.preventDefault();
    const URL =
        "https://script.google.com/macros/s/AKfycbyL2MxkYA_j_Omj0ImUJpU_uHUyv-TgHiIBm9CHiHzuXMjsPcQ/exec";
    if (!this.validateForm()) return;

    const {
      launch,
      orbit,
      payload,
      altitude,
      preferredSite,
      name,
      email,
      company,
      phone,
    } = this.state;

    const formData = {
      launch,
      orbit,
      payload,
      altitude,
      preferredSite,
      name,
      email,
      company,
      phone,
    };

    $.ajax({
      url: URL,
      method: "POST", 
      dataType: "json",
      data: {
        "Launch Location": launch,
        "Orbital Inclination": orbit,
        "Payload Mass": payload,
        "Name": name,
        "Email Address": email,
        "Company": company,
        "Orbital Altitude": altitude,
        "Preferred Site for Payload Integration": preferredSite,
        "Phone": phone,
        "Timestamp": new Date().toISOString(), // Use ISO format
      },
    })
      .done(function (response) {
        window.location = process.env.PUBLIC_URL + "#/book-complete";
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        window.location = process.env.PUBLIC_URL + "#/book-complete";
        console.error("AJAX call failed: ", textStatus, errorThrown);
      });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
      current: image,
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
  handleDropdownChange = (name, value) => {
    this.setState({ [name]: value });
    if (name === "launch") {
      this.setState({ currentImage: this.getLaunchImage(value) });
    }
  };
  getLaunchImage = (launchName) => {
    switch (launchName) {
      case "Asia Pacific":
        return AsiaPacific;
      case "India":
        return India;
      case "Northern America":
        return NorthAmerica;
      case "Northern Europe":
        return NorthEurope;
      default:
        return blank;
    }
  };
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
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="book__overall-div"
          >
            <form style={{ width: "60%" }} onSubmit={this.submitForm}>
              {/* STEP 1 */}
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: "#4d8c52" }}
              >
                STEP 01
              </Typography>

              <FormControl fullWidth autoComplete="off" margin="normal">
                <InputLabel
                  sx={{
                    color: "#4d8c52",
                    "&.Mui-focused": {
                      color: "#4d8c52",
                    },
                  }}
                >
                  Launch Location
                </InputLabel>
                <Select
                  value={this.state.launch}
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#4d8c52 !important",
                    },
                  }}
                  onChange={(e) =>
                    this.handleDropdownChange("launch", e.target.value)
                  }
                  label="Launch Location"
                  error={!!this.state.errors.launch}
                >
                  <MenuItem value="" disabled>
                    <em>Launch Location</em> {/* Placeholder text */}
                  </MenuItem>
                  <MenuItem value="Asia Pacific">Asia Pacific</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Northern America">Northern America</MenuItem>
                  <MenuItem value="Northern Europe">Northern Europe</MenuItem>
                </Select>
                {this.state.errors.launch && (
                  <Typography color="error">
                    {this.state.errors.launch}
                  </Typography>
                )}
              </FormControl>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={this.state.currentImage}
                  alt="Launch Location"
                  style={{ width: "80%", height: "20%" }}
                />
              </div>

              <FormControl fullWidth autoComplete="off" margin="normal">
                <InputLabel
                  sx={{
                    color: "#4d8c52",
                    "&.Mui-focused": {
                      color: "#4d8c52",
                    },
                  }}
                >
                  Orbital Inclination
                </InputLabel>
                <Select
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#4d8c52 !important",
                    },
                  }}
                  value={this.state.orbit}
                  onChange={(e) =>
                    this.handleDropdownChange("orbit", e.target.value)
                  }
                  label="Orbital Inclination"
                  error={!!this.state.errors.orbit}
                >
                  <MenuItem value="" disabled>
                    <em>Orbital Inclination</em> {/* Placeholder text */}
                  </MenuItem>
                  <MenuItem value="SSO">SSO</MenuItem>
                  <MenuItem value="50 deg to SSO">50 deg to SSO</MenuItem>
                  <MenuItem value="0 - 50 deg">0 - 50 deg</MenuItem>
                </Select>
                {this.state.errors.orbit && (
                  <Typography color="error">
                    {this.state.errors.orbit}
                  </Typography>
                )}
              </FormControl>

              <FormControl fullWidth autoComplete="off" margin="normal">
                <InputLabel
                  sx={{
                    color: "#4d8c52",
                    "&.Mui-focused": {
                      color: "#4d8c52",
                    },
                  }}
                >
                  Payload Mass
                </InputLabel>
                <Select
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#4d8c52 !important",
                    },
                  }}
                  value={this.state.payload}
                  onChange={(e) =>
                    this.handleDropdownChange("payload", e.target.value)
                  }
                  label="Payload Mass"
                  error={!!this.state.errors.payload}
                >
                  <MenuItem value="" disabled>
                    <em>Payload Mass</em> {/* Placeholder text */}
                  </MenuItem>
                  <MenuItem value="< 20 kg">&lt; 20 kg</MenuItem>
                  <MenuItem value="20 - 40 kg">20 - 40 kg</MenuItem>
                  <MenuItem value="40 - 60 kg">40 - 60 kg</MenuItem>
                  <MenuItem value="60 - 80 kg">60 - 80 kg</MenuItem>
                  <MenuItem value="80 - 100 kg">80 - 100 kg</MenuItem>
                  <MenuItem value="> 100 kg">&gt; 100 kg</MenuItem>
                </Select>
                {this.state.errors.payload && (
                  <Typography color="error">
                    {this.state.errors.payload}
                  </Typography>
                )}
              </FormControl>

              {/* STEP 2 */}
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: "#4d8c52" }}
              >
                STEP 02
              </Typography>
              <FormControl fullWidth autoComplete="off" margin="normal">
                <InputLabel
                  sx={{
                    color: "#4d8c52",
                    "&.Mui-focused": {
                      color: "#4d8c52",
                    },
                  }}
                >
                  Orbital Altitude
                </InputLabel>
                <Select
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#4d8c52 !important",
                    },
                  }}
                  name="altitude"
                  label="Orbital Altitude"
                  value={this.state.altitude}
                  error={!!this.state.errors.altitude}
                  helperText={this.state.errors.altitude}
                  onChange={(e) =>
                    this.handleDropdownChange("altitude", e.target.value)
                  }
                >
                  <MenuItem value="" disabled>
                    <em>Orbital Altitude</em> {/* Placeholder text */}
                  </MenuItem>
                  <MenuItem value="< 20 kg">&lt; 400 kg</MenuItem>
                  <MenuItem value="20 - 40 kg">400 - 500 kg</MenuItem>
                  <MenuItem value="40 - 60 kg">500 - 600 kg</MenuItem>
                  <MenuItem value="60 - 80 kg">600 - 700 kg</MenuItem>
                  <MenuItem value="> 100 kg">&gt; 700 kg</MenuItem>
                </Select>
                {this.state.errors.payload && (
                  <Typography color="error">
                    {this.state.errors.payload}
                  </Typography>
                )}
              </FormControl>
              <FormControl fullWidth autoComplete="off" margin="normal">
                <InputLabel
                  sx={{
                    color: "#4d8c52",
                    "&.Mui-focused": {
                      color: "#4d8c52",
                    },
                  }}
                >
                  Preferred Site of Payload Integration
                </InputLabel>
                <Select
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4d8c52 !important",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#4d8c52 !important",
                    },
                  }}
                  onChange={(e) =>
                    this.handleDropdownChange("preferredSite", e.target.value)
                  }
                  name="preferredSite"
                  value={this.state.preferredSite}
                  error={!!this.state.errors.preferredSite}
                  helperText={this.state.errors.preferredSite}
                  label="Preferred Site of Payload Integration"
                >
                  <MenuItem value="" disabled>
                    <em>Preferred Site of Payload Integration</em>{" "}
                    {/* Placeholder text */}
                  </MenuItem>
                  <MenuItem value="Launchpad">Launchpad</MenuItem>
                  <MenuItem value="Leave it to Agnikul">
                    Leave it to Agnikul
                  </MenuItem>
                </Select>
                {this.state.errors.launch && (
                  <Typography color="error">
                    {this.state.errors.launch}
                  </Typography>
                )}
              </FormControl>

              {/* STEP 3 */}
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: "#4d8c52" }}
              >
                STEP 03
              </Typography>

              <TextField
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },

                  // Change the label color
                  "& .MuiInputLabel-root": {
                    color: "#4d8c52", // Set your desired label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4d8c52", // Set focused label color
                  },
                  "& .MuiInputLabel-root.Mui-formControl-filled": {
                    color: "#4d8c52", // Set active (filled) label color
                  },
                  marginY: "20px",
                }}
                fullWidth
                autoComplete="off"
                label="Name"
                variant="outlined"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                error={!!this.state.errors.name}
                helperText={this.state.errors.name}
              />

              <TextField
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },

                  // Change the label color
                  "& .MuiInputLabel-root": {
                    color: "#4d8c52", // Set your desired label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4d8c52", // Set focused label color
                  },
                  "& .MuiInputLabel-root.Mui-formControl-filled": {
                    color: "#4d8c52", // Set active (filled) label color
                  },
                  marginY: "20px",
                }}
                fullWidth
                autoComplete="off"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                error={!!this.state.errors.email}
                helperText={this.state.errors.email}
              />

              <TextField
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },

                  // Change the label color
                  "& .MuiInputLabel-root": {
                    color: "#4d8c52", // Set your desired label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4d8c52", // Set focused label color
                  },
                  "& .MuiInputLabel-root.Mui-formControl-filled": {
                    color: "#4d8c52", // Set active (filled) label color
                  },
                  marginY: "20px",
                }}
                fullWidth
                autoComplete="off"
                label="Company"
                variant="outlined"
                name="company"
                value={this.state.company}
                onChange={this.handleInputChange}
              />

              <TextField
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#4d8c52 !important",
                  },

                  // Change the label color
                  "& .MuiInputLabel-root": {
                    color: "#4d8c52", // Set your desired label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#4d8c52", // Set focused label color
                  },
                  "& .MuiInputLabel-root.Mui-formControl-filled": {
                    color: "#4d8c52", // Set active (filled) label color
                  },
                  marginY: "20px",
                }}
                fullWidth
                autoComplete="off"
                label="Phone Number"
                variant="outlined"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />

              <div className="custom-form-check-group">
                <FormControlLabel
                  sx={{ margin: "0px !important" }}
                  control={
                    <Checkbox
                      checked={this.state.tac}
                      onChange={(e) => this.setState({ tac: e.target.checked })}
                      color="primary"
                    />
                  }
                  label=""
                />
                I accept the{" "}
                <a className="book__terms__link bookk__terms__link">
                  terms, conditions and privacy policy
                </a>{" "}
                {this.state.errors.tac && (
                  <Typography color="error">{this.state.errors.tac}</Typography>
                )}
                of the company.
                <p className="form-warning" id="tac-warning">
                  Required*
                </p>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    fontWeight: "bold",
                    marginY: "20px",
                    backgroundColor: "#4d8c52",
                    color: "#FFF",
                  }}
                  color="primary"
                  type="submit"
                  autoComplete="off"
                >
                  <img
                    src={spaceshipWhite}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Build My Vehicle
                </Button>
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
                    <a
                      href="https://www.youtube.com/channel/UCZ4l5Je0PVUvSrHr76vP0wA/featured"
                      target="_blank"
                    >
                      <img
                        src={youtube}
                        alt=""
                        style={{ marginRight: "10px", width: "34px" }}
                      />
                    </a>
                    <a
                      href="https://shop.agnikul.in/"
                      target="_blank"
                      style={{
                        borderRadius: "25px",
                        backgroundColor: "#2a572e",
                        padding: "7px 7px 10px 7px",
                      }}
                    >
                      <img src={shop} alt="" style={{ width: "20px" }} />
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
