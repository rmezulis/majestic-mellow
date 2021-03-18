import React from "react";
import NextHead from "next/head";
import Header from "../components/Layout/Header";
import AboutCats from "../page-components/home/AboutCats";
import Kittens from "../page-components/home/Kittens";

const Home = () => {
    return (
        <div>
            <NextHead>
                <title>Majestic Mellow</title>
            </NextHead>
            <div className="home-header vh-100">
                <Header className="container-fluid"/>
            </div>

            <AboutCats/>

            <Kittens/>

            {/*<div className="gallery_section_2">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-sm-8">*/}
            {/*                <h1 className="pet_taital">Pet adoption be part of something beautiful</h1>*/}
            {/*                <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
            {/*                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,*/}
            {/*                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis*/}
            {/*                    aute irure dolor in reprehenderit in voluptate velit </p>*/}
            {/*                <div className="banner_bt">*/}
            {/*                    <button className="dog_bt">Read More</button>*/}
            {/*                </div>*/}
            {/*                <div className="box_3">*/}
            {/*                    <h1 className="numbar">03</h1>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-sm-4">*/}
            {/*                <div className="dog_img"><img src="images/dog-img.png" style={{maxWidth: '100%'}}/></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default Home;