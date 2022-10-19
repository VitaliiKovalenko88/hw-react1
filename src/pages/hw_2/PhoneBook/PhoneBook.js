import React, { Component } from "react";
import { nanoid } from 'nanoid'

export default class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '', 
    number: '',
  }

  generateId = () => nanoid();

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(value)
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
    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts)
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
      </form> 
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input type="text" onChange={this.changeFilter}/>
      <ul>
        {this.state.contacts.map(contact => {
          return <li key={contact.id}>{contact.name}: {contact.number}</li>
        })}
      </ul>
    </div>

  }
};
