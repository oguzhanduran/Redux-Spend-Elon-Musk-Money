import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./Table.module.css";

function Table() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col className={styles.budget}>$100,000,000,000</Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col xl={1}></Col>
          <Col>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src="http://benimmenum.online/upload_files/GYAQM7GJISLJRKNXYZYJ.png"
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Big Mac</Card.Title>
                <Card.Text className={styles.itemCost}>$2</Card.Text>
                <button disabled="disabled" className={styles.sellBtn}>
                  Sell
                </button>
                <input type="number" className={styles.itemInput} />
                <button className={styles.itemBuy}>Buy</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src="http://benimmenum.online/upload_files/GYAQM7GJISLJRKNXYZYJ.png"
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Big Mac</Card.Title>
                <Card.Text className={styles.itemCost}>$2</Card.Text>
                <button disabled="disabled" className={styles.sellBtn}>
                  Sell
                </button>
                <input type="number" className={styles.itemInput} />
                <button className={styles.itemBuy}>Buy</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src="https://neal.fun/spend/images/cruise-ship.jpg"
              />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Big Mac</Card.Title>
                <Card.Text className={styles.itemCost}>$2</Card.Text>
                <button disabled="disabled" className={styles.sellBtn}>
                  Sell
                </button>
                <input
                  type="number"
                  className={styles.itemInput}
                  pattern="\d*"
                />
                <button className={styles.itemBuy}>Buy</button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Table;
