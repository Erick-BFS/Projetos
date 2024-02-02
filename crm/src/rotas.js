import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Noticias from "./pages/noticia_pages/noticia_pages.jsx";
import Previsao from "./pages/previsao_pages/previsao_pages.jsx";
import Negocios from "./pages/negocios/negocios.jsx";
import Atividades from "./pages/atividades_pages/atividades_pages.jsx";
import Tarefas from "./pages/tarefas_pages/tarefas_pages.jsx"


function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/negocios" element={<Negocios />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/Tarefas" element={<Tarefas />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;