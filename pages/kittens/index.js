import Header from "../../components/Layout/Header";
import NextHead from "next/head";
import React from "react";
import {Jumbotron} from "reactstrap";

const Kittens = () => {
    return (
        <div className="container py-4">
            <NextHead>
                <title>Kittens - Majestic Mellow</title>
            </NextHead>
            <Jumbotron className="bg-color">
                <div>
                    <p className="cat-text">
                        We are small family cattery. There may be only few kittens avaliable per year.
                    </p>
                    <p className="cat-text">
                        All kittens will have FIFe pedigree, Eourpian Union veterianry passport, identification
                        microchip,
                        signed contract.
                    </p>
                    <p className="cat-text">
                        Kittens to new homes could leave at the age of 14-16 weeks old. Fully vacinated against virus
                        diseases and rabies, checked by veterinarian, skillful to eat by themselves and use the litter
                        box.
                        Kittens are socially adapted, as they grow in family conditions and receive lot of love and
                        attention each day.
                    </p>


                    <p className="cat-text">
                        KITTENS comming to this world soon!!!
                    </p>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Kittens;