import React from "react";
import Button from "@/components/common/Button";

export default function AboutPage(){
    return(
        <main>
            <h1>About us</h1>
            <p>This is your about page of Nextjs</p>
            <div>
                <Button label="Small Button" size="small" shape="rounded-sm"/>
                <Button label = "small Button" size= "small" shape="rounded-md"/>
                <Button label = "small Button" size= "small" shape="rounded-lg"/>
            </div>
        </main>
    );
}