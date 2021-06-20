import React, { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.htmlFor} >{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

export default Input;
