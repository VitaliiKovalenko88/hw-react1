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
    const { value } = e.target.elements.name;
    this.props.onSubmit(name, number, value);
    
    this.reset();
    
    
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  };

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
      value={this.state.name}
    />
    <label >Number</label>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={this.handleChange}
      value={this.state.number}
    />
    <button type="submite">Add contact</button>
  </form>}
};

