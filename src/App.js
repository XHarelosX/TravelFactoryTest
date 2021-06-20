import React, { useState, Fragment } from "react";

import FormAddContact from "./components/FormAddContact/FormAddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contactListButton, setContactListButton] = useState(false);

  const contactListButtonHandler = () => {
    setContactListButton((prevState) => {
      return !prevState;
    });
  };

  const contactData = [
    {
      id: "1",
      title: "Graphics Designer",
      name: "Jhon Smith",
      social_media: "Twitter, Inc",
      state: "Riviara State 32/106",
      city: "San Farncisco, CA 94107",
      address: "795 Folsom Ave, Suite 600",
      gps_coordicates: "",
      phone: "(123) 456-7890",
      img: "Assets/john-smith.jpg",
    },
    {
      id: "2",
      title: "CEO",
      name: "Alex Johnatan",
      social_media: "Twitter, Inc",
      state: "Riviara State 32/106",
      city: "San Farncisco, CA 94107",
      address: "795 Folsom Ave, Suite 600",
      gps_coordicates: "795 Folsom Ave, Suite 600",
      phone: "(123) 456-7890",
      img: "./Assets/alex jonathan.jpg",
    },
    {
      id: "3",
      title: "Marketing Manager",
      name: "Monica Smith",
      social_media: "Twitter, Inc",
      state: "Riviara State 32/106",
      city: "San Farncisco, CA 94107",
      address: "795 Folsom Ave, Suite 600",
      gps_coordicates: "795 Folsom Ave, Suite 600",
      phone: "(123) 456-7890",
      img: "./Assets/monica smith.jpg",
    },
    {
      id: "4",
      title: "Sales Manager",
      name: "Michael Zimber",
      social_media: "Twitter, Inc",
      state: "Riviara State 32/106",
      city: "San Farncisco, CA 94107",
      address: "795 Folsom Ave, Suite 600",
      gps_coordicates: "795 Folsom Ave, Suite 600",
      phone: "(123) 456-7890",
      img: "./Assets/michael zimber.jpg",
    },
    {
      id: "5",
      title: "Graphics Designer",
      name: "Sandra Smith",
      social_media: "Twitter, Inc",
      state: "Riviara State 32/106",
      city: "San Farncisco, CA 94107",
      address: "795 Folsom Ave, Suite 600",
      gps_coordicates: "795 Folsom Ave, Suite 600",
      phone: "(123) 456-7890",
      img: "./Assets/sandra smith.jpg",
    },
    {
      id: "6",
      title: "Graphics Designer",
      name: "Janet Carton",
      social_media: "Twitter, Inc",
      state: "Riviara State 32/106",
      city: "San Farncisco, CA 94107",
      address: "795 Folsom Ave, Suite 600",
      gps_coordicates: "795 Folsom Ave, Suite 600",
      phone: "(123) 456-7890",
      img: "./Assets/janeth carton.jpg",
    },
  ];
  const [contactList, setContactList] = useState(contactData);

  const addContactHandler = (
    title,
    name,
    social_media,
    city,
    address,
    gps_coordicates,
    phone
  ) => {
    setContactList((prevContactList) => {
      return [
        ...prevContactList,
        {
          id: Math.random().toString(),
          title: title,
          name: name,
          social_media: social_media,
          city: city,
          address: address,
          gps_coordicates: gps_coordicates,
          phone: phone,
        },
      ];
    });
  };

  return (
    <div>
      {contactListButton ? (
        <FormAddContact onAddContact={addContactHandler} />
      ) : null}
      <ContactList
        contacts={contactList}
        onAddContactClick={contactListButtonHandler}
      />
    </div>
  );
}

export default App;
