import React from "react";
import Header from "../../components/Layout/Header";
import {Form, FormGroup, Input, Jumbotron, Label} from "reactstrap";
import NextHead from "next/head";

const Contacts = () => {
    return (
        <div>
            <NextHead>
                <title>Contacts - Majestic Mellow</title>
            </NextHead>
            <Header/>

            <div className="container py-4">
                <Jumbotron>

                </Jumbotron>
                <Jumbotron>
                    <h1>Send us a message!</h1>
                    <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" name="name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" name="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Telephone</Label>
                            <Input type="telephone" name="telephone"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Message</Label>
                            <Input type="textarea" name="message"/>
                        </FormGroup>
                    </Form>
                </Jumbotron>

            </div>
        </div>
    );
}

export default Contacts;