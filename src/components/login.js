import React from "react";
import '../styles/login.css';
const name = "Arian"

class Login extends React.Component{
    render(){
        return (
            <div className="Container">
                <form className="ContainerChildren">
                    <h2 className="Texto">Nombre</h2>
                    <input className="Inputs" type="text" placeholder="Nombre"/>
                    <h2 className="Texto">Password</h2>
                    <input className="Inputs" type="password" placeholder="Password"/>
                </form>
                <div className="ContainerChildren2">
                    <button className="Boton">Login</button>
                </div>
            </div>
        )
    }
}

export default Login