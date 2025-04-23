
import React, { useState } from 'react';
import navData from "./data";
import { NavLink } from 'react-router-dom';
import style from './navbar.module.css';
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import DarkModeTheme from '../DarkMode/DarkModeTheme';
import { ThemeContext } from '../../Context/ThemeContext';
import { useContext } from 'react';
const Navbar = () => {
  const {mode} = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.name}>
        <h1><span className={style.firstName}>MAO</span> SOKCHAMROEUN</h1>
      </div>
      <nav>
        <button onClick={toggleBurger} className={style.burger}>
          {isOpen ? <IoMdClose size={24} style={mode === "dark" ? {color: "white"} : {color: "black"}}/> : <CiMenuBurger size={24} style={mode === "dark" ? {color: "white"} : {color: "black"}}/>}
        </button>
        <ul className={`${style.nav} ${isOpen ? style.open : ''}`}>
          <DarkModeTheme />
          {navData.map((item) => (
            <li key={item.title} className={style.item}>
              <NavLink to={item.path} className={({ isActive }) =>`${style.link} ${isActive ? style.active : ''}`} style={mode === "dark" ? {color: "white"} : {color: "black"}} >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
