import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
  const capitalize = (message) => {
    const lower = message.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalize(props.alert.type)}: <strong>{props.alert.message}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  mode: null,
};
