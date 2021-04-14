import Link from "next/link";
import {Col, Row} from "reactstrap";

const AboutCats = () => {
    return (
        <div className="about_section">
            <div>
                <div className="container">
                    <h1>
                        <strong>
                            <span style={{color: '#343e85'}}>About</span> Cats
                        </strong>
                    </h1>
                    <Col>
                        <Row className="float-right">
                            <p className="magna_text">Sacred Birman cat…</p>
                        </Row>
                        <Row className="float-right">
                            <p className="magna_text">a cat of mystery and legend…</p>
                        </Row>
                    </Col>
                    <div className="about_bt">
                        <Link href="/our-cats">
                            <button className="more_bt">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCats;