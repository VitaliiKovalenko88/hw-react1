import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({contacts,deleteContact}) => {
  return <ul>
    {contacts.map(({id, name, number}) => {
      return (
        <li key={id}>
        <ContactItem id={id} name={name} number={number} deleteContact={deleteContact}/>
        </li>)
    })}
  </ul>
};

export default ContactList;