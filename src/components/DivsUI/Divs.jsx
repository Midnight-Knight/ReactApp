import React from "react";
import "./Divs.css";
import ReactLogo from "./../../Image/ReactLogo.png";

export const DivName = () => {
    return(
        <div id="Name" className="Div">
            <div>
                <div>
                    <h2>Деев Леонид</h2>
                    <h4>Frontend Developer</h4>
                </div>
                <div>
                    <ul>
                        <li>GMail</li>
                        <li>Yandex email</li>
                        <li>Телефон</li>
                        <li>Адрес</li>
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
  return (
      <div id="React" className="Div">
          <div>
              <div></div>
              <div></div>
          </div>
          <div>
              <img src={ReactLogo} id="ReactLogo"/>
              <h6>Welcome to React and Sass</h6>
          </div>
      </div>
  );
};