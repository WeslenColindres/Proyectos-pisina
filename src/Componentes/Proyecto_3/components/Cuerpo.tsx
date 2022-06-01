import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import {NavLink, useNavigate} from 'react-router-dom';
import classes from'../../../Proyecto_3/style/Header.module.scss';
interface dt {
width: number,
height: number, 
}
export default function Header(){
    const historyal = useNavigate();
    const [MenuOpen, setMenuOpen] = useState(false);
    const [size, setsize] = useState<dt>({
        width: 0 ,
        height: 0,
    });

    useEffect(() =>{
        const handleResize = () => {
            setsize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize',handleResize);
        return() => window.removeEventListener('resize',handleResize );
    },[]);

    useEffect(() => {
        if(size.width > 768 && MenuOpen){
            setMenuOpen(false);
        }
    },[size.width, MenuOpen])

    const menuToggleHandler = () =>{
        setMenuOpen((p) => !p);
        console.log(MenuOpen);
    };
    
    const ctaClickHandler = () =>{
        historyal('/YO')
    }

    return(
    <header className={classes.header}>
       <div className={classes.header__contenedor}>
           <h2 className={classes.header__contenedor__logo}> Proyecto #3 </h2>
     
           <nav className={`
                        ${classes.header__contenedor__nav} 
                                                        ${MenuOpen ? 
                                                            classes.isMenu : 
                                                            ""}`
            }>
            <ul>
               <li>
                   <NavLink to="/Proyecto_1">Proyecto #1</NavLink>
               </li>
               <li>
                   <NavLink to="/Proyecto_2">Proyecto #2</NavLink>
               </li>
               <li>
                   <NavLink to="/Proyecto_4">Proyecto #4</NavLink>
               </li>
             
           </ul>
           <button onClick={ctaClickHandler}>YO</button>
       </nav>
       <div className={classes.header__contenedor__toggle}>
       {!MenuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                        <AiOutlineClose onClick={menuToggleHandler}/>
                        )}
        </div>
        </div>
    </header>
    );
}