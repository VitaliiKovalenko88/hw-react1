import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import  HomeWorks  from "pages/HomeWorks";
import { HomePage } from "pages/Home";
import { WorkDetails } from "pages/WorkDetails";
import Feedback from "components/hw-2/Feedback/Feedback/Feedback";
import PhoneBook from "components/hw-2/PhoneBook/PhoneBook/PhoneBook";
import FeedbackHooks from "components/hw_3/Feedback/Feedback";
import Article from "pages/hw_3/Module_Practice/Article";


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
      <Route path="/homeWorks/:worksId" element={<WorkDetails />}>
        <Route path="feedback" element={<Feedback/>} />
        <Route path="phonebook" element={<PhoneBook/>}/>
        <Route path="feedback_lifecycl" element={<FeedbackHooks/>}/>
        <Route path="article" element={<Article/>} />
      </Route>
      
      <Route path="*" element={<HomePage />} />
      </Routes>  
  </div>
}