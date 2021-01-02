import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import "../App.css";
const LandingPage = () => {
  return (
    <div className="container-fluid">
      <Jumbotron className="text-center">
        <h1>Seller</h1>
      </Jumbotron>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link>Men</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Women</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Kids</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <br />
      <br />
      <h3>New Arrivals</h3> <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a81ac313-f6a3-440e-ba5a-d4ba84eee215/air-jordan-7-retro-gc-shoe-8M6KSs.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 7 Retro GC</Card.Title>
                <b>PKR 30,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/aed9c0fe-2bea-4c88-be7b-50b508c1fe39/air-jordan-1-low-se-shoe-XvqDsj.jpg"
              />
              <Card.Body>
                <Card.Title>Air Jordan 1 Low SE Shoe</Card.Title>
                <b>PKR 27,500</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-1f0ea2ec-58b9-4f59-8389-29f2aa3b88d7/air-jordan-4-retro-se-shoe-1sJgGj.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 4</Card.Title>
                <b>PKR 50,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ab2bd32d-0ab7-4977-9033-8bca5bcfa1cd/air-jordan-4-retro-wntr-older-shoe-0Zjb7h.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 4</Card.Title>
                <b>PKR 50,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/c3/2c/62/c32c62098ef2cc5cf6e4cad1b532c04b.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 4</Card.Title>
                <b>PKR 50,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/f4/9b/47/f49b47ffc008f4c8c0cb181764e646ad.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 4</Card.Title>
                <b>PKR 50,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <small>
              <b className="footer">@Copyright 2020</b>
            </small>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LandingPage;
