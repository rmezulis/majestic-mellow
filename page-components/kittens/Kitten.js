import React, {useState} from "react";
import {Carousel, CarouselControl, CarouselItem, Col, Row} from "reactstrap";
import Image from "next/image";

const Kitten = ({gender, color, images}) =>{
    const [activeIndex, setActiveIndex] = useState(0);
    const next = () => {
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    return (
        <Row>
            <Col sm="12" lg="6" className="cat-text my-4">
                <strong>Kitten</strong>
                <br/>
                <strong>Gender:</strong> {gender}
                <br/>
                <strong>Color:</strong> {color}
                <br/>
                <strong>Born:</strong> 14.04.2021.
                <br/>
                <strong>Father:</strong> IT* Eric Clapton Pinetadeisongi
                <br/>
                <strong>Mother:</strong> IT* Sweety Yowl Gabrielle
                <br/>
                <strong>Breeder:</strong> Evita Sproģe
            </Col>
            <Col sm="12" lg="6" className="my-4">
                <Carousel next={next} previous={previous} activeIndex={activeIndex} enableTouch={true}>
                    {images.map(item => <CarouselItem key={item}>
                        <div className="cat-image" style={{background: "transparent"}}>
                            <Image layout="fill" objectFit="contain" src={item}/>
                        </div>
                    </CarouselItem>)}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                </Carousel>
            </Col>
        </Row>
    );
}

export default Kitten;