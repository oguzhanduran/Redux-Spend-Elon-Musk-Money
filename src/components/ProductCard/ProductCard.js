import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import styles from "./ProductCard.module.css";
import { useEffect } from "react";
import { updateCount } from "../../redux/products/productsSlice";

function ProductCard({ item, id }) {
  const [count, setCount] = useState(0);
  const [salable, setSalable] = useState("disabled");
  const [buyable, setBuyable] = useState("");

  const budget = useSelector((state) => state.products.budget);
  const items = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  // let maxCount = Math.floor(budget / item.productPrice);
  // let maxTotal = Number(count) + Number(maxCount);

  // sending id and count to the productsSlice;
  useEffect(() => {
    dispatch(updateCount({ id: item.id, count: count }));
  }, [count]);

  // Buy Button
  const buy = () => {
    setCount(Number(count) + 1);
  };

  // Sell Button
  const sell = () => {
    setCount(Number(count) - 1);
  };

  // Sell button activate, deactivate, negative value condition
  useEffect(() => {
    if (count > 0) {
      setSalable("");
    } else {
      setSalable("disabled");
    }

    // remove 0 at the beginning of the count
    // convert number to an array
    if (count) {
      let myFunc = (num) => Number(num);
      var intArr = Array.from(String(count), myFunc);

      // Delete 0
      if (intArr[0] == 0) {
        intArr.shift();
        // Convert array to number
        let newCount = intArr.join("");
        setCount(newCount);
      }
    }

    if (count == "") {
      setCount(0);
    }
  }, [count]);

  // Buy button activate, deactivate
  useEffect(() => {
    if (item.productPrice > budget) {
      setBuyable("disabled");
    } else {
      setBuyable("");
    }
  }, [budget]);

  // useEffect(() => {
  //   if (count > maxTotal && budget > 0) {
  //     setCount(maxTotal);
  //   } else if (count < 0) {
  //     setCount(0);
  //   }
  // }, [count]);

  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>
            {item.productName}
          </Card.Title>
          <Card.Text className={styles.itemCost}>
            ${item.productPrice}
          </Card.Text>
          <button
            disabled={salable}
            className={salable === "" ? styles.sellBtn : styles.disabledBtn}
            onClick={sell}
          >
            Sell
          </button>
          <input
            type="number"
            className={styles.itemInput}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button
            disabled={buyable}
            className={buyable === "" ? styles.buyBtn : styles.disabledBtn}
            onClick={buy}
          >
            Buy
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
