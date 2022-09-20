import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Psite from "../../img/Site.png";
import Pclima from "../../img/Clima.png";
import Pcriacao from "../../img/criacao.png";
import "./projetos.css";

function Projetos() {
  return (
    <div className="background-projetos">
      <Header />
      <div className="sobre">
        <h1>PROJETOS</h1>
        <div className="containerProjetos">
          <div className="projeto">
            <a href="https://rqueiroz-tattoo.netlify.app/index.html">
              <img src={Psite} alt="" />
            </a>
          </div>
          <div className="projeto">
            <a href="https://github.com/ecjsilva/Aplicacao-de-Clima">
              <img src={Pclima} alt="" />
            </a>
          </div>
          <div className="projeto-criacao">
            <img src={Pcriacao} alt="" />
          </div>
          <div className="projeto-criacao">
            <img src={Pcriacao} alt="" />
          </div>
          <div className="projeto-criacao">
            <img src={Pcriacao} alt="" />
          </div>
          <div className="projeto-criacao">
            <img src={Pcriacao} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projetos;
