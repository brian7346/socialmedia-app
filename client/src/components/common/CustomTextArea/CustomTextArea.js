import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const CustomTextArea = props => {
  let inputClassNames = classNames({
    "form-control ": true,
    "form-control-lg": true,
    "is-invalid": props.errors[props.name]
  });

  return (
    <div className="form-group">
      <textarea
        className={inputClassNames}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />

      {props.info && (
        <small className="form-text text-muted">{props.info}</small>
      )}
      {props.errors[props.name] && (
        <div className="invalid-feedback">{props.errors[props.name]}</div>
      )}
    </div>
  );
};

CustomTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  info: PropTypes.string
};

CustomTextArea.defaultProps = {
  errors: {}
};

export default CustomTextArea;
