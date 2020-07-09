import React, { useState, useEffect } from "react";
import ChartBarWeekly from "./summary-chart-weekly";
import ChartLineMonthly from "./summary-chart-monthly";
import ChartPolarDaily from "./summary-chart-daily";
import FoodList from "./summary-foodlist";
import SelectButton from "./summary-select-button";
// import "./Summary.css";
import './summary.scss'
import axios from "axios";
import formatDay from "../helperFunction/formatDay";
const today = new Date();

const Summary = ({ setCurrentPageIndex }) => {
  const [mainDate, setMainDate] = useState(formatDay(today));
  const [foodEaten, setFoodEaten] = useState([]);

  const [showDWM, setShowDWM] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  useEffect(() => {
    setCurrentPageIndex(2);
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/eatenFoodDay",
        { date: mainDate },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((result) => {
        setFoodEaten(result.data);
      });
  }, [mainDate]);

  return (
    <div className='summary'>
      <SelectButton selectDWM={setShowDWM} />
<<<<<<< HEAD
      {/*<div className="summary-container">*/}
        <div className="chart">
=======
      <div className='summary-container'>
        <div className='chart'>
>>>>>>> 055ee13d466d7b26586cde782459070e317c390e
          {showDWM.daily ? (
            <ChartPolarDaily setMainDate={setMainDate} />
          ) : showDWM.weekly ? (
            <ChartBarWeekly />
          ) : (
            <ChartLineMonthly />
          )}
<<<<<<< HEAD
          </div>
          {/*<hr className='line'></hr>*/}
        <div className="foodlist">
          <p className='foodlist__title'>On {mainDate}, you ate...</p>
=======
        </div>
        <div className='foodlist'>
          <h1>On {mainDate}, you ate...</h1>
>>>>>>> 055ee13d466d7b26586cde782459070e317c390e
          <FoodList food={foodEaten} />
        </div>
      {/*div>*/}
    </div>
  );
};
export default Summary;
