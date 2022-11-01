import { Link, Outlet } from "react-router-dom";


const HomeWorkThird = () => {
  return <>
    <ul>
      <li key={'gallery'}><Link to={'gallery'}>gallery</Link></li>
      <li key={'phoneBook2'} ><Link to={'phoneBook2'} >Phonebook</Link></li>
      <li key={'practice'}><Link to={'article'}>Article</Link> </li>
    </ul>
    <Outlet /></>
}

export default HomeWorkThird;