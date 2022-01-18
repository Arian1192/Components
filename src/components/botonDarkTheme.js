import React from "react";
import '../styles/botonDarktheme.css';
import logoLight from '../images/light.png';
import logoDark from '../images/dark.png';


// Falta crear la funcion que cambie el estado ::after y le de la clase active
// Falta tambien que se cambie el body a oscuro.


const BotonDarkTheme = () => {

        const btnSwitch = ()=> {
            const elemento = document.getElementById("switch");
            const elementoCuerpo = document.getElementById("cuerpo");
            if(elemento.className == "switch" && elementoCuerpo.className == "cuerpo"){
                elemento.className +=" active";
                elementoCuerpo.className +=" active";}
            else{
                elemento.classList.remove("active");
            elementoCuerpo.classList.remove("active");}

        }

    
    return(
        <button onClick={()=> btnSwitch()} className="switch" id="switch">
            <img className="logoLight" src={logoLight}/>
            <img className="logoDark" src={logoDark}/>
        </button>
    )
 
}

export default BotonDarkTheme;