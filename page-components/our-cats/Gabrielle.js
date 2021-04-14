import React, {useState} from "react";
import {Carousel, CarouselControl, CarouselItem, Col, Jumbotron, Row} from "reactstrap";
import Image from "next/image";

const items = [
    {
        src: '/images/Gabriela/5e815023-6ae8-4112-b1b1-2ae3d1bf4a81.JPG'
    },
    {
        src: '/images/Gabriela/7a4487c2-15af-4a5a-a779-297e99c38e7e.JPG'
    },
    {
        src: '/images/Gabriela/9bc4e94a-c5bc-43dd-a099-233ca57efbb0.JPG'
    },
    {
        src: '/images/Gabriela/84e3a5a4-de7f-4cc4-8211-96887f2b8987.JPG'
    },
    {
        src: '/images/Gabriela/664fb7f3-7b54-4598-9e51-cdf88d5d91c4.JPG'
    },
    {
        src: '/images/Gabriela/877b7e97-cf26-43d8-aa8d-1124bac1a672.JPG'
    },
    {
        src: '/images/Gabriela/928a7b09-64d3-457b-ac7c-7a27b35bdef2.JPG'
    },
    {
        src: '/images/Gabriela/5587935a-75cf-4877-af99-9633afed71b9.JPG'
    },
    {
        src: '/images/Gabriela/54578653-4446-4160-bfea-ed6e59e5417b.JPG'
    },
    {
        src: '/images/Gabriela/b426fc9e-b57a-4284-a6d3-ec0c96a35d81.JPG'
    },
    {
        src: '/images/Gabriela/d44048d0-0980-48bf-9ba9-1763a1c6decf.JPG'
    },
    {
        src: '/images/Gabriela/e68b75e7-60b0-4e8e-beaf-4627ec308d31.JPG'
    },
    {
        src: '/images/Gabriela/eb3fb1cf-39ef-46ef-a5b1-52c4c4ddbf40.JPG'
    },
    {
        src: '/images/Gabriela/f2ae09db-c137-4e6f-af7f-c3ea4e39dedf.JPG'
    },
];

const Gabrielle = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    return (
        <Jumbotron className="bg-color">
            <h1>Gabrielle</h1>
            <Row>
                <Col sm="12" lg="6" className="cat-text my-4">
                    <strong>IT* Sweety Yowl Gabrielle</strong>
                    <br/>
                    <strong>Gender:</strong> Female
                    <br/>
                    <strong>Color:</strong> SBIn Seal point
                    <br/>
                    <strong>Born:</strong> 25.05.2018.
                    <br/>
                    <strong>Father:</strong> SK*Simon Medicat SBIc
                    <br/>
                    <strong>Mother:</strong> IT* Sweety Yowl Freya SBIn
                    <br/>
                    <strong>Breeder:</strong> Milena Verdoliva IT*Sweety Yowl
                    <br/>
                    <strong>Owner:</strong> Evita Sproģe
                </Col>
                <Col sm="12" lg="6" className="my-4">
                    <Carousel next={next} previous={previous} activeIndex={activeIndex} enableTouch={true}>
                        {items.map(item => <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={item.src}
                        >
                            <div className="cat-image" style={{background: "transparent"}}>
                                <Image layout="fill" objectFit="contain" src={item.src}/>
                            </div>
                        </CarouselItem>)}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col className="cat-text">
                    Our treasure Birman cat mademoiselle Gabrielle is named
                    after one of the most culturally influent women of her time,
                    a prominent figure of luxury fashion, a French intelligence,
                    an avant-garde woman, Gabrielle’’ Coco” Chanel. As her
                    favorite color palette was: shades of beige, black and white,
                    what perfectly is presented in SBIn seal point Birman cats.
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Gabrielle;