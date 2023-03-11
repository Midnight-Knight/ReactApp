import React, {useEffect, useState} from "react";
import "./Clock.css";


export const Clock = () => {
    const [date, setDate] = useState(new Date());
    function Date1s() {
        setDate(new Date());
    }


    useEffect(() => {
        const intervalID = setInterval(Date1s, 1000);
        return () => clearInterval(intervalID);
    }, [])


    return (
        <div id="Clock">
            {date.toLocaleTimeString()}
        </div>
    );
};
