import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/header.module.scss";

import Logo from "./Logo";

export default function Header() {
  const tabs = ["home", "about us"];

  const activeTab = useSelector((store) => store.tab);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <header className={`row centered`}>
      <div className={`row centered ${styles.wrapper}`}>
        <Logo />
        <div className={`row centered ${styles.tabsWrapper}`}>
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`column centered ${styles.tab}`}
              onClick={() => dispatch({ type: "INIT_TAB", payload: tab })}>
              {tab}
              {activeTab === tab && <div className={styles.circle}></div>}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
