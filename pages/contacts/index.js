import React, {useState} from "react";
import {Jumbotron} from "reactstrap";
import NextHead from "next/head";
import Header from "../../components/Layout/Header";
import Form from "../../page-components/contacts/Form";
import menuMessages from "../../messages/defined-messages/menu";
import {FormattedMessage} from "react-intl";

const Contacts = () => {

    return (
        <div>
            <NextHead>
                <title>Contacts - Majestic Mellow</title>
            </NextHead>

            <div className="container py-4">
                <Jumbotron>
                    <h1><FormattedMessage {...menuMessages.contacts}/></h1>
                    <strong>Email:</strong> evita_sproge@inbox.lv<br/>
                    <strong>Telephone:</strong> +37129417724
                </Jumbotron>
                <Form/>

            </div>
        </div>
    );
}

export default Contacts;