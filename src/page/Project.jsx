import React from 'react'
import style from './CSS/project.module.css';
import projectData from '../components/data/data.js';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext.js';
import { useContext } from 'react';
const Project = () => {
  const {mode} = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <h1>
        MY <span className={style.project}>PROJECTS</span>
      </h1>
      <div className={style.boxContainer}>
            {projectData.map((item)=>{
              return(
                <NavLink className={style.cartLink}>
                <div className={style.card}>
                <div className={style.box}>
                 <img src={item.image} alt='cart-image' className={style.img} />
                </div>
                <div className={style.info} >
                <h1 className={style.titles} style={mode === 'dark' ? {color: "white"} : {color: "black"}}>{item.title}</h1>
                <p className={style.descs} style={mode === 'dark' ? {color: "white"} : {color: "black"}}>{item.desc}</p>
                </div>
               
                </div>
                </NavLink>  
              )
            })}

       
      </div>
    </div>
  )
}

export default Project
