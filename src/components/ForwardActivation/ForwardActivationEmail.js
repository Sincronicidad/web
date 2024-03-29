import React, { useState } from "react";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import "./ForwardActivation.css";
import Button from "@mui/material/Button";
import TransparentSvg from "../CheckingEmail/rightSideSvg";
import { FaRegEye } from "react-icons/fa";
const ForwardActivationEmail = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

    const submitActivation = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
    };
    function showpass() {
        let x = document.getElementById("password");
        let showoff = document.getElementById("eye");
        if (x.type === "password") {
            x.type = "text";
            showoff.style.color = "#14b097";
        } else {
            x.type = "password";
            showoff.style.color = "#555a60";
        }
    }

    return (
        <div className="forwardActivation">
            <div className="activation_left">
                <img className="logo" src={logo} alt="" />
                <h2 className="activation_h2">
                    Reenvío de e-mail de activación
                </h2>
                <p className="activation_left_p">
                    Le enviamos un mensaje con un enlace para activar su cuenta.
                    Si no lo recibió, puedes volver a ingresar su dirección de
                    correo electrónico o probar con otra dirección, y le
                    enviaremos un nuevo enlace de activación.{" "}
                </p>

                <form>
                    <div className="activation_form-control">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="juanhernandezg@gmail.com"
                        />
                    </div>

                    <div className="activation_form-control">
                        <label htmlFor="password">Contraseña</label>
                        <div
                            className="password_div"
                            style={{ width: "min-content" }}
                        >
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                            />
                            <FaRegEye
                                className="eye"
                                onClick={showpass}
                                id="eye"
                            />
                        </div>
                    </div>
                    <div className="activation_form-control">
                        <label htmlFor="confirmEmail">
                            Confirma tu correo electrónico
                        </label>
                        <input
                            type="email"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            id="confirmEmail"
                        />
                    </div>

                    <div className="activation_form-control">
                        <Button
                            onClick={submitActivation}
                            className="register-btn"
                            variant="contained"
                            component="span"
                        >
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>

            <div className="activation_right">
                <TransparentSvg />
            </div>
        </div>
    );
};

export default ForwardActivationEmail;
