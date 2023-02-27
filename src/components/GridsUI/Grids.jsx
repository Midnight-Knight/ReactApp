import React from "react";
import "./Grids.css";
import {DivGrid} from "../DivsUI/Divs";

export const GridTechnologies = () => {
    const listID = ["html","css","js","ts","sass","react","cpp","java","git","figma","python","android"];
    let listDiv = [];
    for (let i = 0; i < listID.length;++i)
    {
        listDiv.push(<DivGrid id={listID[i]} key={listID[i]}/>)
    }

    return(
        <div id="GridTechnologies">
            {listDiv.map(elem => {
                return elem;
            })}
        </div>
    );
};