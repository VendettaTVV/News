import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

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
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/News/contact" className="nav-link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default HeaderComponent;