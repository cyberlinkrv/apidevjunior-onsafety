import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


function Tabela() {

    axios.get('http://localhost:8080/pessoas').then(
        response => {
            const data = response.data

            console.log(data);

        })
        .catch(error => console.log(error));




return (
    <div className="djs-form-container">
        <table className="table table-striped">
            <thead>


                <tr>
                    <th scope="col">id</th>
                    <th scope="col">nome</th>
                    <th scope="col">cpf</th>
                    <th scope="col">data de nascimento</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>


                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>96665646</td>
                    <td>01/01/1981</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

        <p />
        <div>
            <Link to="/" >
                <button className="btn btn-primary djs-btn mt-3">Voltar</button>
            </Link>
        </div>
    </div>



);
}

export default Tabela;