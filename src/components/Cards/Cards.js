import React from "react";
import './Cards.css'
import req1 from '../../assets/Requisito 1.png'
import req2 from '../../assets/Requisito 2.png'
import req3 from '../../assets/Requisito 3.png'


const Cards = () => {
  return (
    <div className="images">
      <div className="card">
        <img width="400" src={req1} alt="" />
      </div>
      <div className="card">
        <img width="400" src={req2} alt="" />
      </div>
      <div className="card">
        <img width="400" src={req3} alt="" />
      </div>
    </div>
  );
};

export default Cards;
