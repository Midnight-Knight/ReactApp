import React from "react";

export class Theme{
    #status;
    #Background = ["rgba(36, 9, 53, 1)","rgba(219,246,202,1)"];
    #BackgroundA = ["rgba(36, 9, 53, 0.5)",""];
    #Block = ["rgba(32,33,79,1)",""];
    #BlockA = ["rgba(32,33,79, 0.5)",""];
    #BlockActive = ["rgba(123,104,238,1)",""];
    #BlockActiveA = ["rgba(123,104,238,0.5)",""];
    #Black = "rgba(0,0,0,1)";
    #BlackA = "rgba(0,0,0,0.5)";
    #White = "rgba(255,255,255,1)";
    #WhiteA = "rgba(255,255,255,0.5)";

    constructor() {
        if (localStorage.key(0) === "true")
        {
            this.#status = (localStorage.key(1) === "Night") ? 0 : 1;
        }
        else
        {
            localStorage.setItem(0, "true");
            localStorage.setItem(1, "Night");
            this.#status = 0;
        }
    }

    Change()
    {
        switch (this.#status)
        {
            case 0:
                this.#status = 1;
                localStorage.setItem(1, "Day");
                document.getElementById("ThirdSection").style.background = this.#White;
                break;
            case 1:
                this.#status = 0;
                localStorage.setItem(1, "Night");
                document.getElementById("ThirdSection").style.background = this.#Black;
                break;
        }
        document.getElementById("FirstSection").style.background = this.#Background[this.#status];
        document.getElementById("SecondSection").style.background = this.#Background[this.#status];
        console.log(this.#Background[this.#status]);
    }



}

