import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function Table() {
  const items = useSelector((state) => state.products.items);
  const budget = useSelector((state) => state.products.budget);
  const editBudget = Number(budget).toLocaleString(); // Burda bütçe değerinin aralarına virgül koyulmasını sağladık.

  return (
    <div>
      <div className={styles.centerMoney}>${editBudget}</div>
      <Container>
        <Row className={styles.containerProduct} style={{ marginLeft: "75px" }}>
          {items.map((item) => (
            <Col key={item.id} xl={4} md={6}>
              <ProductCard item={item} id={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Table;
