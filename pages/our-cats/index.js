import Header from "../../components/Layout/Header";
import NextHead from "next/head";
import React from "react";
import Gabrielle from "../../page-components/our-cats/Gabrielle";

const OurCats = () => {
    return (
        <div className="container py-4">

            <NextHead>
                <title>Our Cats - Majestic Mellow</title>
            </NextHead>
            <Gabrielle/>
        </div>
    );
}

export default OurCats;