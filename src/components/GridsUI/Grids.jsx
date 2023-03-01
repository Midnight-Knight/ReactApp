import React from "react";
import "./Grids.css";
import {onmouseover, onmouseout} from "./GridEvent.js";


export const GridTechnologies = () => {
    const listID = ["html","css","js", "ts","sass","react", "cpp","java","git", "figma","python","android"];
    let listDiv = [];
    for (let i = 0; i < listID.length;++i)
    {
        listDiv.push(
            <div id={listID[i]} key={listID[i]} onMouseOver={() => onmouseover(i, listID)} onMouseOut={() => onmouseout(listID)}/>
        )
    }

    return(
        <div id="GridTechnologies">
            {listDiv.map(elem => {
                return elem;
            })}
        </div>
    );
};