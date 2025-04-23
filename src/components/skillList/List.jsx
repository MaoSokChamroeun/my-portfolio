import React from 'react';
import style from './list.module.css'
import { useState,useEffect } from 'react';
const skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 50 },
  { name: 'React', level: 60 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'PHP', level: 50 },
  { name: 'SQL Server', level: 40 },

];
const SkillList = () => {
    const [loaded, setLoaded] = useState(false);

useEffect(() => {
  setLoaded(true);
}, []);
  return (
    <section id="skills" className={style.container}>
      <h2 className={style.skill}>MY <span className={style.mySkills}>SKILLS</span></h2>
      <hr></hr>
      <div className={style.skillList}>
        {skills.map((skill) => (
        <div key={skill.name}>
         <div className={style.item}>
      <span className={style.names}>{skill.name}</span>
      <div className={style.box}>
        <div
          className={style.rating}
          style={{ width: loaded ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
      <span className={style.levels}>{skill.level}%</span>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default SkillList;
