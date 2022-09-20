import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./contato.css";
import logo from "../../img/logo.png";

function Contato() {
  return (
    <>
      <div className="contato">
        <Header />
        <h1>CONTATO</h1>
        <br />
        <h1>FALE COMIGO NAS REDES SOCIAIS</h1>
        <div
          className="logoContato"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src={logo} alt="" />
        </div>
        <div className="containerContato">
          <button className="linkedin">
            <i class="fa-brands fa-linkedin"></i> Linkedin
          </button>
          <button className="github">
            <i class="fa-brands fa-github"></i> GitHub
          </button>
          <button className="instagram">
            <i class="fa-brands fa-instagram"></i> Instagram
          </button>
          <button className="whatsapp">
            <i class="fa-brands fa-whatsapp"></i> Whatsapp
          </button>
          <button className="email">
            <i class="fa-solid fa-envelope"></i> E-mail
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contato;
