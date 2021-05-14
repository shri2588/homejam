import '../App.css'
import logo from '../logo.png';
import account from '../account.png'
import search from '../search.png'
import search2 from '../search2.png'
import { Navbar, Nav } from 'react-bootstrap';


function NavbarMenu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  fixed="top">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">


                        <Nav.Link><h4 className="linkText"><img src={search}/><img src={search2} id="search2"/> Search</h4></Nav.Link>

                        <Nav.Link><h4 className="linkText">Help </h4></Nav.Link>


                        <Nav.Link><h4 className="linkText">Account</h4></Nav.Link>
                        <Nav.Link><h4 className="linkText"><img src={account}/></h4></Nav.Link>



                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarMenu;