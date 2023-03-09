import React from "react";

export class Theme{
    #status;
    #invert = ["0%", "100%"]

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

                break;
            case 1:
                this.#status = 0;
                localStorage.setItem(1, "Night");

                break;
        }
        
    }



}

