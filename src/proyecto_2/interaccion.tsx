import React, { useState } from "react";
import {colores} from '../Componentes/proyecto_2/colores'
import CambioColorBackGround from "../Componentes/proyecto_2/fondo";

export default function CambioBackground (){

    const [Color, setColor] = useState<string[]>(colores)
    
   //let color:number = Math.floor(Math.random() * Color.length );
   
    return(
        <div >
            <CambioColorBackGround colores = {Color}/>
            
        </div>
    );
}