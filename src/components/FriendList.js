import { FriendListItem } from "./components/FriendListItem";

export const FriendList = ({friends}) => { 
  return <div>
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  </div>
};