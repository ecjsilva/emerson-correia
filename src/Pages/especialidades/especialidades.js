import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./especialidades.css";
import "./especialidades.scss";
import bootstrap from "../../img/logo/bt.png";
import javascript from "../../img/logo/js.png";
import html from "../../img/logo/html.png";
import css from "../../img/logo/css.png";
import git from "../../img/logo/git.png";
import typescript from "../../img/logo/ts.png";
import react from "../../img/logo/react.png";
import node from "../../img/logo/node.png";

function Especialidades() {
  return (
    <>
      <div className="background-especialidades">
        <Header />
        <div className="especialidades">
          <h1>ESPECIALIDADES</h1>
          <div className="containerLOGO">
            <div className="containerBarra" data-aos="fade-up">
              <img src={html} alt="htmlLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-html shadow-html"
                  >
                    {" "}
                  </circle>
                </svg>
                <span class="progressbar__text shadow-html">HTML</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={css} alt="cssLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-css shadow-css"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-css">CSS</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={bootstrap} alt="bootstrapLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-js shadow-bt"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-bt">Bootstrap</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={javascript} alt="javascriptLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-js shadow-js"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-js">JavaScript</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={git} alt="gitLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-css shadow-css"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-css">GIT</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={react} alt="reactLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-react shadow-react"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-react">React.js</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={typescript} alt="typescriptLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-ts shadow-ts"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-ts">TypeScript</span>
              </div>
            </div>
            <div className="containerBarra" data-aos="fade-up">
              <img src={node} alt="nodeLOGO" />
              <div class="progressbar">
                <svg class="progressbar__svg">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    class="progressbar__svg-circle circle-node shadow-node"
                  ></circle>
                </svg>
                <span class="progressbar__text shadow-node">Node.js</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Especialidades;
