import Header from "../../components/Layout/Header";
import NextHead from "next/head";
import React from "react";

const Kittens = () => {
    return (
        <div>
            <NextHead>
                <title>Kittens - Majestic Mellow</title>
            </NextHead>
            <Header/>
        </div>
    );
}

export default Kittens;