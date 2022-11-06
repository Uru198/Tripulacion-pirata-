import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoPirata = () => {

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [tesoro, setTesoro] = useState("");
    const [cargo, setCargo] = useState("");
    const [peg_leg, setPeg_leg] = useState(false);
    const [eye_patch, setEye_patch] = useState(false);
    const [hook_hand, setHook_hand] = useState(false);

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const guardarPirata = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/piratas", {
            nombre,
            imagen,
            tesoro,
            cargo,
            peg_leg,
            eye_patch,
            hook_hand

        })
            .then(res => history.push("/"))
            .catch(err => {console.log(err.response.data);
                setErrors(err.response.data.errors)
            })
            
    }

    return (
        <div className="container">
            <h1>Nuevo Pirata</h1>
            <form onSubmit={guardarPirata}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">URL de Imagen:</label>
                    <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)} className="form-control" />
                    {errors.imagen ? <span className="text-danger">{errors.imagen.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="tesoro">Tesoro:</label>
                    <input type="number" id="tesoro" name="tesoro" value={tesoro} onChange={e => setTesoro(e.target.value)} className="form-control" />
                    {errors.tesoro ? <span className="text-danger">{errors.tesoro.message}</span>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="cargo">Cargo:</label>
                    <select type="text" id="cargo" name="cargo" value={cargo} onChange={e => setCargo(e.target.value)} className="form-control">
                        <option value="capitan">Capitan</option>
                        <option value="Primer Compañero">Primer Compañero</option>
                        <option value="maestro de ceremonias">Maestro de ceremonias</option>
                        <option value="contramaestre">contramaestre</option>
                        <option value="mono de polvo">mono de polvo</option>
                    </select>
                    {errors.cargo ? <span className="text-danger">{errors.cargo.message}</span>: null}
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="peg_leg" name="peg_leg" checked={peg_leg} onChange={e => setPeg_leg(e.target.checked)} />
                    <label className="form-check-label" htmlFor="peg_leg">
                        Pata de palo
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="eye_patch" name="eye_patch" checked={eye_patch} onChange={e => setEye_patch(e.target.checked)} />
                    <label className="form-check-label" htmlFor="eye_patch">
                        Parche en el ojo
                    </label>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input" id="hook_hand" name="hook_hand" checked={hook_hand} onChange={e => setHook_hand(e.target.checked)} />
                    <label className="form-check-label" htmlFor="hook_hand">
                        Garfio
                    </label>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
            </form>
        </div>
    )  

}

export default NuevoPirata;

