import React from "react";
import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className='statistic'>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Posityve feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}



export default Statistics;
