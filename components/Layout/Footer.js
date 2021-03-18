import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="section_footer">
            <div className="container">
                <div className="footer_section_2">
                    <div className="row justify-content-around">
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                                <Link href="/breed">
                                    <a>The Breed</a>
                                </Link>
                                <Link href="/our-cats">
                                    <a>Our Cats</a>
                                </Link>
                                <Link href="/kittens">
                                    <a>Kittens</a>
                                </Link>
                                <Link href="/links">
                                    <a>Links</a>
                                </Link>
                                <Link href="/about-us">
                                    <a>About us</a>
                                </Link>
                                <Link href="/contacts">
                                    <a>Contacts</a>
                                </Link>
                    </div>
                </div>
                <div className="social-icon">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="icons">
                                <ul>
                                    <li><a href="https://www.instagram.com/gabrielle_secred_birman/" target="_blank"><Image width="20px" height="20px" src="/images/instagram.png"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">2021 All Rights Reserved.</div>
            </div>
        </div>
    );
}

export default Footer;