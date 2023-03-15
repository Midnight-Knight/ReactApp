import React from "react";
import "./Sections.css";
import {DivName, DivReact, ProfessionDiv, AchievementsDivs, DivHeadPortfolio, DivButtonPortfolio} from "../DivsUI/Divs";
import {GridTechnologies, GridEducation, GridPortfolio} from "../GridsUI/Grids";



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
            <GridEducation/>
        </section>
    );
};

export const SixthSection = () => {
    return (
        <section id="SixthSection">
            <AchievementsDivs/>
        </section>
    );
};

export const SeventhSection = () => {
    return (
        <section id="SeventhSection">
            <DivHeadPortfolio/>
        </section>
    );
};

export const EighthSection = () => {
    return (
        <section id="EighthSection">
            <DivButtonPortfolio/>
            <GridPortfolio/>
        </section>
    );
};