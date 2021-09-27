import React from "react";
import "./Functionalities.css";
import Grid from "@material-ui/core/Grid";
import data from '../../assets/appAssets/Assets/Data.png'
import brain from '../../assets/appAssets/Assets/brain.png'
import lader from '../../assets/appAssets/Assets/lader.png'

const Functionalities = () => {
  return (
    <section className="functionalities" id="functionalities">
      <Grid container className="gridContainer" spacing={3}>
        <Grid item lg={6} md={12}>
          <div className="left">
            <h2>FUNCIONALIDADES</h2>
            <div className="functionalities_info">
              <h5>Inteligencia Artificial para el bien</h5>
              <p>
                Técnicas avanzadas para enriquecer el contexto que se nos
                provees.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={12}>
          <div className="right">
            <div className="right-box">
              <img src={data} alt="" /> <p>Datos externos</p>
            </div>
            <div className="right-box">
            <img src={brain} alt="" /> <p>Aprendizaje automático</p>
            </div>
            <div className="right-box">
            <img src={lader} alt="" /> <p>Narrativa y visualización de la información</p>
            </div>
          </div>
        </Grid>
      </Grid>
      
    </section>
  );
};

export default Functionalities ;
