import { Link } from "react-router-dom"

export const HomeWorksList = ({ works }) => {
  return <ul>
    {works.map(({id, name}) => {
      return (
      <li key={id} >
       <Link to={`${name}`}>
         {name}
       </Link> 
      </li>)
      
})}
  </ul>
  
}