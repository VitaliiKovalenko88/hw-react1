import { useParams } from "react-router-dom";
// import { useState } from "react";
import  {HomeWorkFirst}  from "./HomeWorkFirst";
import HomeWorkeSecond from "./HomeWorkSecond";

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