import React, {useState} from "react";
import classNames from 'classnames';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {FormattedMessage} from "react-intl";
import Link from "next/link";
import CustomLink from '../Link';
import useViewport from "../Viewport/useViewport";
import menuMessages from "../../messages/defined-messages/menu";
import {useRouter} from "next/router";
import Image from "next/image";

const Header = () => {
    const router = useRouter();
    const mobile = 990 >= useViewport().width;
    const [open, setOpen] = useState(!mobile)
    const home = router.pathname === '/';
    const close = () => {
        if (mobile) {
            setOpen(false)
        }
    };
    // const locale = router.locale === 'en' ? 'lv' : "en";
    // const image = router.locale === 'en' ? '/flags/Latvia.png' : '/flags/UK.png'

    return (
        <div className={classNames({'p-0': mobile && open, 'container-fluid header_section vh-10': !home})}>
            <Navbar className={classNames('p-0', {'mobile-header': mobile && open})}>
                {!home && <div className="col-lg-3">
                    <NavbarBrand className="navbar-brand" href="/">
                        <div className="site-logo-mini">
                            <Image layout="fill" objectFit="contain" src="/images/logo.png" quality="100"/>
                        </div>
                    </NavbarBrand>
                    {mobile && <NavbarToggler className={classNames("container-hamburger float-right", {change: open})}
                                              onClick={() => setOpen(!open)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </NavbarToggler>}
                </div>}
                {home && <div className="col-lg-12 site-logo">
                    <Image layout="fill" objectFit="contain" src="/images/logo.png"/>
                </div>}
                <div className={classNames({'col-lg-12 home-header': home, 'col-lg-9': !home})}>
                    <Collapse isOpen={open} navbar>
                        <Nav className={classNames("mr-auto navbar-items", {"container-fluid my-4 mx-5 p-0": home})} justified={home}>
                            <NavItem>
                                <CustomLink href="/">
                                    <a className="menu-item" onClick={close}><FormattedMessage {...menuMessages.home}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/about-us">
                                    <a className="menu-item"
                                       onClick={close}><FormattedMessage {...menuMessages.aboutUs}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/breed">
                                    <a className="menu-item" onClick={close}><FormattedMessage {...menuMessages.breed}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/our-cats">
                                    <a className="menu-item"
                                       onClick={close}><FormattedMessage {...menuMessages.ourCats}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/kittens">
                                    <a className="menu-item"
                                       onClick={close}><FormattedMessage {...menuMessages.kittens}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/legend">
                                    <a className="menu-item"
                                       onClick={close}><FormattedMessage {...menuMessages.legend}/></a>
                                </CustomLink>
                            </NavItem>
                            <NavItem>
                                <CustomLink href="/contacts">
                                    <a className="menu-item"
                                       onClick={close}><FormattedMessage {...menuMessages.contacts}/></a>
                                </CustomLink>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <Link href={router.pathname} locale={locale}>*/}
                            {/*        <a onClick={close}><Image width="35px" height="35px" src={image}/></a>*/}
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