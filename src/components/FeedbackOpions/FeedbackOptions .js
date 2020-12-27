import React from "react";
import  "./FeedbackOptions.css";
import PropTypes from "prop-types"

const FeedbackOptions  = ({ options, onLeaveFeedback }) => {
  return (
    <div >
      <button name='good' className='feedback-btn' type="button" onClick={onLeaveFeedback}>
        {options[0]}
      </button>

      <button name='neutral' className='feedback-btn' type="button" onClick={onLeaveFeedback}>
        {options[1]}
      </button>
      <button name='bad' className='feedback-btn' type="button" onClick={onLeaveFeedback}>
        {options[2]}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions ;
