import React, {useState} from "react";
import "./Clock.css";


export const Clock = () => {
    const [date, setDate] = useState(new Date());
    function Date1s() {
        setDate(new Date());

    }

    setInterval(Date1s, 1000);

    return (
        <div id="Clock">
            {date.toLocaleTimeString()}
        </div>
    );
};
