import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Hero from "../Hero/Hero";
import bg_top from "../../assets/bg_top.png";
import "./HeaderHeroWraper.css";
function HeaderHeroWraper() {
    return (
        <>
            <div className="HeaderHeroWraper">
                <AppHeader />
                <Hero />
                <img src={bg_top} alt="" className="bg_top_img" />
            </div>
        </>
    );
}

export default HeaderHeroWraper;
