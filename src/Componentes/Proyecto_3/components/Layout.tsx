import React from "react";
import Cuerpo from './Cuerpo';
import classes from '../../../Proyecto_3/style/Layout.module.scss';
type chil = {
    children:any,
}

export default function Layout({children}:any){

    return(
        <>
        <Cuerpo/>
        <div className={classes.contenedor}>{children}</div>
        </>
    );

}