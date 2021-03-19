import React, {useState} from "react";
import classNames from 'classnames';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {FormattedMessage} from "react-intl";
import Link from "next/router";
import CustomLink from '../Link';
import useViewport from "../Viewport/useViewport";
import menuMessages from "../../messages/defined-messages/menu";
import {useRouter} from "next/router";
import Image from "next/image";

const Header = ({className}) => {
    const router = useRouter();
    const mobile = 910 >= useViewport().width;
    const [open, setOpen] = useState(!mobile)
    if (!className) {
        className = "header_section container-fluid"
    }
    const locale = router.locale === 'en' ? 'lv' : "en";
    console.log(router.pathname, locale)
    return (
        <div className={classNames(className, {'p-0': mobile && open})}>
            <Navbar className={classNames({'mobile-header': mobile && open})}>
                <div className="col-lg-4">
                    <NavbarBrand className="navbar-brand" href="">LV* Majestic Mellow</NavbarBrand>
                    {mobile && <NavbarToggler className={classNames("container-hamburger float-right", {change: open})}
                                              onClick={() => setOpen(!open)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </NavbarToggler>}
                </div>
                <div className="col-lg-8">
                    <Collapse isOpen={open} navbar>
                        <Nav className="mr-auto navbar-items">
                            <NavItem>
                                <CustomLink href="/">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.home}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/breed">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.breed}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/our-cats">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.ourCats}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/kittens">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.kittens}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/links">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.links}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/about-us">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.aboutUs}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/contacts">
                                    <a className="menu-item"><FormattedMessage {...menuMessages.contacts}/></a>
                                </CustomLink>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <Link href={router.pathname}>*/}
                            {/*        <a>wtf</a>*/}
                            {/*    </Link>*/}
                            {/*</NavItem>*/}
                        </Nav>
                    </Collapse>
                </div>

            </Navbar>
        </div>
    );
}

export default Header;