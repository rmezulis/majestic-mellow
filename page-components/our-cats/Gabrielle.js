import React, {useState} from "react";
import {Carousel, CarouselControl, CarouselItem, Col, Jumbotron, Row} from "reactstrap";
import Image from "next/image";

const items = [
    '/images/Gabriela/1.jpg',
    '/images/Gabriela/2.jpg',
    '/images/Gabriela/3.jpg',
    '/images/Gabriela/4.jpg',
    // '/images/Gabriela/5.JPG',
    '/images/Gabriela/6.JPG',
    '/images/Gabriela/7.JPG',
    '/images/Gabriela/8.JPG',
    '/images/Gabriela/9.JPG',
    '/images/Gabriela/10.JPG',
    '/images/Gabriela/11.JPG',
    '/images/Gabriela/12.JPG',
    '/images/Gabriela/13.JPG',
    '/images/Gabriela/14.JPG',
    '/images/Gabriela/15.JPG',
    '/images/Gabriela/16.JPG',
    '/images/Gabriela/17.JPG',
    '/images/Gabriela/18.JPG',
];

const Gabrielle = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const next = () => {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
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
                        {items.map(item => <CarouselItem key={item}>
                            <div className="cat-image" style={{background: "transparent"}}>
                                <Image layout="fill" objectFit="contain" src={item}/>
                                <div className="stamp"/>
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