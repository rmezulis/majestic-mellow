import Header from "../../components/Layout/Header";
import NextHead from "next/head";
import React from "react";

const Links = () => {
    return (
        <div>
            <NextHead>
                <title>Links - Majestic Mellow</title>
            </NextHead>
            <Header/>
        </div>
    );
}

export default Links;