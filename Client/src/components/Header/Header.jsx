import { Container, Form, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="bg-lights header">
            <Container>
                <Row className="py-3 align-items-center">
                    <Navbar.Brand href="#" className="col-3">
                        <img src={"https://images.squarespace-cdn.com/content/v1/566862e440667a438192acb2/118e5dc5-1c41-41e6-973a-99cf3e23e2c1/new-pbcla-logo-long-removebg.png"} className="d-inline-block w-50" alt="logo" />
                    </Navbar.Brand>
                    <Nav className="col-9 justify-content-end">
                        <Nav.Item>
                            <Link to="/" className="me-3 nav-icon">Library</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/Collection" className="me-3 nav-icon">Books</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/AddBook" className="nav-icon">AddBook</Link>
                        </Nav.Item>
                    </Nav>
                </Row>
            </Container>
        </div>
    )

}

export default Header