import React from "react";

import PlusImg from "../../Assets/Plus-Sign.png";
import Card from "../UI/Card/Card";
import classes from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = (props) => {
  return (
    <Card className={classes.contacts}>
      <ul>
        {props.contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            title={contact.title}
            contactName={contact.name}
            state={contact.state}
            socialMedia={contact.social_media}
            address={contact.address}
            city={contact.city}
            phone={contact.phone}
            img={contact.img}
          />
        ))}
        <li className={classes.li_img}>
          <img
            src={PlusImg}
            alt="Add Contact"
            onClick={props.onAddContactClick}
            className={classes.img_add_contact}
          />
        </li>
      </ul>
    </Card>
  );
};

export default ContactList;
