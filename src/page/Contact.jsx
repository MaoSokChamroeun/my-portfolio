import React from 'react'
import style from './CSS/contact.module.css';
import cover from '../components/images/cover-contact.png';
import Footer from '../components/footer/Footer';
const Contact = () => {
  return <>
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imgContainer}>
          <img src={cover} alt='cover-contact' className={style.img}/>
        </div>
      </div>
      <div className={style.right}>
        
        <div className={style.formContainer}>
        <h1>Contact <spam className ={style.contactMe}>Me</spam></h1>
          <label>First Name</label>
          <input className={style.input} type='text' placeholder='' /><br></br>
          <label>Last Name</label>
          <input className={style.input} type='text' placeholder='' required /><br></br>
          <label>Email Address</label>
          <input className={style.input} type='text' placeholder='Please enter your email' /><br></br>
          <textarea placeholder='Message' cols={10} rows={18} />
          <button className={style.btn}>Sent</button>
          </div>
      </div>
    </div>
    <Footer />
    </>
}

export default Contact;