import React, {useState} from "react";
import "./Header.css";
import documents from "./../../Image/documents.png";
import {Clock} from "../ClockUI/Clock";
import {Theme} from "../LogicNightAndDayTheme/LogicNightAndDayTheme";

export const Header = () => {
    let [A] = useState(new Theme());
    function Click()
    {
        A.Change();
    }

    return (
        <header id="header">
            <img src={documents} />
            <button onClick={Click}></button>
            <Clock/>
        </header>
    );
};