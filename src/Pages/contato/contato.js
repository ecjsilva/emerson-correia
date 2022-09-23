import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./contato.css";
import logo from "../../img/logo.png";

function Contato() {
  return (
    <>
      <div className="contato">
        <Header />
        <h1 className="title-contato">CONTATO</h1>
        <br />
        <h2>FALE COMIGO NAS REDES SOCIAIS</h2>
        <div
          className="logoContato"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src={logo} alt="" />
        </div>
        <div className="containerContato">
          <button className="linkedin">
            <i class="fa-brands fa-linkedin"></i>{" "}
            <a href="https://www.linkedin.com/in/emerson-correia-a0a957243/">
              Linkedin
            </a>
          </button>
          <button className="github">
            <i class="fa-brands fa-github"></i>{" "}
            <a href="https://github.com/ecjsilva">GitHub</a>
          </button>
          <button className="instagram">
            <i class="fa-brands fa-instagram"></i>{" "}
            <a href="https://www.instagram.com/ecj.silva/?theme=dark">
              Instagram
            </a>
          </button>
          <button className="whatsapp">
            <i class="fa-brands fa-whatsapp"></i>{" "}
            <a href="https://api.whatsapp.com/send?phone=5581998024340">
              Whatsapp
            </a>
          </button>
          <button className="email">
            <i class="fa-solid fa-envelope"></i>{" "}
            <a href="mailto:juniorcorreiajuniorcorreia@outlook.com.br">
              E-mail
            </a>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contato;
