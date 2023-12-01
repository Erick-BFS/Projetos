import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Atividades from "../../components/atividades/atividades.jsx";

function Atividades_Pages(){
  return <>
  <div className="container-fluid">
      <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="atividades" />
          </div>

          <div className="col py-3 me-3">
              <div className="mb-5">
                  <Busca texto="Busca por Negócios" />
              </div>
              
                  <div className="d-flex justify-content-between mb-3">
                      <div className="d-inline-flex">
                          <Atividades/>

                          
                      </div>
                     
                      
                  
              </div>

              <div className="row">

              </div>
          </div>
      </div>
      </div>
</>
}
export default Atividades_Pages;