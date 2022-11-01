import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForms from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';


export default class PhoneBookLifeCycl extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
    
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    console.log(this.state.contacts);
    console.log(nextContacts);
    if (nextContacts !== prevContacts) {
     localStorage.setItem('contacts', JSON.stringify(nextContacts))
    }
  }

  generateId = () => nanoid();

  addContact = (name, number, value) => {
    const dataContacts = {
      id: this.generateId(),
      name,
      number,
    }

    const serchSameContact = this.state.contacts.find(contact => contact.name.toLowerCase() === value.toLowerCase())

    if (serchSameContact) {
      alert(`Ну шо не видно, что ${name} таки есть уже?????!!!`);
      return;
    }

    this.setState(prevState => ({ contacts: [dataContacts, ...prevState.contacts] })
    )
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForms onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
      </div>
    )

  }
};