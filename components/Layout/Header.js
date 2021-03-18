import React, {useState} from "react";
import classNames from 'classnames';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import Link from '../Link';
import useViewport from "../Viewport/useViewport";

const Header = ({className}) => {
    const mobile = 910 >= useViewport().width;
    const [open, setOpen] = useState(!mobile)
    if (!className) {
        className = "header_section container-fluid"
    }

    return (
        <div className={classNames(className, {'p-0': mobile && open})}>
            <Navbar className={classNames({'mobile-header': mobile && open})}>
                <div className="col-lg-4">
                    <NavbarBrand className="navbar-brand" href="">LV* Majestic Mellow</NavbarBrand>
                    {mobile && <NavbarToggler className={classNames("container-hamburger float-right", {change: open})} onClick={() => setOpen(!open)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                    </NavbarToggler>}
                </div>
                <div className="col-lg-8">
                    <Collapse isOpen={open} navbar>
                        <Nav className="mr-auto navbar-items">
                            <NavItem>
                                <Link href="/">
                                    <a className="menu-item">Home</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/breed">
                                    <a className="menu-item">The Breed</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/our-cats">
                                    <a className="menu-item">Our Cats</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/kittens">
                                    <a className="menu-item">Kittens</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/links">
                                    <a className="menu-item">Links</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/about-us">
                                    <a className="menu-item">About us</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contacts">
                                    <a className="menu-item">Contacts</a>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>

            </Navbar>
        </div>
    );
}

export default Header;