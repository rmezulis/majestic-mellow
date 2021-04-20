import Link from "next/link";
import Image from 'next/image'
import menuMessages from "../../messages/defined-messages/menu";
import {FormattedMessage} from "react-intl";
import React from "react";

const Footer = () => {
    return (
        <div className="section_footer">
            <div className="container">
                <div className="footer_section_2">
                    <div className="row justify-content-around">
                        <Link href="/">
                            <a><FormattedMessage {...menuMessages.home}/></a>
                        </Link>
                        <Link href="/about-us">
                            <a><FormattedMessage {...menuMessages.aboutUs}/></a>
                        </Link>
                        <Link href="/breed">
                            <a><FormattedMessage {...menuMessages.breed}/></a>
                        </Link>
                        <Link href="/our-cats">
                            <a><FormattedMessage {...menuMessages.ourCats}/></a>
                        </Link>
                        <Link href="/kittens">
                            <a><FormattedMessage {...menuMessages.kittens}/></a>
                        </Link>
                        <Link href="/legend">
                            <a><FormattedMessage {...menuMessages.legend}/></a>
                        </Link>
                        <Link href="/contacts">
                            <a><FormattedMessage {...menuMessages.contacts}/></a>
                        </Link>
                    </div>
                </div>
                <div className="social-icon">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="icons text-center">
                                <a href="https://www.instagram.com/lv_majestic_mellow/" target="_blank">
                                    <Image width="20px" height="20px" src="/images/instagram.png"/>
                                </a>
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