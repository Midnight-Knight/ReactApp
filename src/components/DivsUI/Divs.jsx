import React from "react";
import "./Divs.css";
import "./ProfessionDiv.css";
import ReactLogo from "./../../Image/ReactLogo.png";
import Frontend1 from "./../../Image/Frontend1.png";
import Frontend2 from "./../../Image/Frontend2.png";
import Android_Dev from "./../../Image/android_dev.png";
import Game_Dev from "./../../Image/game_dev.png";
import Design from "./../../Image/design.png";

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

export const ProfessionDiv = () => {
    let arrImage = [Frontend1,Frontend2, Design, Game_Dev, Android_Dev];
    let arrH = ["Frontend разработчик", "HTML-верстальщик","Веб/Мобильный Дизайнер","Игровой разработчик","Android разработчик"];
    let arr = [];
    const size = 5;
    for (let i = 0; i < size; ++i)
    {
        let str = "ProfessionDiv";
        switch (i%2)
        {
            case 0:
                str += " Left";
                switch (i)
                {
                    case 0:
                        str += " Start";
                        break;
                    case size-1:
                        str += " End";
                }
                break;
            case 1:
                str += " Right";
                switch (i)
                {
                    case 0:
                        str += " Start";
                        break;
                    case size-1:
                        str += " End";
                }
                break;
        }
        arr.push(
            <div className={str}>
                <img src={arrImage[i]}/>
                <div>
                    <h5>{arrH[i]}</h5>
                    <p>Описание</p>
                </div>
            </div>
        )
    }
    return (
        <>
            {arr.map(elem => {
                return elem;
            })}
        </>
    );
};

