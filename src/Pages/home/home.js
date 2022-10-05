import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import imgLogo from "../../img/logo.png";
import "./home.css";

function Home() {
  return (
    <div className="background">
      <Header />
      <div>
        <div className="container-logo">
          <img src={imgLogo} alt="" />
        </div>
        <div className="container-text">
          <h1>EMERSON CORREIA</h1>
          <h2>DESENVOLVEDOR FRONT-END</h2>
        </div>
        <div className="containerButton">
          <button>
            <a href="https://www.linkedin.com/in/emerson-correia-a0a957243/">
              <i class="fa-brands fa-linkedin-in"></i> Linkedin
            </a>
          </button>
          <button>
            <a href="https://github.com/ecjsilva">
              <i class="fa-brands fa-github"></i> GitHub
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
