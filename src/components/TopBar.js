import '../css/TopBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.jpg'
import { faHouse, faAddressCard, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TopBar() {
  return (
    <div className="TopBar">
        <Navbar id="navbar" bg="light" expand="lg">
            <div className="container-fluid">
                <Navbar.Brand href="index.html">
                    <div className="Logo">
                        <img src={logo} width="50px"/> &nbsp;MindChord
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/"><div className="navlink"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;Home</div></Nav.Link>
                    <Nav.Link href="/aboutus"><div className="navlink"><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;About Us</div></Nav.Link>
                    <Nav.Link href="/contacts"><div className="navlink"><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;Contacts</div></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </div>
  );
}

export default TopBar;