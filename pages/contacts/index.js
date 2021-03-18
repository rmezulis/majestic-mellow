import React, {useState} from "react";
import {Jumbotron} from "reactstrap";
import NextHead from "next/head";
import Header from "../../components/Layout/Header";
import Form from "../../page-components/contacts/Form";

const Contacts = () => {

    return (
        <div>
            <NextHead>
                <title>Contacts - Majestic Mellow</title>
            </NextHead>
            <Header/>

            <div className="container py-4">
                <Jumbotron>
                    <h1>Contacts</h1>
                    <strong>Email:</strong> evita_sproge@inbox.lv<br/>
                    <strong>Telephone:</strong> +37129417724
                </Jumbotron>
                <Form/>

            </div>
        </div>
    );
}

export default Contacts;