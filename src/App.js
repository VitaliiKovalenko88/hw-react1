import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import  HomeWorks  from "pages/HomeWorks";
import { HomePage } from "pages/Home";
import { WorkDetails } from "pages/WorkDetails";


export const App = () => {
  return <div>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/homeWorks">Home Works</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/homeWorks" element={<HomeWorks />} />
      <Route path="/homeWorks/:worksId" element={<WorkDetails />} />
      
      <Route path="*" element={<HomePage />} />
      </Routes>  
  </div>
}