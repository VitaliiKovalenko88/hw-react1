import { useParams } from "react-router-dom";
// import { useState } from "react";
import  {HomeWorkFirst}  from "./hw_1/HomeWorkFirst";
import HomeWorkSecond from "./hw_2/HomeWorkSecond";
import HomeWorkThird from "./hw_3/HomeWorkThird";

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
    <HomeWorkSecond />
      : null}  
    {worksId === "lifecycles"
      ?
      <HomeWorkThird />
      : null}
      </main>
  
}