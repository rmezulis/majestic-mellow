import NextHead from "next/head";
import React from "react";
import {Jumbotron} from "reactstrap";

const AboutUs = () => {
    return (
        <div className="container py-4">
            <NextHead>
                <title>About Us - Majestic Mellow</title>
                <meta name="title" content="About Us - Sacred Birman Cattery - Majestic Mellow"/>
                <meta name="description" content="LV* Majectic Mellow cattery has been established in March 2021 in Riga, Latvia. We are registered in
                    Fédération Internationale Féline (FIFe) and as well a member of Cat Fanciers Clubs Association
                    (CFCA)."/>
            </NextHead>
            <Jumbotron className="bg-color">
                <h1>About Us</h1>
                <p className="cat-text">
                    LV* Majectic Mellow cattery has been established in March 2021 in Riga, Latvia. We are registered in
                    Fédération Internationale Féline (FIFe) and as well a member of Cat Fanciers Clubs Association
                    (CFCA).
                </p>
                <p className="cat-text">
                    Our cattery name LV*Majestic Mellow mirror the Birman cat royal beauty and divine sweet caracter.
                </p>
                <p className="cat-text">
                    Our treasure, Sacred Birman cat mademoiselle Gabrielle Sweety Yowll IT* arrived to our family in
                    2018, from sunny Italy * One look into her alluring sapphire blue eyes, and tru love story has
                    begin.
                </p>
            </Jumbotron>
        </div>
    );
}

export default AboutUs;