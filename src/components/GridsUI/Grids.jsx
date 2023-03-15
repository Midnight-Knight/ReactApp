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

export const GridEducation = () => {
    let education = "Бакалавриат";
    let dateStart = new Date(2021,9-1,1);
    let dateActual = new Date();

    if ((dateActual.getFullYear() - dateStart.getFullYear()) > 4 || ((dateActual.getFullYear() - dateStart.getFullYear()) == 4 && dateActual.getMonth()+1 >= 7)) {}
    else
    {
        if (dateActual.getMonth()+1 >= dateStart.getMonth()+1)
        {
            education += " (" + (dateActual.getFullYear()-dateStart.getFullYear()+1) + " курс)";
        }
        else
        {
            education += " (" + (dateActual.getFullYear()-dateStart.getFullYear()) + " курс)";
        }
    }


    return(
      <div id="GridEducation">
          <div id="DevPhoto">
              <div></div>
          </div>
          <div id="UniversityText" className="EduBlock">
              <ul>
                  <li>
                      <h6>Высшее образование:</h6>
                  </li>
                  <li>
                      <h6>Университет:</h6>
                  </li>
                  <li>
                      <h6>Факультет:</h6>
                  </li>
                  <li>
                      <h6>Специальность:</h6>
                  </li>
                  <li>
                      <h6>Год окончания:</h6>
                  </li>
              </ul>
              <ul>
                  <li>
                      <p>{education}</p>
                  </li>
                  <li>
                      <p>РТУ МИРЭА</p>
                  </li>
                  <li>
                      <p>Институт информационных технологий</p>
                  </li>
                  <li>
                      <p>Разработка и дизайн компьютерных игр и мультимедийных приложений</p>
                  </li>
                  <li>
                      <p>2025</p>
                  </li>
              </ul>
          </div>
          <div id="BlockText" className="EduBlock">
              <p>
                  В процессе обучения в области проектирования и разработки мобильных приложений, интернет-ресурсов и клиент-серверных систем, я получил теоретическую и практическую
                  подготовку с углубленной специализацией в игровой и медиаиндустрии.
              </p>
              <p>
                  Мой учебный процесс проходил в компьютерных классах, оснащенных современным
                  аппаратно-программным обеспечением и мультимедийным оборудованием, а также в специализированных лабораториях, оборудованных системами захвата движения и лицевой мимики,
                  расширенной реальности, программным и техническим обеспечением для разработки компьютерной графики высокого качества.
              </p>
              <p>
                  В рамках моего обучения, я уделял особое внимание дизайну цифровых продуктов и геймдизайну, компьютерной анимации и мультимедийным технологиям. Я также изучил
                  инструментальные средства для разработки функционала и дизайна компьютерных игр и мультимедийных приложений.
              </p>
          </div>
          <div id="StatisticsBlock" className="EduBlock"></div>
      </div>
    );
};

export const GridPortfolio = () => {
    return (
        <div id="GridPortfolio">

        </div>
    );
};