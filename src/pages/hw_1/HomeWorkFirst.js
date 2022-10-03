import { Profile } from "../../components/hw_1/Profile";
import { Statistics } from "../../components/hw_1/Statistics";
import { FriendList } from "../../components/hw_1/FriendList";
import { TransactionHistory } from "../../components/hw_1/Transactoins";
import data from "../../Data/staticsData";
import user from "../../Data/profileDate";
import friends from "../../Data/friends"
import transactions from "../../Data/transactions"

export const HomeWorkFirst = () => {
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
