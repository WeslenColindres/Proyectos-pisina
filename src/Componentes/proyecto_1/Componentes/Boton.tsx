import React, {SyntheticEvent} from "react";
interface props{

    onClick : () => void
    
}

 export default function Boton (props:props) {

    return(
        
            <button type="button" onClick={props.onClick}>datos</button>
        
    );

}
