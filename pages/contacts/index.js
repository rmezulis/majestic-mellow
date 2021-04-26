import React, {useState} from "react";
import {Jumbotron} from "reactstrap";
import NextHead from "next/head";
import Form from "../../page-components/contacts/Form";
import menuMessages from "../../messages/defined-messages/menu";
import {FormattedMessage} from "react-intl";

const Contacts = () => {

    return (
        <div>
            <NextHead>
                <title>Contacts - Majestic Mellow</title>
                <meta name="title" content="Contact us - Sacred Birman Cattery - Majestic Mellow"/>
                <meta name="description" content="Send us a message to enquire about our available kittens!"/>
            </NextHead>

            <div className="container py-4">
                <Jumbotron className="bg-color">
                    <div className="cat-text">
                        <h1><FormattedMessage {...menuMessages.contacts}/></h1>
                        <strong>Email:</strong> info@majestic-mellow.lv<br/>
                        <strong>Telephone:</strong> +37129417724
                    </div>
                </Jumbotron>
                <Form/>

            </div>
        </div>
    );
}

export default Contacts;