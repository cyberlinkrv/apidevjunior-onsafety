import { Link } from 'react-router-dom';

import './styles.css';


function Inicio() {

    return (
        <div className="djs-form-container">
            <div className="djs-card-bottom-container">
                <h1>Cadastro de Pessoas</h1>
                <p />
                <p />
                <Link to="/tabela">
                <div className="djs-form-btn-container">
                    <button type="submit" className="btn btn-primary djs-btn">Listar Pessoas</button>
                </div>
                </Link>
                <p />
                <p />
                <Link to = "/form">
                <div className="djs-form-btn-container">
                    <button type="submit" className="btn btn-primary djs-btn">Cadastrar</button>
                </div>
                </Link>
                <p />
                <p />
                <div className="djs-form-btn-container">
                    <button type="submit" className="btn btn-primary djs-btn">Buscar por ID</button>
                </div>
                <p />
                <p />
                <div className="djs-form-btn-container">
                    <button type="submit" className="btn btn-primary djs-btn">Alterar</button>
                </div>
                <p />
                <p />
                <div className="djs-form-btn-container">
                    <button type="submit" className="btn btn-primary djs-btn">Excluir</button>
                </div>

            </div >
        </div >
    );
}

export default Inicio;