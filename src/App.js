import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contato from "./Pages/contato/contato";
import Especialidades from "./Pages/especialidades/especialidades";
import Home from "./Pages/home/home";
import Projetos from "./Pages/projetos/projetos";
import Sobre from "./Pages/sobre/sobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
}

export default App;
