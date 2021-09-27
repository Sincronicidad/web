import React, { useState } from "react";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import registerSvg from "../../assets/appAssets/Assets/Bienvenido.png";
import "./Register.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sureName, setSureName] = useState("");
  const [identity, setIdentity] = useState("");
  let navigate = useNavigate();


  const submitRegister = (e) => {
    e.preventDefault();
    console.log("login page");
    navigate('/evaluationProfile')
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register">
      <div className="register_left">
        <img className="logo" src={logo} alt="" />
        <h2 className="register_h2">Bienvenido a Sincronicidad</h2>
        <p className="register_left_p">
          ¿Ya tienes una cuenta?{" "}
          <span className="register_left_sp">Inicia sesión</span>{" "}
        </p>

        <form>
          <div className="register_form-control">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan"
            />
          </div>

          <div className="register_form-control">
            <label htmlFor="surename">Apellidos</label>
            <input
              type="text"
              value={sureName}
              onChange={(e) => setSureName(e.target.value)}
              id="surename"
              placeholder="Hernández García"
            />
          </div>
          <div className="register_form-control">
            <label htmlFor="identity">
              Nombre de la Institución o Identidad
            </label>
            <input
              type="text"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              id="identity"
              placeholder="Institución o Identidad"
            />
          </div>
          <div className="register_form-control">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="usuario@gmail.com"
            />
          </div>
          <div className="register_form-control">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>

          <div className="register_form-control">
            <p className="guidelines">
              Al hacer clic en el botón "Registrarse", estás creando una cuenta
              de Sincronicidad y aceptas los{" "}
              <span className="sp-guideline">Términos de uso</span> y la{" "}
              <span className="sp-guideline">
                {" "}
                Políticas de manejo de datos personales
              </span>{" "}
              de Sincronicidad.
            </p>
          </div>

          <div className="register_form-control">
            <Button
              onClick={submitRegister}
              className="register-btn"
              variant="contained"
              component="span"
            >
              Registrarse
            </Button>
          </div>
        </form>
      </div>

      <div className="register_right">
        <img src={registerSvg} alt="" />
      </div>
    </div>
  );
};

export default Register;
