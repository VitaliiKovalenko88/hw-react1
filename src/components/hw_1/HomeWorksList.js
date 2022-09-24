import { Link } from "react-router-dom"
import { getWorks } from "Data/homeWorksData"


export const HomeWorksList = () => {
  return <ul>
    {getWorks().map(({id, name}) => {
  
     return <li key={id} >
        <Link to={`${id}`}>
          {name}
        </Link>
      </li>
})}
  </ul>
}