import { Profile } from "./components/Profile";
import { user } from "./Data/profileDate";

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  
  return <Profile
    username={username} tag={tag} location={location} avatar = {avatar} stats = {stats}/>
 };
