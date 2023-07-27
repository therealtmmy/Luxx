import React from "react";
import PropTypes from "prop-types";
import { click } from "@testing-library/user-event/dist/click";

const Button = ({ color, text, onAddition }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onAddition}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
