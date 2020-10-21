import React, { useState } from "react";

// import ReactDOM from "react-dom";
import Modal from 'react-bootstrap/Modal';
import "../App.css";
// import { Modal } from "./Modal";
import { Button } from 'react-bootstrap';

function RecommendationCard(props) {
  const { name, company, designation, message } = props.recommendatin;
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-12 col-md-4">
      <a onClick={handleShow}>
        <div className="card shadow h-100">
        <div className="card-body">
            <h4 className="cut-text card-text">{message}</h4>

            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
         
        </div>
      </a>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <div className="text-center card-body">
            <h4 className="card-text">{message}</h4>

            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default RecommendationCard;
