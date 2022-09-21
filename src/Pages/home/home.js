import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="background">
        <Header />
        <div className="container-logo">
          <div className="flip Y" data-aos="zoom-in" data-aos-duration="1500">
            <div className="front"></div>
            <div className="back"></div>
          </div>
        </div>
        <div className="wrappertxt">
          <h1 className="typing-demo">EMERSON CORREIA</h1>
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
    </div>
  );
}

export default Home;
