import React from "react";
import user from "../images/profile.png";

const ContactCard = (props) => {
  const { id, name, email, PNumber } = props.contact;
  return (
    <div className="item grid ">
      <img
        className="ui avatar image"
        src={user}
        alter="user"
        style={({ width: "40px" }, { height: "40px" })}
      />
      <div className="content" style={{ marginLeft: "17px" }}>
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{PNumber}</div>
      </div>
      <i
        className="ui right floated trash alternate red outline icon"
        style={{ marginTop: "17px" }} //style={{ color: "red" }}
      ></i>
    </div>
  );
};

export default ContactCard;
