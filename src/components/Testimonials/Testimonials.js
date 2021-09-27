import React from "react";
import "./Testimonials.css";
import pic from "../../assets/Testimonio 1.png";

const Testimonials = () => {
  return (
    <div className="testimonials" id="dd">
      <h1>TESTIMONIOS</h1>
      <div className="testimonial_text">
        <p>¿Qué piensa la gente de sincronicidad?</p>
      </div>
      <div className="pic-description">
        <img width="120" src={pic} alt="" />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique, duis cursus"
        </p>
      </div>
      <div className="below-testimonial">
        <h4>María Rondall</h4>
        <h5>Fundadora de Lorem</h5>
      </div>
    </div>
  );
};

export default Testimonials;
