import React, { Component } from "react";

export default class PhoneBook  extends Component { 
  state = {
    contacts: [],
    name: ''
  }

  onInput = (e) => {
e.preventDefauld();
  }
 
  render() {
   return <div>
      <input 
      onInput={this.onInput }
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    </div>
    
  }
};
