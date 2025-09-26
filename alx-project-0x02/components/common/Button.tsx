import React from "react";
import { ButtonProps } from "@/interfaces";

export default function Button({
  label,
  onClick,
}: ButtonProps) {
    return(
        <button onClick={onClick} className="p-3 rounded-md text-white cursor-pointer ">{label}</button>
    )
}