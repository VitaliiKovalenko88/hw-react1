import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics";
import { FriendList } from "./components/FriendList";
import { TransactionHistory } from "./components/Transactoins";
import data from "./Data/staticsData";
import user from "./Data/profileDate";
import friends from "./Data/friends"
import transactions from "./Data/transactions"

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  
  return <>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </> 
    
 };
