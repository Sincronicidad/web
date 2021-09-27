import React from "react";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import "./CheckingEmail.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TransparentSvg from "./rightSideSvg";

const CheckingEmail = () => {
  let navigate = useNavigate();

  return (
    <div className="checkingEmail">
      <div className="checking_left">
        <img className="logo" src={logo} alt="" />
        <h2 className="checking_h2">¿No recibiste un correo electrónico?</h2>

        <p className="checking_p">
          Si no lo recibiste dentro de las 72 horas por parte de nosotros,
          algunos incovenientes podrían haber pasado:
        </p>

        <ul className="checking_bullets">
          <li>El e-mail está en tu carpeta Spam</li>
          <li>
            La dirección de correo electrónico que registraste tiene algún error
            o letra.
          </li>
          <li>
            Accidentalmente registraste algúna otra dirección de correo
            electrónico.
          </li>
          <li>Nosotros no podemos enviarte el e-mail a esta dirección. </li>
        </ul>

        <Button
          className="checking-btn"
          onClick={() => navigate("/forwardAction")}
          variant="text"
          component="span"
        >
          Intente nuevamente ingresando su correo electrónico
        </Button>
      </div>

      <div className="evaluation_right">
        <TransparentSvg />
      </div>
    </div>
  );
};

export default CheckingEmail;
