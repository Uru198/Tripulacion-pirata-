import React, { useState } from "react";

export const Register = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">Nombre</label>
            <input value={firstName}  onChange={(e) => setfirstName(e.target.value)} name="firstName" id="firstName" placeholder="firstName" type="text" />
            <label htmlFor="lastName">Apellido</label>
            <input value={lastName}  onChange={(e) => setlastName(e.target.value)} name="lastName" id="lastName" placeholder="lastName" type="text" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="ConfirmPassword">password</label>
            <input value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="ConfirmPassword" placeholder="********" id="ConfirmPassword" name="ConfirmPassword" />
        </form>
        <button type="submit" className="btn btn-success" value="Guardar" onClick={() => props.onFormSwitch('login')}>Guardar</button>
    </div>
    )
}

