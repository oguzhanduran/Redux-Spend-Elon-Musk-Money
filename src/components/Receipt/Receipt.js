import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Receipt.module.css";

function Receipt() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}></Col>

          <Col className={styles.receiptBorder}>
            <h1>Your Receipt</h1>
            <Row>
              <Col>
                <span className={styles.itemName}>Filip Flops</span>
              </Col>
              <Col>
                <span className={styles.itemAmount}>x5</span>
              </Col>
              <Col>
                <span className={styles.itemCost}>$18.8</span>
              </Col>
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>{" "}
      </Container>{" "}
    </div>
  );
}

export default Receipt;
