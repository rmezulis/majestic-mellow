import React from "react";
import NextHead from "next/head";
import {Col, Jumbotron, Row} from "reactstrap";
import LitterA from "../../page-components/kittens/LitterA";

const Kittens = () => {
    return (
        <div className="container py-4">
            <NextHead>
                <title>Kittens - Majestic Mellow</title>
            </NextHead>
            <Jumbotron className="bg-color">
                <h1>Kittens</h1>
                <Row>
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
                </Row>
                <Row>
                    <Col sm="12" lg="6" xl="6">
                        <h4>Mother</h4>
                        <img className="kittens-parents-image" src="/images/Gabriela/19.jpg"/>
                        <p className="cat-text">IT* Sweety Yowl Gabrielle</p>
                        <p className="cat-text">SBIn Seal point</p>
                    </Col>
                    <Col sm="12" lg="6" xl="6">
                        <h4>Father</h4>
                        <div>
                        <img className="kittens-parents-image" src="/images/father.png"/>
                        </div>
                            <p className="cat-text">IT* Eric Clapton Pinetadeisongi</p>
                        <p className="cat-text">SBIn Seal point</p>
                    </Col>
                </Row>
                <Row>

                    <p className="cat-text"> Both parents are with excelent breed standards.
                        Coming from prestigious European lines.</p>
                </Row>
                <LitterA/>
            </Jumbotron>
        </div>
    );
}

export default Kittens;