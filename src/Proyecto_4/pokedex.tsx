import React from "react";

import Pokemondatos from '../Componentes/Proyecto_4/CrearContenedorPokemon'
import classes from './Pokedex.module.scss';


export default function Pokedex (){
   return(

    <>
        <h1>Pokedex</h1>
        <div className={classes.div}>
            <ul className={classes.ul}>
                <li >
                     <Pokemondatos/>
                </li>
                <li>
                     <Pokemondatos/>
                </li>
                <li>
                     <Pokemondatos/>
                </li>
            </ul>
            <ul className={classes.ull}>
                 <li>
                     <Pokemondatos/>
                </li>
                <li>
                     <Pokemondatos/>
                </li>
                <li>
                     <Pokemondatos/>
                </li>
            </ul>
        </div>
    </>
       
   );
}