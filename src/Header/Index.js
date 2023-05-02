import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderComponent() {
    return (
        <Navbar bg="light" className="mb-3">
            <Container>
                <Link to="/News" className="navbar-brand">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    News
                </Link >
                <Navbar.Collapse id="basic-navbar-nav" className="mt-1 ">
                    <NavDropdown title="Contacs" id="basic-nav-dropdown" className="">
                        <Link to="/News/contact" className="nav-link te text-center">My contact</Link>
                        <NavDropdown.Divider />
                        <Link to="/News/school" className="nav-link text-center">School Contacts</Link>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default HeaderComponent;