import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import profile from "../../img/profile.png";
import "./sobre.css";

function Sobre() {
  return (
    <>
      <div className="background-sobre">
        <Header />
        <div className="sobre">
          <h1>QUEM SOU EU?</h1>
          <div className="containerSobre">
            <p>
              Me chamo Emerson Correia, Tenho 20 anos, sou Desenvolvedor Web,
              comecei a estudar programação no início do ano de 2022, Sou
              fascinado por computadores e sempre quis trabalhar na área de
              tecnologia, mas como é uma grade de conhecimentos gigantes, não
              sabia por onde começar, foi aí que conheci o desenvolvimento web,
              que abriu minha mente e que me cativou a conhecer mais e mais,
              desde então comecei a estudar fazendo vários cursos e projetos, no
              começo foi complicado por não entender muito sobre programação,
              mas foi com a repetição e correção que estou buscando a perfeição,
              é isso que me faz continuar a querer aprender mais e mais.
            </p>
            <img src={profile} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Sobre;
