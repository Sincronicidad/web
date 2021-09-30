import React from "react";
import "./Organization.css";
import org1 from "../../assets/Org 1.png";
import org2 from "../../assets/Org 2.png";
import org3 from "../../assets/Org 3.png";
import org4 from "../../assets/Org 4.png";
import { Button } from "@material-ui/core";
import spline from "../../assets/spline.png";

const Organization = () => {
    const startNow = () => {
        console.log("startNow");
    };

    return (
        <div className="organization" id="organization">
            <h1>ORGANIZACIONES DETRÁS</h1>
            <div className="companies">
                <div className="comp1">
                    <img className="comp1-img" src={org1} alt="" />
                </div>
                <div className="comp1">
                    <img className="comp2-img" src={org2} alt="" />
                </div>
                <div className="comp1">
                    <img className="comp3-img" src={org3} alt="" />
                </div>
                <div className="comp1">
                    <img className="comp4-img" src={org4} alt="" />
                </div>
            </div>

            <div className="info">
                <h2>
                    {" "}
                    A México le cuesta la corrupción más de
                    <span> 100 mil millones </span> de dólares al año.
                </h2>
            </div>
            <div className="bt">
                <Button className="org-btn" onClick={startNow}>
                    Empieza ahora
                </Button>
            </div>
            <img src={spline} alt="" className="Organization_bg" />
        </div>
    );
};

export default Organization;
