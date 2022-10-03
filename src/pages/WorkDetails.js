import { useParams } from "react-router-dom";
// import { useState } from "react";
import  {HomeWorkFirst}  from "./hw_1/HomeWorkFirst";
import HomeWorkeSecond from "./hw_2/HomeWorkSecond";

export const WorkDetails = ({value}) => {
  const { worksId } = useParams();
  
 
  return <main> 
    {worksId === 'react'
      ?
      <HomeWorkFirst />
      :
      null}
   {worksId === "reactClass"
    ?
    <HomeWorkeSecond />
: null}  
      </main>
  
}