import Header from "../../components/Layout/Header";
import NextHead from "next/head";
import React from "react";
import {Jumbotron} from "reactstrap";
import {FaPaw} from "react-icons/fa";

const Breed = () => {
    return (
        <div className="container py-4">
            <NextHead>
                <title>The Breed - Majestic Mellow</title>
            </NextHead>
            <div>
                <Jumbotron className="bg-color">
                    <ul>
                        <li className="breed-text">
                            <FaPaw/>The Birman breed is semi-longhaired breed, FIFe Standart Category II.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>Birmans give the impression of a robust cat. They are medium in size.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The average weight of Birman females is about 3-4kg, average males weigh about
                            4-6kg.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>Legs are short and strong, paws are rounded.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The Birman's head is wider, not too triangular, with a rounded forehead and a firm
                            chin.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The nose is of medium length and has a "Roman profile".
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The eyes are slightly oval and their color must be deep blue.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>Ears are rather small with rounded tips, with medium width between them.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The tail is of medium length, forming a plume and ideally reaches between the
                            shoulder
                            blades.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The Birman's coat is silky and light, with points that are in good contrast to the
                            body
                            color, darker face, ears, legs, tail and also genitals in males. The coat is white to beige
                            toning color. Birman cats with pleasure will enjoy weekly grooming procedure, and even
                            remember where their favorite brush is kept.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The Birman’s charming masks come in a rainbow of colors: seal, blue, chocolate,
                            lilac, red ,
                            cream and their respective tabby and torty color variants.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>The special feature of Birman cats are their white feet, called "gloves". The gloves
                            on the
                            back paws, called "gauntlets", finish with in inverted "V".
                        </li>
                        <li className="breed-text">
                            <FaPaw/>Birman cats are known as especially loving, gentle, affectionate and majestic breed.
                            Birman
                            cats are sociable, smart and friendly cats, curious and people-oriented, but not too noisy.
                            Birmans make perfect family pets. They will also happily share their lives with other breeds
                            of cats and dogs. Birmans take an intelligent interest in everything their human families
                            do, they will often follow you from room to room and want to be involved in what you are
                            doing.
                        </li>
                        <li className="breed-text">
                            <FaPaw/>Birman cats are Fascinating!
                        </li>
                    </ul>
                    <p className="text-center breed-text">
                        They are like<br/>
                        “Creme de la creme”
                    </p>
                </Jumbotron>
            </div>
        </div>
    );
}
export default Breed;