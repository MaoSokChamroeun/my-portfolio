import React from 'react'
import style from './CSS/about.module.css';
import profile from '../components/images/mao.png';
import SkillList from '../components/skillList/List';
import Footer from '../components/footer/Footer';
const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.aboutMe}>
        ABOUT <span className={style.me}>ME</span>
      </h1>
      <hr></hr>
      <div className={style.aboutHero}>
      <div className={style.left}>
          <div className={style.imgContainer}>
            <img src={profile} alt='' className={style.img} />
          </div>
      </div>

      <div className={style.right}>
      <div className={style.title}>
        <h1 className={style.canDo}>What Can I Do ?</h1>
        <p className={style.desc}>My name is Chamroeun, a third-year student at the Royal University of Phnom Penh, Faculty of Information Technology. I have always been interested in working in a team environment in design and new technologies, and I enjoy using my creative ideas for coding. My main focus is on front-end development, where I have expertise in creating user-friendly, engaging, and easy-to-use experiences. My technical skills include a good understanding of HTML, CSS, JavaScript, and front-end libraries and frameworks such as React Boostrap and Tailwin css. I am highly skilled in responsive design principles, ensuring that websites look good and render well on different devices and screen sizes. Learning and staying on top of things is always my priority. I am always looking for new tools, frameworks, and techniques to enhance my skills and provide cutting-edge solutions for my valued clients.</p>
        </div>
      </div>
      </div>
      <SkillList />
      <Footer />
    </div>
  )
}

export default About
