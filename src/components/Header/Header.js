import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col>
            <div className={styles.picture}>
              {" "}
              <img
                src="https://i.insider.com/62b4c1229f5e550019aa6331?width=1136&format=jpeg"
                alt=""
              />
            </div>
            <h2 className={styles.title}>Spend Elon Musk' Money</h2>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
