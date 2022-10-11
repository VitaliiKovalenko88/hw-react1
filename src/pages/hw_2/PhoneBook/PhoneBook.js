import React, { Component } from "react";
import { nanoid } from 'nanoid'

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    name: ''
  }

  generateId = () => nanoid();

  handleSubmit = (e) => {
    e.preventDefault();
    
    const { value } = e.target.name;
    
    this.setState({ name: value })
    this.addContacts(value)
  }

  addContacts = (name) => {
    const dataContacts = {
      id: this.generateId(),
      name,
    }

    this.setState(prevState => ({ contacts: [dataContacts, ...prevState.contacts]})
)
  }

  render() {
    return <div>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submite">Add contact</button>
      </form> 
      <h2>Contacts</h2>
      <ul>
        {this.state.contacts.map(contact => {
          return <li key={contact.id} >{contact.name }</li>
        })}
      </ul>
    </div>

  }
};
