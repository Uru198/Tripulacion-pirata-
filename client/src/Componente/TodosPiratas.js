import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TodosPiratas = () => {

    const [pirata, setPirata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas")
            .then(res => setPirata(res.data))
            .catch(err => console.log(err));
    }, [])

    const borrarPirata = id => {
        axios.delete("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                //Actualizar ls lita de autores por medio de filter
                let nuevaLista = pirata.filter(pirata => pirata._id !== id);
                setPirata(nuevaLista);
            })
    }


    return (
        <div className="container">
            <h1>Tripulacion Pirata</h1>
            <Link to="/nuevo" className="btn btn-success">Nuevo Pirata</Link>
            <Link to="/pirata/registro" className="btn btn-primary">Registro Pirata</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pirata.map((pirata, index) => (
                            <tr key={index}>
                                <td>{pirata.nombre}</td>
                                <td>
                                    <img src={pirata.imagen} alt="pirata" className="img-fluid" />
                                </td>
                                <td>
                                    <div className="btn-group ">
                                        <Link className="btn btn-primary" to={`/pirata/ver/${pirata._id}`}>ver</Link>
                                        <Link className="btn btn-warning" to={`/pirata/editar/${pirata._id}`}>Editar</Link>
                                        <button className="btn btn-danger btn-xs" onClick={() => borrarPirata(pirata._id)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodosPiratas;
