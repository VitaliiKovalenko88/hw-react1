import { Link, Outlet } from "react-router-dom";


const HomeWorkThird = () => {
  return <>
    <ul>
      <li key={'feedback'}><Link to={'feedback_lifecycl'}>Feedback</Link></li>
      <li key={'phoneBook'} ><Link to={'phoneBook_lifecycl'} >Phonebook</Link></li>
    </ul>
    <Outlet /></>
}

export default HomeWorkThird;