import React from "react";
import "./Divs.css";
import "./ProfessionDiv.css";
import "./AchievementsDivs.css";
import "./HeadDivs.css";
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
    let arrH = [["Frontend разработчик","Фронтенд-разработчик создает динамический пользовательский интерфейс сайта, используя HTML, CSS, JavaScript, " +
    "JS библиотеки и фреймворки. Он отвечает за отображение контента на экране и обеспечивает удобство использования для пользователя."],
        ["HTML-верстальщик","HTML-верстальщик занимается созданием структуры сайта с помощью языка разметки HTML и таблицы каскадных стилей CSS. \n Он учитывает дизайн и функциональность, " +
        "обеспечивает правильную работу сайта на различных устройствах и браузерах."],["Веб/Мобильный Дизайнер",""],["Игровой разработчик",""],["Android разработчик",""]];
    let arr = [];
    const size = 2;
    for (let i = 0; i < size; ++i)
    {
        let str = "ProfessionDiv";
        switch (i%2)
        {
            case 0:
                str += " Left";
                break;
            case 1:
                str += " Right";
                break;
        }
        switch (i)
        {
            case 0:
                str += " Start";
                break;
            case size-1:
                str += " End";
                break;
        }
        arr.push(
            <div className={str}>
                <img src={arrImage[i]}/>
                <div>
                    <h5>{arrH[i][0]}</h5>
                    <p>{arrH[i][1]}</p>
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

export const HeadDiv = () =>
{
    return (
        <div className="HeadDiv">
            <h3>Личные достижения</h3>
        </div>
    );
};

export const AchievementsDivs = () => {
    let arr = [];
    let len = 1;
    for (let i = 0; i < 1; ++i)
    {
        let str = "";
        switch (i)
        {
            case len:
                break;
            case 1:
                break;
        }
        arr.push(
            <div className="AchievementsDivs">
                <div>
                    <img/>
                </div>
                <div>
                    <p></p>
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

