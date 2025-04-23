import React, { useEffect, useState } from "react";
import style from './skill.module.css';

const skills = [
    "Web Design",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Tailwinds Css",
    "SQL Server",
    "PHP"
    ];

const Skill = () => {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentSkill.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentSkill.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        // Deleting
        setText(currentSkill.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setSkillIndex((skillIndex + 1) % skills.length); // next skill
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <div className={style.container}>
      My Skill : <span className={style.textItems}>{text}</span>
    </div>
  );
};

export default Skill;
