import "./busca.css";

function busca(props){
    return <div className="imput-group">
        <input type="text" className="form-control busca" placeholder={props.texto} />
        <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
    </div>
}

export default busca;