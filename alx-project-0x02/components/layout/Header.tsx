import Link from "next/link";
import React from "react";


export default function Header(){
    return(
        <header>
            <nav>
                <Link href="/home">Home</Link>
                <Link href="about">About</Link>
            </nav>
        </header>
    );
}