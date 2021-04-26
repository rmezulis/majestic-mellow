import React from "react";
import NextHead from "next/head";
import {Jumbotron} from "reactstrap";

const Links = () => {
    return (
        <div className="container py-4">
            <NextHead>
                <title>Legend - Majestic Mellow</title>
                <meta name="title" content="Legend - Sacred Birman Cattery - Majestic Mellow"/>
                <meta name="description" content="Many centuries ago in a valley surrounded by majestic mountains, in the country of Burma in Asia,
                    the temple of Lao-Tsun was guarded by 100 white cats with
                    long silken hair."/>
            </NextHead>
            <Jumbotron className="bg-color">
                <h1>Legend</h1>
                <p className="cat-text">
                    Many centuries ago in a valley surrounded by majestic mountains, in the country of Burma in Asia,
                    the temple of Lao-Tsun was guarded by 100 white cats with
                    long silken hair. The temple housed a beautiful golden goddess with alluring sapphire blue eyes.
                    Mun-Ha, one of the priests of the temple, often knelt in meditation before the statue of the goddess
                    with the white temple cat named Sinh sitting beside him. One night raiders attacked the temple and
                    Mun-Ha was killed. As Mun-Ha was dying, Sinh put his feet on his fallen master and faced the golden
                    goddess. His body immediately turned from white to gold, and his eyes turned sapphire blue, just
                    like those of the goddess. His legs turned brown, but where his feet touched his master, they
                    remained white as a symbol of purity. Next morning, all the other cats in and around the temple also
                    changed in this way. Sinh stayed with his master for the next seven days when he too died, carrying
                    the soul of his beloved master Mun-Ha to Paradise.
                </p>
                <p className="cat-text">
                    When the temple was raided again in 1919, Auguste Pavie and Major Gordon Russell helped the temple
                    priests. As a gesture of gratitude, the priests gave these men a breeding pair of Birmans.
                    Unfortunately, the male cat Maldapour died on the ocean voyage to France, but the female, Sita,
                    arrived in France pregnant with Maldapour’s offspring, and became the European foundation of the
                    Birman breed.
                </p>
                <p className="cat-text">
                    The Birman breed flourished, and in 1925 the Birmans was formally recognized in France FIFe. But by
                    the end of the Second World War, hardly any Birmans were left. It took many years to reestablish the
                    Birman breed and achieve it’s former glory. This was done thanks to devoted breeders and by the
                    1960’s; Birmans were once again plentiful and explored around the world. Today Birman is one of the
                    top 10 popular cat breeds.
                </p>
            </Jumbotron>
        </div>
    );
}

export default Links;