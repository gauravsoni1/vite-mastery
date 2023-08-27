import React from "react";
import "./IconButton.css";

import ErrorIcon from '../../../assets/error_icon.png';


const IconButton = ({ type = "error" }) => {
    return (
        <button type="button" className="icn-btn">
            <img src={ErrorIcon} alt="icon" />
            {type === "error" ? "Error" : "Info"}</button>
    )

}

export default IconButton;