import React from "react";
import "./Notification.css";
import PropTypes from 'prop-types'

const Notification = ({massage})=>{
    return(
        <>
        <p>{massage}</p>
        </>
    )
};

Notification.propTypes = {
    massage: PropTypes.string.isRequired,
}

export default Notification