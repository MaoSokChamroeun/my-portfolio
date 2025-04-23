import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import style from './theme.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
const DarkModeTheme = () => {
    const {toggle,mode} = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
    <div className={style.icon}>
    <FaRegMoon />
    </div>
    <div className={style.icon} >
    <MdOutlineLightMode />
    </div>
    <div className={style.ball} 
    style={mode === "dark" ? {marginLeft: 28 + 'px'} : {marginRight: 28 + 'px'}}
    />
    </div>
  )
}

export default DarkModeTheme
