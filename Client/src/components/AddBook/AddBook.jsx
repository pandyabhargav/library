import uniqid from 'uniqid';
import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap"
import { IoIosDoneAll } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAsync, updateAsync } from "../../services/Action/bookAction";

const AddBook = () => {

    const [input, setInput] = useState({
        id: '',
        url: '',
        title: '',
        author: '',
        category: ''
    });

    const { admin } = useSelector(state => state.bookReducer)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInput({ ...input, [name]: value });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (input.id) {

            dispatch(updateAsync(input))

        } else {

            let obj = { ...input }
            obj.id = uniqid();

            dispatch(addAsync(obj));

        };

        navigate('/Collection');

        setInput({
            id: '',
            url: '',
            title: '',
            author: '',
            category: ''
        });

    };

    useEffect(() => {
        setInput(admin);
    }, [admin]);

    return (
        <>
            <div className="bg-1 py-5">
                <Container>
                    <Row>
                        <div className="col-12 mb-4">
                            <h2 className='text-white'>
                                Add or Edit Books
                            </h2>
                        </div>
                        <div className="col-12 d-flex flex-wrap mb-4">
                            <div className="col-6 mb-3 bg-white p-5 rounded-3 border-secondary form">
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <Form.Group className="mb-4" >
                                        <Form.Label>Enter Image URL :-</Form.Label>
                                        <Form.Control type="text" placeholder="https://www.google.com/search?sca_esv=ca35beedbaf5db4b&sca_upv=1&rlz=1C1VDKB_en-GBIN1070IN1071&sxsr" name="url" value={input.url} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Enter Book Title :-</Form.Label>
                                        <Form.Control type="text" placeholder="Amazing Word" name="title" value={input.title} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Enter Author Name :-</Form.Label>
                                        <Form.Control type="text" placeholder="Zill Orivia" name="author" value={input.author} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Enter Category :-</Form.Label>
                                        <Form.Control type="text" placeholder="Horror" name="category" value={input.category} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit <IoIosDoneAll />
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div >
        </>
    )

}

export default AddBook