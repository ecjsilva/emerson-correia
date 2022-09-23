import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import imgLogo from "../../img/logo.png";
import "./home.css";

function Home() {
  return (
    <div className="background">
      <Header />
      <div className="container-logo">
        <img src={imgLogo} alt="" />
      </div>
      <div className="container-text">
        <h1>EMERSON CORREIA</h1>
        <h2>DESENVOLVEDOR FRONT-END</h2>
      </div>

      <div className="containerButton">
        <button>
          <i class="fa-brands fa-linkedin-in"></i> Linkedin
        </button>
        <button>
          <i class="fa-brands fa-github"></i> GitHub
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
