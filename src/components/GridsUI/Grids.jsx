import React from "react";
import "./Grids.css";


export const GridTechnologies = () => {
    const listDate = [new Date(2021,9-1,1), new Date(2022,9-1,1), new Date(2023, 2-1, 1)];
    const listID = [["html",listDate[1],"HTML5"], ["css",listDate[1],"CSS3"], ["js",listDate[1],"JavaScript"], ["ts",listDate[2],"TypeScript"],
        ["sass",listDate[2], "Sass(SCSS/SASS)"], ["react",listDate[2],"React.js"], ["cpp",listDate[0],"C++"], ["java",listDate[1],"Java"],
        ["git",listDate[1],"Git"], ["figma",listDate[2],"Figma"], ["python",listDate[2],"Python"], ["android",listDate[2],"Android SDK"]];
    let date = new Date();
    let listDiv = [];
    for (let i = 0; i < listID.length;++i)
    {
        let strDate = "";
        if (listID[i][1].getFullYear() === date.getFullYear())
        {
            if(listID[i][1].getMonth()+1 !== date.getMonth()+1)
            {
                strDate = ((date.getMonth()+1) - (listID[i][1].getMonth()+1)) + "м";
            }
            else
            {
                strDate = (date.getDate() - listID[i][1].getDate()) + "д";
            }
        }
        else if (date.getFullYear() - listID[i][1].getFullYear() === 1)
        {
            if (date.getMonth()+1 < listID[i][1].getMonth()+1)
            {
                strDate = ((date.getMonth()+13) - (listID[i][1].getMonth()+1)) + "м";
            }
            else
            {
                strDate = "1г";
            }
        }
        else
        {
            if (date.getMonth()+1 < listID[i][1].getMonth()+1)
            {
                strDate = (date.getFullYear() - listID[i][1].getFullYear() - 1) + "г";
            }
            else
            {
                strDate = (date.getFullYear() - listID[i][1].getFullYear()) + "г";
            }
        }
        listDiv.push(
            <div id={listID[i][0]} key={listID[i][0]}>
                <div>
                    <p>{listID[i][2]}</p>
                    <p>Опыт работы: 0д</p>
                    <p>Опыт разработки: {strDate}</p>
                </div>
            </div>
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