import React, { useState } from "react";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import loginSvg from "../../assets/appAssets/Assets/Iniciar sesion.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaRegEye } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const submitLogin = (e) => {
        e.preventDefault();
        console.log("login page");
        navigate("/caseRegister");
        setEmail("");
        setPassword("");
    };

    const forgotPassword = () => {
        navigate("/forgotPassword");
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
        <div className="login">
            <div className="login_left">
                <img className="logo" src={logo} alt="" />
                <h2 className="login_h2">Iniciar Sesión</h2>
                <p className="login_p">
                    ¿Necesitas una cuenta para Sincronicidad?{" "}
                    <span>Crear una cuenta</span>
                </p>
                <form style={{ marginTop: "40px" }}>
                    <div className="form-control">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="usuario@gmail.com"
                            id="email"
                        />
                    </div>

                    <div className="form-control ">
                        <div className="labelAndforget">
                            <label htmlFor="password">Contraseña</label>{" "}
                            <p onClick={forgotPassword}>
                                ¿Olvidaste tu contraseña?
                            </p>
                        </div>

                        <div className="password_div">
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

                    <div className="form-control">
                        <div className="check">
                            {/* <input type="checkbox" /> */}
                            <FormControlLabel
                                value="end"
                                control={
                                    <Checkbox
                                        style={{
                                            color: "#14b097",
                                        }}
                                    />
                                }
                                label="Mantenme conectado"
                                labelPlacement="end"
                            />
                        </div>
                        <Button
                            style={{
                                marginTop: "15px",
                            }}
                            onClick={submitLogin}
                            className="login-btn"
                            variant="contained"
                            component="span"
                        >
                            Iniciar Sesión
                        </Button>
                    </div>
                </form>
            </div>

            <div className="login_right">
                <img src={loginSvg} alt="" />
            </div>
        </div>
    );
};

export default Login;
