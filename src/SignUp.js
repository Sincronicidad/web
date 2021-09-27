import React from "react";
import desk from "../../Images/desk.png";
import { Button } from "@material-ui/core";
// import Bienvenido1 from './../Images/Bienvenido.png'
function Signup() {
  return (
    <div className="mainDev">
      <div className="row main">
        <div className="register col-ms-4">
          <div className="logo">
            <img src={desk} />
          </div>
          <div className="row">
            <form className="col s12">
              <h2>Bienvenido a Sincronicidad</h2>
              <h4>
                ¿Ya tienes una cuenta? <span>Inicia sesión </span>
              </h4>
            </form>
          </div>

          <div className="row">
            <form className="col s12">
              <span className="lable">Nombre</span>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value=""
                    placeholder="Juan"
                    id="first_name2"
                    type="text"
                    className="validate input-field1"
                  />
                </div>
              </div>

              <span className="lable">Apellidos</span>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value=""
                    placeholder="Hernández García"
                    id="first_name2"
                    type="text"
                    className="validate input-field1"
                  />
                </div>
              </div>

              <span className="lable">
                Nombre de la Institución o Identidad
              </span>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value=""
                    placeholder="Institución o Identidad"
                    id="first_name2"
                    type="text"
                    onFocus={(e) => e.target.select()}
                    className="validate input-field1"
                  />
                </div>
              </div>

              <span className="lable">Correo electrónico</span>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value=""
                    placeholder="usuario@gmail.com"
                    id="first_name2"
                    type="email"
                    className="validate input-field1"
                  />
                </div>
              </div>

              <span className="lable">Contraseña</span>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value=""
                    placeholder="************"
                    id="first_name2"
                    type="password"
                    className="validate input-field1"
                  />
                </div>
              </div>

              <div className="list">
                <div className="subList">
                  <ol>
                    <li>Un carácter en minúscula</li>
                    <li>Un carácter en mayúscula</li>
                    <li>Un número</li>
                    <li>Un carácter especial</li>
                  </ol>
                </div>
                <div className="subList">
                  <ol>
                    <li>8 caracteres como mínimo</li>
                    <li>50 caracteres máximo</li>
                  </ol>
                </div>
              </div>
              {/* end of list */}
            </form>

            <div className="input-field col s6">
              <h5>
                Al hacer clic en el botón "Registrarse", estás creando una
                cuenta de Sincronicidad y aceptas los{" "}
                <span>Términos de uso </span> y la
                <span>Políticas de manejo de datos personales </span> de
                Sincronicidad.
              </h5>
              <Button className="buttonM" color="success">
                Registrarse
              </Button>
            </div>
          </div>
        </div>
        {/* End of register */}
        <div className="svgImage col-ms-6">
          <img src={desk} />
        </div>
      </div>
    </div>
  );
}

export default Signup;
