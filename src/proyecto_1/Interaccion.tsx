import React, {useState} from "react";
import Boton from "../Componentes/proyecto_1/Componentes/Boton"

export default function Proyecto_1_Contador () {
    const [Counter , setCounter] = useState(0);

    const CounterIncrease = () => {

        setCounter(Counter + 1);
        
    }

    const CounterDecraease = () => {

        setCounter(Counter - 1);
        
    }

    const CounterReset = () => {

        setCounter(Counter * 0)
        
    }

    return(
        <>

            <div>
                <h2>Counter</h2>
                <h1 style={Counter > 0 ? {color : 'green'} : 
                Counter < 0 ? {color:'red'} : {color:'black'} }>
                {Counter}
                </h1>
                <div>
                     <Boton onClick = {CounterDecraease} nombre ='Decraease'/>
                     <Boton onClick = {CounterReset} nombre ='Reset'/>
                     <Boton onClick = {CounterIncrease} nombre ='Increase'/>
                </div>
            </div>

        </>
    )
}