import React from "react";
import '../styles/botonDarktheme.css';
import logoLight from '../images/light.png';
import logoDark from '../images/dark.png'

class BotonDarkTheme extends React.Component{
    render(){
        return(
            <button className="switch" id="switch">
                <img className="logoLight" src={logoLight}/>
                <img className="logoDark" src={logoDark}/>
            </button>
        )
    } 

}
const btnSwitch = document.getElementById('switch');
btnSwitch.addEventListener('click', ()=>{
    document.BotonDarkTheme.classList.toggle('logoDark');
});




export default BotonDarkTheme;