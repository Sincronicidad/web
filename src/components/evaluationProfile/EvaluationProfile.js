import React from "react";
import logo from "../../assets/appAssets/Assets/Artboard 1 copy.png";
import "./EvaluationProfile.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import administrator from "../../assets/appAssets/Assets/Administrador.png";

const EvaluationProfile = () => {
    let navigate = useNavigate();

    return (
        <div className="evaluation">
            <div className="evaluation_left">
                <img className="logo" src={logo} alt="" />
                <h2 className="evaluation_h2">
                    Un administrador evaluará tu perfil
                </h2>

                <p className="evaluation_p">
                    Podría recibir un correo electrónico en las próximas horas a
                    su correo electrónico juanhernandezg@gmail.com con un enlace
                    para activar tu cuenta.
                    <br />
                    <br />
                    ¿Sabes acerca de las funcionalidades de la plataforma?
                </p>
                <Button
                    className="evaluation-btn"
                    onClick={() => navigate("/checkingEmail")}
                    variant="contained"
                    component="span"
                >
                    Conoce más
                </Button>
            </div>

            <div className="evaluation_right">
                <img src={administrator} alt="" />
            </div>
        </div>
    );
};

export default EvaluationProfile;
