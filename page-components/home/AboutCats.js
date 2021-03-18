import Link from "next/link";

const AboutCats = () => {
    return (
        <div className="about_section">
            <div className="about_text">
                <div className="container">
                    <h1 className="about_taital_1"><strong><span
                        style={{color: '#343e85'}}>About</span> Cats</strong></h1>
                    <p className="magna_text">One or two sentences about our cats (maybe pictures?) with link to read more</p>
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