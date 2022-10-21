const ContactItem = ({id, name, number, deleteContact}) => {
  return (
    <>
    <p>{name}: {number}</p>
    <button type="button" onClick={()=> {deleteContact(id)}} >delete</button>
    </>
      
    
  )
}

export default ContactItem;