import React from "react";
import NextHead from "next/head";
import Gabrielle from "../../page-components/our-cats/Gabrielle";

const OurCats = () => {
    return (
        <div className="container py-4 bg-cover">

            <NextHead>
                <title>Our Cats - Majestic Mellow</title>
            </NextHead>
            <Gabrielle/>
        </div>
    );
}

export default OurCats;