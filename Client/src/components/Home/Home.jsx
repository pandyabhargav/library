import React, { useEffect, useState } from "react";
import { Card, Container, Nav, Row, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAsync } from "../../services/Action/bookAction";

const Home = () => {

    const { admins } = useSelector(state => state.bookReducer);

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");

    const [filter, setFilter] = useState("All Books");

    useEffect(() => {
        dispatch(getAsync());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (eventKey) => {
        setFilter(eventKey);
    };

    const filteredBooks = admins.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All Books" || book.category === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <>
            <div className="bg-lights bg-2 py-5">
                <Container>
                    <Row>
                        <div className="col-12 mb-4">
                            <h2>Book Market</h2>
                        </div>
                        <div className="col-12 d-flex mb-5">
                            <Nav variant="pills" activeKey={filter} onSelect={handleFilterChange} className="mb-4 col-6">
                                <Nav.Item>
                                    <Nav.Link eventKey="All Books">All Books</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Education">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Horror">Horror</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Cartoon">Cartoon</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="History">History</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <InputGroup className="w-50 col-6">
                                <FormControl placeholder="Search for books..." value={searchTerm} onChange={handleSearchChange} />
                            </InputGroup>
                        </div>
                        <div className="col-12 d-flex flex-wrap">
                            {filteredBooks.length > 0 ? (
                                filteredBooks.map((el) => (
                                    <div className="col-3 mb-4" key={el.id}>
                                        <Card className="mx-3 card">
                                            <Card.Img className="card-img" variant="top" src={el.url} />
                                            <Card.Body className="text-center">
                                                <Card.Title className="card-title">{el.title}</Card.Title>
                                                <Card.Text className="card-text mb-2">{el.category}</Card.Text>
                                                <Card.Text className="card-text">{el.author}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <h3 className="text-center text-danger">No Books Found...</h3>
                                </div>
                            )}
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
