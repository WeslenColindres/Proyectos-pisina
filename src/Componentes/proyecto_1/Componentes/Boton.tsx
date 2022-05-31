import React, {SyntheticEvent} from "react";
import classes from '../style/boton.module.scss';
interface props{

    onClick : () => void,
    nombre:string,
    
}

 export default function Boton (props:props) {

    return(
        
            <button className={classes.botton} type="button" onClick={props.onClick}>{props.nombre}</button>
        
    );

}
