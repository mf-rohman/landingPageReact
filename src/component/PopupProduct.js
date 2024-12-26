import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../card.css";
import "../popupProduct.css";

function PopupProduct({ image, name, desc }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Detail
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          {/* <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={image}
              alt={name}
            />
            <Card.Body className="card-body">
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card> */}
          <img className="img-popup"
            src={image}
            alt={name}
            style={{ backgroundSize: "contain", maxHeight: "320px" }}
          />
          <p className="desc-popup">
             {desc}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupProduct;
