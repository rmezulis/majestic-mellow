import Link from '../Link';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";

const Header = ({className}) => {
    if (!className) {
        className = "header_section container-fluid"
    }

    return (
        <div className={className}>
            <Navbar className="vh-10">
                <div className="col-md-4">
                    <NavbarBrand className="navbar-brand" href="">LV* Majestic Mellow</NavbarBrand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-md-8">
                    <Collapse isOpen={true} navbar>
                        <Nav className="mr-auto">
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