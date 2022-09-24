import { FriendListItem }  from "./FriendListItem"

export const FriendList = ({friends}) => { 
  return <ul>
      {friends.map(({ id, avatar, name, isOnline }) => <li key={id}>
        <FriendListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline} />
      </li>)}
    </ul>
  
};