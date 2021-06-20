import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from "./FormAddContact.module.css";

const FormAddContact = (props) => {
  const [enteredUsernameInfo, setEnteredUsernameInfo] = useState({});
  const [enteredPhone, setEnteredPhone] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const regex = new RegExp("^[+]?[(]?[0-9]+[)]?[-]?[0-9]{4,6}", "mg");

    let isValidPhone = regex.test(enteredPhone);

    if (isValidPhone == true) {
      console.log("true");
      props.onAddContact(enteredUsernameInfo, enteredPhone);
      setEnteredUsernameInfo("");
      setEnteredPhone("");
    } else {
      setError({
        title: "Invalid Phone input",
        message: "Invalid Phone input.",
      });
      return;
    }
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsernameInfo(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setEnteredUsernameInfo(event.target.value);
  };
  const socialMediaChangeHandler = (event) => {
    setEnteredUsernameInfo(event.target.value);
  };
  const cityChangeHandler = (event) => {
    setEnteredUsernameInfo(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setEnteredUsernameInfo(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <Input
            label="Contact Name"
            htmlFor="username"
            id="username"
            type="text"
            value={enteredUsernameInfo.name}
            onChange={usernameChangeHandler}
          />
          <Input
            htmlFor="title"
            label="Title"
            id="Title"
            type="text"
            value={enteredUsernameInfo.title}
            onChange={titleChangeHandler}
          />
          <Input
            htmlFor="phone"
            label="Contact Phone"
            id="phone"
            type="text"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
          <Input
            htmlFor="social_media"
            label="Social Media"
            id="social_media"
            type="text"
            value={enteredUsernameInfo.social_media}
            onChange={socialMediaChangeHandler}
          />
          <Input
            htmlFor="city"
            label="City"
            id="city"
            type="text"
            value={enteredUsernameInfo.city}
            onChange={cityChangeHandler}
          />
          <Input
            htmlFor="address"
            label="Contact Address"
            id="address"
            type="text"
            value={enteredUsernameInfo.address}
            onChange={addressChangeHandler}
          />
          <Button type="submit">Add Contact</Button>
        </form>
      </Card>
    </div>
  );
};

export default FormAddContact;
