import React from "react";
import { Container, Row, Col, Card, Navbar } from "react-bootstrap";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";

function Table() {
  const items = useSelector((state) => state.products.items);
  const money = useSelector((state) => state.products.money);
  console.log(money);

  return (
    <div>
      <div className={styles.centerMoney}>${money}</div>
      {/* <Container>
        <Row style={{ marginLeft: "95px" }}>
          <Col xl={12} lg={10} md={10} sm={4} xs={4}>
            <div className={styles.centerMoney}>${money}</div>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row className={styles.containerProduct} style={{ marginLeft: "75px" }}>
          {items.map((item) => (
            <Col key={item.id} xl={4} md={6} x>
              <Card className={styles.card}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {item.productName}
                  </Card.Title>
                  <Card.Text className={styles.itemCost}>
                    ${item.productPrice}
                  </Card.Text>
                  <button disabled="disabled" className={styles.sellBtn}>
                    Sell
                  </button>
                  <input type="number" className={styles.itemInput} />
                  <button className={styles.itemBuy}>Buy</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Table;
