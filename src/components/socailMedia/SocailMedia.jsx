import React from 'react'
import { FaFacebook } from "react-icons/fa";
import style from './socail.module.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const SocailMedia = () => {
  return (
    <div className={style.container}>
      <div className={style.icon}> 
      <NavLink to={"https://www.facebook.com/share/18hHHkMVFc/?mibextid=LQQJ4d"}>
            <FaFacebook className={style.faIcon} style={{color: "blue"}}/>
      </NavLink>
      <NavLink to={"https://t.me/sokchamroeun11"}>
        <FaTelegramPlane className={style.faIcon} style={{color: "#028ac4"}}/>
      </NavLink>
      <NavLink to={"https://www.instagram.com/maosokchomroeun/"}>
        <FaInstagramSquare className={style.faIcon} id={style.ig}/>
      </NavLink>
      
      </div>
    </div>
  )
}

export default SocailMedia
