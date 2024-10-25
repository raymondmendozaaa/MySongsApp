import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LikedSongs from './LikedSongs.js';
import Spotify from './Spotify.js';
import './App.css'

function App() {
  
  return (
    <><><Navbar
          expand="lg"
          className="navbar border-body navbar-expand-md"
          bg="dark"
          data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><h3>MySongs</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <LikedSongs /></>
    <Spotify /></>
  )  
}

export default App;