import React from "react";
import Classes from "./ContactItem.module.css";
import TrashImg from "../../Assets/Trash.png";
import Pancil from "../../Assets/pancil.png";

const ContactItem = (props) => {
  return (
    <li className={Classes.li}>
      <div className={Classes.div_Img_Title}>
        <img src={`${props.img}`} alt={`contact ${props.contactName}`} />
        <h5>{props.title}</h5>
      </div>
      <div>
        <h4>{props.contactName}</h4>
        <div>{props.state}</div>
        <h3>{props.socialMedia}</h3>
        <div>{props.address}</div>
        <div>{props.city}</div>
        <div>{props.phone}</div>
      </div>
      <div className={Classes.div_img_edit_del}>
        <div className={Classes.img_edit_del}>
          <img src={Pancil} className={Classes.edit_img} alt="Edit Contact" />
          <img
            src={TrashImg}
            className={Classes.delete_img}
            alt="Delete Contact"
          />
        </div>
      </div>
    </li>
  );
};

export default ContactItem;
