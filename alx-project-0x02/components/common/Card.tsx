import React from "react";
import { CardProp } from "@/interfaces";

export default function({title,content}: CardProp){
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}