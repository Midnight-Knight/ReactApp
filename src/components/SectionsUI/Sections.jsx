import React from "react";
import "./Sections.css";
import {DivName} from "../DivsUI/Divs";
import {GridTechnologies} from "../GridsUI/Grids";



export const FirstSection = () => {
    return (
        <section id="FirstSection">
            <DivName/>
        </section>
    )
}

export const SecondSection = () => {
    return (
        <section id="SecondSection">
            <GridTechnologies/>
        </section>
    )
}

export const ThirdSection = () => {
    return (
        <section id="ThirdSection">

        </section>
    )
}