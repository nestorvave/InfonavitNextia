/**
 * Dependencies
 */
import React from "react";

/**
 * Styles
 */
import "./Spinner.scss";

/**
 * Others
 */
import Spinner from "react-bootstrap/Spinner";

export const SpinnerUi = () => {
  return (
    <div className="spinner">
      <Spinner animation="border" />
    </div>
  );
};
