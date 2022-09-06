import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.picture}>
        {" "}
        <img
          src="https://cdn.webtekno.com/media/cache/content_detail_v2/article/102524/elon-musk-dunyanin-en-zengin-2-insani-oldu-1606213404.jpg"
          alt=""
        />
        <h2 className={styles.title}>Spend Elon Musk' Money</h2>
      </div>
    </div>
  );
}

export default Header;
