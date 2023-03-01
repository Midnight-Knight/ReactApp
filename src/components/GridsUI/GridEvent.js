import React from "react";

export function onmouseover(id, list)
{
    for (let i = 0; i < list.length; ++i)
    {
        if (i != id)
        {
            document.getElementById(list[i]).style.opacity = "0.4";
        }
    }
}

export function onmouseout(list)
{
    for (let i = 0; i < list.length; ++i)
    {
        document.getElementById(list[i]).style.opacity = "1";
    }
}