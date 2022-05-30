import React, { useState } from "react";

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

        <main style = {BackGround}>
        
            <div style={{background : 'blue'}}>
               {props.colores[Ramdom]}
            </div>
            <button onClick={()=> 
                                setRamdom(Math.floor(Math.random() 
                                * props.colores.length))}>
                                    Click RamdomColors
                                </button>

        
        
        </main>

    );


}