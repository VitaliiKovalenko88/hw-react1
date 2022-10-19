import React, { Component } from "react"

export default class ContactForms extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    const dataContacts = {
      id: this.generateId(),
      name,
      number,
    }

    this.setState(prevState => ({ contacts: [dataContacts, ...prevState.contacts] })
    )
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
    <label>Name</label>
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={this.handleChange}
    />
    <label >Number</label>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
        onChange={this.handleChange}
    />
    <button type="submite">Add contact</button>
  </form>}
};

