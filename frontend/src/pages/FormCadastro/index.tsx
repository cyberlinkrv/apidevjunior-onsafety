import { Link } from 'react-router-dom';
import './styles.css';


function Form() {

    return (
        
        <div className="djs-form-container">
        <div className="djs-card-bottom-container">
            <h3>Novo Trabalhador</h3>
            
            <form className="djs-form">
                <div className="form-group djs-form-group">
                    <label htmlFor="nome">Nome</label>
                    <input type="nome" className="form-control" id="nome" />
                </div>
                <div className="form-group djs-form-group">
                    <label htmlFor="cpf">CPF</label>
                    <input type="cpf" className="form-control" id="cpf" />
                </div>
                <div className="form-group djs-form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input type="dataNascimento" className="form-control" id="dataNascimento" />
                </div>
                <div className="form-group djs-form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" className="form-control" id="email" />
                </div>
               
                <div className="djs-form-btn-container">
                    <button type="submit" className="btn btn-primary djs-btn">Salvar</button>
                </div>
            </form >
            <Link to="/" >
            <button className="btn btn-primary djs-btn mt-3">Cancelar</button>
            </Link>
        </div >
    </div >

    

    );
}

export default Form;