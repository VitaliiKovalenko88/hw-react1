import { HomeWorksList } from "components/HomeWorksList";
import { getWorks } from "Data/homeWorksData";


export default function HomeWorks() {
  const works = getWorks();
  
  return (
  <main>
      <HomeWorksList works={works} />
      
  </main>)  
}