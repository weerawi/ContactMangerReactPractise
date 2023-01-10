import React from "react";
import user from "../images/profile.png";

const ContactCard = (props) => {
  const { id, name, email, PNumber } = props.contact;
  return (
    <div className="item ">
      <img className="ui avatar image " src={user} alter="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{PNumber}</div>
      </div>
      <i
        className=" trash alternate outline icon"
        style={{ color: "red", marginLeft: "17px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
