import React from "react";
import "./Divs.css";
import "./ProfessionDiv.css";
import "./AchievementsDivs.css";
import "./HeadDivs.css";
import "./DivPortfolio.css"
import ReactLogo from "./../../Image/ReactLogo.png";
import Frontend1 from "./../../Image/Frontend1.png";
import Frontend2 from "./../../Image/Frontend2.png";
import Android_Dev from "./../../Image/android_dev.png";
import Game_Dev from "./../../Image/game_dev.png";
import Design from "./../../Image/design.png";
import Space from  "./../../Image/-chqhtmfA62hfRUizy3aG7xnTI4GsZeivPzepy6nrWION2JfadHthhne1TskDBFtAwFdMS0SNzXgyI9umZlVcgsZ.jpg";

export const DivName = () => {
    const name = "Деев Леонид";
    const vacancy = "Frontend Developer";
    const list = ["Gmail","Yandex email","Телефон","Адрес"];

    return(
        <div id="Name" className="Div UnitedDiv">
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
        <div id="React" className="Div UnitedDiv">
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
    "JS библиотеки и фреймворки. Он отвечает за отображение контента на экране и реализацию логики для клиентской части интернет ресурса."],
        ["HTML-верстальщик","HTML-верстальщик занимается созданием структуры сайта с помощью языка разметки HTML и таблицы каскадных стилей CSS. Он учитывает дизайн и функциональность, " +
        "обеспечивает правильную работу сайта на различных устройствах и браузерах."],["Веб/Мобильный Дизайнер",""],["Игровой разработчик",""],["Android разработчик",""]];
    let arr = [];
    const size = 5;
    for (let i = 0; i < size; ++i)
    {
        let str = "ProfessionDiv UnitedDiv";
        switch (i%2)
        {
            case 0:
                str += " LeftProfession";
                break;
            case 1:
                str += " RightProfession";
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
    let date = new Date();
    let dateStart = new Date(2021, 9-1, 1);
    let year = 0;
    if (date.getMonth()+1 < dateStart.getMonth()+1)
    {
        year = date.getFullYear() - dateStart.getFullYear();
    }
    else
    {
        year = date.getFullYear() + 1 - dateStart.getFullYear();
    }
    return (
        <div className="HeadDiv">

        </div>
    );
};

export const AchievementsDivs = () => {
    let arr = [];
    let len = 2;
    for (let i = 0; i < len; ++i)
    {
        let str = "AchievementsDivs UnitedDiv";
        switch (i%2)
        {
            case 0:
                str += " LeftAchievements";
                break;
            case 1:
                str += " RightAchievements";
                break;
        }
        switch (i)
        {
            case 0:
                str += " Start";
                break;
        }
        switch (i)
        {
            case len-1:
                str += " End";
                break;
        }
        arr.push(
            <div className={str}>
                <img src={Space}/>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, neque tempora? Ab animi at eius
                    iusto repellat soluta tempora vel?</p>
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

export const DivHeadPortfolio = () => {
    return (
        <div id="DivHeadPortfolio">
            <h1>Мои проекты</h1>
        </div>
    );
};

export const DivButtonPortfolio = () => {
    return (
        <div id="DivButtonPortfolio">
            <button>Frontend</button>
            <button>Дизайн</button>
            <button>GameDev</button>
            <button>AndroidDev</button>
        </div>
    );
};

