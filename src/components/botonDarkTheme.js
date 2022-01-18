import React from "react";
import '../styles/botonDarktheme.css';
import logoLight from '../images/light.png';
import logoDark from '../images/dark.png';
import { click } from "@testing-library/user-event/dist/click";

// Falta crear la funcion que cambie el estado ::after y le de la clase active
// Falta tambien que se cambie el body a oscuro.


class BotonDarkTheme extends React.Component{

    render(){
        return(
            
            <button /*>onClick={this.btnSwitch}*/ className="switch" id="switch">
                <img className="logoLight" src={logoLight}/>
                <img className="logoDark" src={logoDark}/>
            </button>
            
        )
    } 
}






export default BotonDarkTheme;