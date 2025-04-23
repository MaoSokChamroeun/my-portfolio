import React from 'react'
import style from './CSS/home.module.css';
import Skill from '../components/skill/Skill';
import profile from '../components/images/mao.png'
import Footer from '../components/footer/Footer';
import SocailMedia from '../components/socailMedia/SocailMedia';
const Home = () => {
  return <>
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.item}>
          <h1 className={style.say}>Hello My name is <span className={style.name}>Mao Sokchamroeun</span></h1> 
          <p className={style.desc}>Welcome To My Pertfolio Website,Let Cheak about me, If you like my information fo you can click Hire Me blow</p>
          <Skill />
          <span className={style.socail}>
            SocailMedia
          <SocailMedia />
          </span>
          
        </div>
      </div>

      <div className={style.right}>
        <div className={style.imgContainer}>
        <img src={profile} alt="cover" className={style.img} />
        </div>
      </div>

   
    </div>
    <Footer />
    </>
}

export default Home
