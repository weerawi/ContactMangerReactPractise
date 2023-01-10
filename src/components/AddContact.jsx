import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main ">
        <h2>Add Conatact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>

          <div className="field">
            <label>Contact</label>
            <input type="text" name="PNumber" placeholder="Phone Number" />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
