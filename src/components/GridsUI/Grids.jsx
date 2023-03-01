import React from "react";
import "./Grids.css";
import {onmouseover, onmouseout} from "./GridEvent.js";


export const GridTechnologies = () => {
    const listID = ["html","css","js", "ts","sass","react", "cpp","java","git", "figma","python","android"];
    let listDiv = [];
    for (let i = 0; i < listID.length;++i)
    {
        listDiv.push(
            <div id={listID[i]} key={listID[i]} onMouseOver={() => onmouseover(i, listID)} onMouseOut={() => onmouseout(listID)}>

            </div>)
    }

    /*
                <div>
                    <p>{listID[i][2]}</p>
                    <p>Опыт работы: {zero}</p>
                    <p>Опыт разработки: {listID[i][1].toLocaleDateString()}</p>
                </div>
     */

    return(
        <div id="GridTechnologies">
            {listDiv.map(elem => {
                return elem;
            })}
        </div>
    );
};