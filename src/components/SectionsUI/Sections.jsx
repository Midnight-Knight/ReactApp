import React from "react";
import "./Sections.css";
import {DivName, DivReact, ProfessionDiv, AchievementsDivs, HeadDiv} from "../DivsUI/Divs";
import {GridTechnologies} from "../GridsUI/Grids";



export const FirstSection = () => {
    return (
        <section id="FirstSection">
            <DivReact/>
        </section>
    )
}

export const SecondSection = () => {
    return (
        <section id="SecondSection">
            <DivName/>
        </section>
    )
}

export const ThirdSection = () => {
    return (
        <section id="ThirdSection">
            <GridTechnologies/>
        </section>
    )
}

export const FourthSection = () => {
  return (
      <section id="FourthSection">
          <ProfessionDiv/>
      </section>
  );
};

export const FifthSection = () => {
    return (
        <section id="FifthSection">
            <HeadDiv/>
            <AchievementsDivs/>
        </section>
    );
};