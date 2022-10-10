import React, { Component } from "react";

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    name: ''
  }

  changeInput = (e) => {
    // console.dir(e);
    this.setState(prevState => {
      return {}
    })
  }

  render() {
    return <div>
      <h1>Phonebook</h1>
      <input
        onSubmit={this.changeInpu}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>

  }
};
