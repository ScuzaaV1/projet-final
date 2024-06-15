import React, { useState } from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { handleADD } from "../redux/action";
import { useDispatch } from "react-redux";
import { ADD_CARD } from "../redux/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const AddCard = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [decription, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: title,
      imageUrl: image,
      price,
      description: decription,
      id: Math.random(),
    };
    dispatch(handleADD(newItem));
    closeModal();
    setImage("");
    setTitle("");
    setPrice("");
    setDescription("");
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="add-btn" onClick={openModal}>
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="aaa">
          <label>Title</label>
          <input
          className="inputadd"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Price</label>
          <input
          className="inputadd"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>product image</label>
          <input
          className="inputadd"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>product Description</label>
          <input
          className="inputadd"
            type="text"
            value={decription}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="btn"
            type="submit"
            onChange={(e) => AddCard(e.target.value)}
          >
            Confirm
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCard;
