import Link from "next/link";
import {Col, Row} from "reactstrap";

const AboutCats = () => {
    return (
        <div className="about_section">
            <div>
                <div className="container">
                    <h1>
                        <strong>
                            <span style={{color: '#343e85'}}>About Us</span>
                        </strong>
                    </h1>
                    <Row className="ml-auto text-right">
                        <Col>
                            <p className="magna_text">Sacred Birman cat…</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="magna_text">a cat of mystery and legend…</p>
                        </Col>
                    </Row>
                    <div className="about_bt">
                        <Link href="/about-us">
                            <button className="more_bt">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCats;