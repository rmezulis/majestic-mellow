import React, {useState} from "react";
import emailjs from "emailjs-com";
import {Button, Form, FormGroup, Input, Jumbotron, Label} from "reactstrap";

const ContactForm = () => {
    const [values, setValues] = useState({name: '', email: '', telephone: '', message: ''});
    const [success, setSuccess] = useState(false);
    const updateValues = e => {
        const name = e.target.name;
        setValues({
            ...values,
            [name]: e.target.value
        })
    }
    const template = 'template_gzzznug';
    const onSubmit = () => {
        emailjs.send('service_g5etdx5',
            template, values, 'user_w6SFPzovvZOUDoyPwnJcc'
        ).then(res => {
            setSuccess(true);
            console.log('Email successfully sent!')
        })
            .catch(err => console.log('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    if (success) {
        return (
            <Jumbotron>
                <p>Your message has been sent! We will get back to you as soon as possible!</p>
            </Jumbotron>
        )
    }
    return (
        <Jumbotron>
            <h1>Send us a message!</h1>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="name" onChange={updateValues}/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" onChange={updateValues}/>
                </FormGroup>
                <FormGroup>
                    <Label>Telephone</Label>
                    <Input type="telephone" name="telephone" onChange={updateValues}/>
                </FormGroup>
                <FormGroup>
                    <Label>Message</Label>
                    <Input type="textarea" name="message" onChange={updateValues}/>
                </FormGroup>
                <Button type="submit" onClick={onSubmit}>Send</Button>
            </Form>
        </Jumbotron>
    );
}

export default ContactForm;