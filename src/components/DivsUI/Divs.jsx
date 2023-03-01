import React from "react";
import "./Divs.css";
import ReactLogo from "./../../Image/ReactLogo.png";

export const DivName = () => {
    const name = "Деев Леонид";
    const vacancy = "Frontend Developer";
    const list = ["Gmail","Yandex email","Телефон","Адрес"];

    return(
        <div id="Name" className="Div">
            <div>
                <div>
                    <h2>{name}</h2>
                    <h4>{vacancy}</h4>
                </div>
                <div>
                    <ul>
                        <li>{list[0]}</li>
                        <li>{list[1]}</li>
                        <li>{list[2]}</li>
                        <li>{list[3]}</li>
                    </ul>
                </div>
                <div>
                    <a id="TG"></a>
                    <a id="GH"></a>
                    <a id="VK"></a>
                    <a id="DC"></a>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export const DivReact = () => {
    const str = "Created on React and Sass";

    return (
        <div id="React" className="Div">
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <img src={ReactLogo} id="ReactLogo"/>
                <h6>{str}</h6>
            </div>
        </div>
    );
};



