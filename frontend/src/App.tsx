import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navibar";
import Form from './pages/FormCadastro';
import Inicio from "./pages/Inicio";
import Tabela from "./pages/tabela";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tabela" element={<Tabela />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;