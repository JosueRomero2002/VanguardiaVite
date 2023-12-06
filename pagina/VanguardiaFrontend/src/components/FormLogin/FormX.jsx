import React, { useState, useEffect } from "react";
import { Form, Col, Row, Image } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MYBUTTON from "../Button/Button.js";

import "./LoginBox.css";
import "./styles.css";

function LOGIN() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Row>
      <Col>
        <div className="login-box">
          <link
            href="https://fonts.googleapis.com/css?family=Pacifico"
            rel="stylesheet"
          />
          <div className="textpacific">Login</div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <button class="myButton" type="submit">
              Login
            </button>

            <button class="myButton">Register</button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default LOGIN;

/*

<div className="textpacific">Login</div>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <MYBUTTON name="Hola" />
        </Col>
      </Row>
*/
