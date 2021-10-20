import React, { useEffect, useState, useCallback } from "react";

import ArrowBack from "@mui/icons-material/ArrowBackIos";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";

import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/calendar.module.scss";

export default function Calender() {
  const [mounths, setMounths] = useState([]);

  const [currentMounth, setCurrentMounth] = useState();

  const [datesToshow, setDatesToShow] = useState([]);

  const dispatch = useDispatch();

  const weekDays = [
    "Sunday",
    "Mounday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const mounthsArray = [
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

  const getMouthDays = useCallback((year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }, []);

  const getAllMonths = useCallback(() => {
    const year = new Date().getFullYear();

    const mounthsFinal = mounthsArray.map((month, i) => ({
      name: month,
      days: getMouthDays(year, i),
    }));

    setMounths(mounthsFinal);
    setCurrentMounth(new Date().getMonth());
  }, []);

  const concatDates = useCallback(() => {
    if (mounths.length > 0) {
      const currMounthDays = mounths[currentMounth].days.map((date) => ({
        date,
        actual: true,
      }));

      const numberOfFirstDay = currMounthDays[0].date.getDay();
      const numberOfLastDay =
        currMounthDays[currMounthDays.length - 1].date.getDay();

      const nextMounthDays = mounths[
        currentMounth + 1 > 11 ? 0 : currentMounth + 1
      ].days.map((date) => ({ date, actual: false }));
      const prevMounthDays = mounths[
        currentMounth - 1 < 0 ? 11 : currentMounth - 1
      ].days.map((date) => ({ date, actual: false }));

      if (mounths.indexOf(currMounthDays) === 11) {
        return setDatesToShow([
          ...prevMounthDays.slice(prevMounthDays.length - numberOfFirstDay),
          ...currMounthDays,
        ]);
      } else if (mounths.indexOf(currMounthDays) === 0) {
        return setDatesToShow([
          ...currMounthDays,
          ...nextMounthDays.slice(0, 6 - numberOfLastDay),
        ]);
      } else
        return setDatesToShow([
          ...prevMounthDays.slice(prevMounthDays.length - numberOfFirstDay),
          ...currMounthDays,
          ...nextMounthDays.slice(0, 6 - numberOfLastDay),
        ]);
    }
  }, [currentMounth]);

  const dateFixer = useCallback(
    (date) => (date.toString().length > 1 ? date : "0" + date),
    []
  );

  useEffect(() => {
    concatDates();
  }, [currentMounth, mounths]);

  useEffect(() => {
    getAllMonths();
  }, []);

  return (
    <div className={`column centered ${styles.calender}`}>
      <div className={`row centered ${styles.header}`}>
        <ArrowBack
          className={styles.icon}
          onClick={() =>
            setCurrentMounth(currentMounth - 1 < 0 ? 11 : currentMounth - 1)
          }
        />
        <div className={`row centered ${styles.monthTitle}`}>
          <span>{mounths && mounths[currentMounth]?.name.toUpperCase()}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <ArrowForward
          className={styles.icon}
          onClick={() =>
            setCurrentMounth(currentMounth + 1 > 11 ? 0 : currentMounth + 1)
          }
        />
      </div>
      <div className={styles.divider}></div>

      <div className={`row  ${styles.datesWrapper}`}>
        {weekDays.map((_, i) => (
          <div className={`column  ${styles.datesColumn}`}>
            {datesToshow
              .filter((day) => day.date.getDay() === i)
              .map((day) => (
                <div
                  key={day.date.getDate()}
                  className={`row centered ${styles.dateItem} ${
                    !day.actual && styles.notActual
                  }`}
                  onClick={() =>
                    dispatch({ type: "INIT_POPUP", payload: day.date })
                  }>
                  {dateFixer(day.date.getDate())}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className={styles.divider}></div>

      <div className={`row centered ${styles.footer}`}>
        {weekDays.map((day) => (
          <span>{day[0]}</span>
        ))}
      </div>

      <div className={styles.divider}></div>
    </div>
  );
}
