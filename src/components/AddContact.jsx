import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    PNumber: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" &&
      this.state.email === "" &&
      this.state.PNumber === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", PNumber: "" });
  };

  render() {
    return (
      <div className="ui main ">
        <h2>Add Conatact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Contact</label>
            <input
              type="text"
              name="PNumber"
              placeholder="Phone Number"
              value={this.state.PNumber}
              onChange={(e) => this.setState({ PNumber: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
