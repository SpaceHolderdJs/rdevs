import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/popup.module.scss";

export default function Popup() {
  const popup = useSelector((store) => store.popup);
  const dispatch = useDispatch();

  const weekDaysArray = [
    "Sunday",
    "Mounday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={`row centered ${styles.background}`}>
      <div className={`column centered ${styles.popup}`}>
        <div className={`row ${styles.header}`}>
          <div
            className={`row centered ${styles.yellowBox}`}
            onClick={() => dispatch({ type: "REMOVE_POPUP" })}>
            <CloseIcon />
          </div>
        </div>
        <div className={`row centered ${styles.wrapper}`}>
          <div className={`column centered ${styles.inputContainer}`}>
            <span className="row">Month</span>
            <input type="text" defaultValue={monthsArray[popup.getMonth()]} />
          </div>
          <div className={`column centered ${styles.inputContainer}`}>
            <span className="row">Day</span>
            <input
              type="text"
              defaultValue={`${popup.getDate()}th ${
                weekDaysArray[popup.getDay()]
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
