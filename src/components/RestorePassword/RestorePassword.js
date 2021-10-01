import React, { useState } from "react";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import restorePasswordSvg from "../../assets/appAssets/Assets/Restablecer.png";
import "./RestorePassword.css";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";


const RestorePassword = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const submitRestore = (e) => {
    e.preventDefault();
    console.log("submit restore page");

    setEmail("");
  };

  const returnToLog = () => {
    navigate('/login')
  }

  return (
    <div className="restorePassword">
      <div className="password_left">
        <img className="logo" src={logo} alt="" />
        <h2 className="password_h2">Restablecer contraseña</h2>
        <div className="password_guidelines">
        <p className="password_left_p">
          Le enviaremos por correo electrónico instrucciones para restablecer su
          contraseña. Si ya no tiene acceso a su correo electrónico, puede
          intentar la{" "}
          <span className="password_left_sp">recuperación de la cuenta.</span>{" "}
        </p>
        </div>

        <form>
          <div className="password_form-control">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@gmail.com"
            />
          </div>

          <div className="passwordInstruction">
              <p>Enviaremos a tu mail un enlace de restablecimiento de contraseña.</p>
          </div>

          <div className="password_form-control">
            <Button onClick={submitRestore} className="restorePassword-btn" variant="contained" component="span">
               Restablecer contraseña
              </Button>
            <Button onClick={returnToLog} className="returnToLog" variant="text" component="span">Volver a iniciar sesión</Button>
          </div>
        </form>
      </div>

      <div className="password_right">
        <img src={restorePasswordSvg} alt="" />
      </div>
    </div>
  );
};

export default RestorePassword;
