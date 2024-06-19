import { Button, Card, Container, Row } from "react-bootstrap"
import { deletAsync, getAsync, singleAsync } from "../../services/Action/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Collection = () => {

    const { admins } = useSelector(state => state.bookReducer);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleEdit = (id) => {
        dispatch(singleAsync(id));
        navigate('/AddBook');
    };

    const handleDelete = (id) => {
        dispatch(deletAsync(id));
    };

    useEffect(() => {
        dispatch(getAsync());
    }, [])

    return (
        <>
            <div className="bg-lights  bg py-5">
                <Container>
                    <Row>
                        <div className="col-12 mb-4">
                            <h2>
                                Your Books
                            </h2>
                        </div>
                        <div className="col-12 d-flex flex-wrap mb-3">
                            {admins.length > 0 ? (
                                admins.map((el) => (
                                    <div className="col-3 mb-4">
                                        <Card className="mx-3 card">
                                            <Card.Img className="card-img" variant="top" src={el.url} />
                                            <Card.Body className="text-center">
                                                <Card.Title className="card-title">{el.title}</Card.Title>
                                                <Card.Text className="card-text">{el.author}</Card.Text>
                                            </Card.Body>
                                            <div className="d-flex flex-wrap">
                                                <Button className="w-50 bt border-secondary" onClick={() => handleEdit(el.id)}>
                                                <i class="fa-solid fa-pen-to-square"></i>
                                                </Button>
                                                <Button className="w-50 bt-1 border-secondary" onClick={() => { handleDelete(el.id) }}>
                                                <i class="fa-solid fa-trash"></i>
                                                </Button>
                                            </div>
                                        </Card>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <h3 className="text-center text-danger">No Books Found...</h3>
                                </div>
                            )}
                        </div>
                    </Row>
                </Container>
            </div >
        </>
    )

}

export default Collection