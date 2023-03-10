import React from "react";
import "./Header.css";
import documents from "./../../Image/documents.png";
import {Clock} from "../ClockUI/Clock";

export const Header = () => {

    return (
        <header id="header">
            <img src={documents} />
            <Clock/>
        </header>
    );
};