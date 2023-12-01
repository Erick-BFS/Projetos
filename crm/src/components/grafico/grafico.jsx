import { Chart } from "react-google-charts";

function Grafico (props){
    const dados = [
        ["Mês", "Valor"],
        ["01", 1750],
        ["02", 570],
        ["03", 6660],
        ["04", 8530],
        ["05", 7064],
        ["06", 35],
      ];

      const options = {
        legend: props.legenda ? {} : {position: "none"}
      }

      return <div className="card">
      <div className="card-header">
          {props.titulo}
      </div>
      <div className="card-boby text-center">
        <Chart chartType={props.chartType}
            data={dados}
            width="100%"
            height="350px"
            options={options}
            legendToggle={true} />          
      </div>
  </div>

}

export default Grafico;