import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Pirata = () => {
    const {id} = useParams();
    const [pirata, setPirata] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                setPirata(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);


    return(
        <div className="container">
            <div className="card-header">
                <h1>{pirata.nombre}</h1></div>
            <div className="row">
                <div className="col-6">
                    <img src={pirata.imagen} alt="pirata" className="img-fluid" />
                </div>
                <div className="col-6" >
                    <h2>About</h2>
                    <p>
                        Cargo: {pirata.cargo}
                    </p>
                    <p>
                        Cargo: {pirata.tesoro}
                    </p>
                    <p>Pata de palo{
                            pirata.peg_leg ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                        }</p>
                        
                    
                    
                    <p>ojo con Parche {
                            pirata.eye_patch ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                        }</p>
                       
                    
                    <p>Garfio{
                            pirata.hook_hand ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                        }</p>
                        
                    <Link to="/" className="btn btn-primary">Regresar</Link>
                </div>  
            </div>
          
               
            
        </div>
    )

}

export default Pirata;