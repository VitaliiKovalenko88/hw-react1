import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForms from "components/hw-2/PhoneBook/ContactForm/ContactForm";

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
    
   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    
    return <div>
      <h1>Phonebook</h1>
      <ContactForms/>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input value={this.filter} onChange={this.changeFilter}/>
      <ul>
        {this.getVisibleContacts().map(contact => {
          return <li key={contact.id}>{contact.name}: {contact.number}</li>
        })}
      </ul>
    </div>

  }
};
