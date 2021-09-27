import React,{useState} from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import contactImg from "../../assets/1.png";
import questionsSvg from "../../assets/Preguntas frecuentes.png";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');


  const startNow = () => {
    // logic will go here 


    setName('');
    setEmail('');
    setTextArea('');
  }

  return (
    <div className="contact">
      <div className="contactUs">
        <h1>Contáctanos</h1>
        <form>
        <div className="formControl">
          <label htmlFor="name">NOMBRE COMPLETO *</label>
          <input type="text" value={name}  onChange={(e)=> setName(e.target.value)} id="name" placeholder="Juan Hernaández García" />
        </div>
        <div className="formControl">
          <label htmlFor="name">EMAIL *</label>
          <input
            type="text"
            id="name"
            value={email}  onChange={(e)=> setEmail(e.target.value)}
            placeholder="correo_electrónico@gmail.com"
          />
        </div>
        <div className="formControl">
          <label htmlFor="name">MENSAJE *</label>
          <textarea  value={textArea}  onChange={(e)=> setTextArea(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="bts">
          <Button className="cont-btn" onClick={startNow}>Empieza ahora</Button>
        </div>
        </form>
      </div>
      <div className="contact-right">
        <img className="contactImg" width="438" src={contactImg} alt="" />
        <img className="questionSvg" width="55" src={questionsSvg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
