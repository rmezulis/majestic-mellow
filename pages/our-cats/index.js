import React from "react";
import NextHead from "next/head";
import Gabrielle from "../../page-components/our-cats/Gabrielle";
import {Col} from "reactstrap";

const OurCats = () => {
    return (
        <div className="container py-4 bg-cover">

            <NextHead>
                <title>Our Cats - Majestic Mellow</title>
                <meta name="title" content="Our Cats - Sacred Birman Cattery - Majestic Mellow"/>
                <meta name="description" content="Birman cat mademoiselle IT* Sweety Yowl Gabrielle. Named
                    after a prominent figure of luxury fashion Gabrielle ”Coco” Chanel."/>
            </NextHead>
            <Gabrielle/>
        </div>
    );
}

export default OurCats;