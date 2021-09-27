import React from "react";
import "./Hero.css";
 import heroImg from "../../assets/1.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TransparentSvg from "./TransparentSvg";
import RightArrowSvg from "./RightArrowSvg";

const Hero = () => {

  const startNow = () => {
    console.log("Start now")
  }

  return (
    <section className="hero" id="/">
     <TransparentSvg className="transparentSVG" />
      <Grid container spacing={3}>
        <Grid item lg={6} md={12}>
          {/*left part of hero */}
          <div className="hero_left">
            <p>Combate <span>la corrupción</span>   usando datos</p>
            <div className="hero_left_info">
              <Button onClick={startNow} className="hero_btn" type="primary">
                Empieza ahora
              </Button>
              <div className="hero_left_svgIcon">
                <Button type="text" className="heroBtnAndIcon">
                    <RightArrowSvg />
                  <span className="watchVideobtn">Ver video</span>
                </Button>
              </div>
            </div>
            <img className="heroLeft_img" src={heroImg} alt="" />
          </div>
        </Grid>
        <Grid item lg={6} md={12}>
          {/* Right part of hero */}
          <div className="hero_right">
            <div className="hero__info">
              <h2>ACERCA DE NOSOTROS</h2>
              <h1>Somos un equipo multidisciplinario que busca ayudarte</h1>
              <p>
                Empoderamos a periodistas con habilidades de Programación,
                Ingeniería de Datos y Diseño de Información para encontrar casos
                sospechosos.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>

    </section>
  );
};
export default Hero;
