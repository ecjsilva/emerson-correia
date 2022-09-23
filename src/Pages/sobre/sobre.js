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
              Olá, o meu nome é emerson correia, tenho 20 anos, sou
              Desenvolvedor Front-End Jr, comecei na área com intuito de ser
              grande, de aprender todo o dia uma coisa nova, fica mais fácil
              aprender quando está estudando algo que seja de próprio interesse,
              foi assim que em menos de 6 meses de estudos consegui-me
              especializar em ferramentas necessesarias para forma o front-end
              como, HTML, CSS, Sass, Bootstrap, JavaScript e React. Atualmente
              estou estudando o back-end, para me aperfeiçoar mais, mas ainda
              tendo o front-end como objetivo de carreira.
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
