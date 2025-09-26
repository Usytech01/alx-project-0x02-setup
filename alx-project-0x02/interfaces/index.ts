import React, { Key } from 'react'

export interface CardProp{
    title: string;
    content: string;
}

export interface ButtonProps{
    label:string;
    size?: "small" | "medium" | "larg";
    shape?: "rounded-sm" | "rounded-md" |"rounded-lg";
    onClick?: () => void;
}

export interface PostProps{
    id: Key | null | undefined;
    userId: Number;
    title: string;
    content: string;
}


