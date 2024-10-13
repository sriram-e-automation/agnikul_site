import React from "react";
import "./css/book-complete.css";
import satellite from "./images/book-complete/satellite.png";
import back from "./images/book-complete/back.png";
import $ from "jquery";

import { Link } from "react-router-dom";

function BookComplete() {
  $(document).ready(function () {
    $("body").removeClass("products");
  });

  return (
    <div className="body">
      <Link to="/">
        <p className="bookc__close">X</p>
      </Link>
      <img src={back} class="back-image" />
      <div className="middle-banner">
        <img className="middle-image" src={satellite} />
        <p className="middle-head">Congratulations!</p>
        <p className="middle-text">
          We have received your request. You are one step closer to getting to
          orbit. A dedicated payload strategist has been assigned to you. We
          will get in touch with you shortly.
        </p>
        <Link to="/agnibaan">
          <button className="middle-button">GO BACK TO PRODUCTS</button>
        </Link>
      </div>
    </div>
  );
}

export default BookComplete;
