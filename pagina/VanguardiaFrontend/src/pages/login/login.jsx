import LOGINFORM from "../../components/FormLogin/Form.js";
import { Form, Col, Row, Image, Container } from "react-bootstrap";

import "./loginStyles.css";
function login() {
  return (
    <Container>
      <Row>
        <Col>
          <Image src="loginpic.png" fluid className="floating-image" />
        </Col>
        <Col>
          <LOGINFORM />
        </Col>
      </Row>
    </Container>
  );
}

export default login;
