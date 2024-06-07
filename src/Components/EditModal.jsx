import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/action';
import './modal.css'; // Import the CSS file

const EditModal = ({ show, handleClose, item }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.Description);
    const [imageUrl, setImageUrl] = useState(item.imageUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editItem({ ...item, name, description, imageUrl }));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">Edit Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label className="form-label">Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label className="form-label">Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-input"
                        />
                    </Form.Group>
                    <Form.Group controlId="formImageUrl">
                        <Form.Label className="form-label">Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="form-input"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="form-button">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditModal;
