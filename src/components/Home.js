import React from "react";

import { useSelector } from "react-redux";

import Calender from "./Calender";
import Popup from "./Popup";

import styles from "../styles/home.module.scss";

export default function Home() {
  const popup = useSelector((store) => store.popup);
  return (
    <div className={`row centered ${styles.home}`}>
      {popup && <Popup />}
      <main
        className="column"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/background.png)`,
        }}>
        <div className={`${styles.wrapper}`}>
          <h1>
            Choose the day <br />
            for the meeting
          </h1>
          <p>
            We encourage you to book your
            <br /> appointment online.
            <br /> This will save you time.
          </p>
        </div>
      </main>
      <aside className="column centered">
        <Calender />
      </aside>
    </div>
  );
}
