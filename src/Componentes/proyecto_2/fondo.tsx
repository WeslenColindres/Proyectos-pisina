import React, { useState } from "react";
import classes from './style/index.module.scss';

type col = {
    colores:string[],
}

const datos={

    colores: 0,

}

export default function CambioColorBackGround(props:col){

    const [Ramdom, setRamdom] = useState<number>(0);

    const BackGround = {
        background:props.colores[Ramdom],
    }
    
    return(

        <div style = {BackGround} className={classes.cambio} >
        
            <div className={classes.colores} >
               
            </div>
            <button className={classes.botton} onClick={()=> 
                                setRamdom(Math.floor(Math.random() 
                                * props.colores.length))}>
                                    <span>{props.colores[Ramdom]}</span>
                                </button>
        </div>

    );


}