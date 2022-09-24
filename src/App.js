import { Routes, Route } from "react-router-dom";
// import { HomeWorkeFirst } from "pages/HomeWorkeFirst"
import  HomeWorks  from "pages/HomeWorks";
// import HomeWorkeSecond from "pages/HomeWorkSecond";
import {HomeWorksList} from "components/hw_1/HomeWorksList";


export const App = () => {
  return <div>
    <Routes>
      <Route path="/" element={<HomeWorks />} />
      <Route path="/homeWorks" element={<HomeWorksList />} />
      <Route path="/homeWorks/:worksId" element={<HomeWorksList/> } />
      <Route path="*" element={<HomeWorks />} />
      </Routes>  
  </div>
}