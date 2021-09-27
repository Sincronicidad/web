import React, { useState } from "react";
import profileJ from "../../assets/appAssets/Assets/ProfileJ.png";
import "./Profile.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});

const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sureName, setSureName] = useState("");
  const [identity, setIdentity] = useState("");

  const saveChanges = (e) => {
    e.preventDefault();
    console.log("Changes to profile");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="profile">
      <div className="profile_left">
        <h3>Perfil</h3>

        <div className="profileLeft__header">
          <img src={profileJ} alt="" />
          <div className="profileLeft_right">
            <p className="profileLeft_right_p1">Sube tu foto de perfil …</p>
            <p className="profileLeft_right_p2">
              La imagen debe ser menos de 300px X 300px
            </p>
        
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button className="upload-btn" variant="contained" component="span">
                  Subir foto
                </Button>
              </label>
            
          </div>
        </div>

        <form >
          <div className="profile_form-control">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan"
            />
          </div>

          <div className="profile_form-control">
            <label htmlFor="surename">Apellidos</label>
            <input
              type="text"
              value={sureName}
              onChange={(e) => setSureName(e.target.value)}
              id="surename"
              placeholder="Hernández García"
            />
          </div>
          <div className="profile_form-control">
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
          <div className="profile_form-control">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="usuario@gmail.com"
            />
          </div>
          <div className="profile_form-control">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>

          <div className="profile_form-control">

              <Button onClick={saveChanges} className="submit-btn" variant="contained" component="span">
              Guardar cambios
             </Button>
    
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
