export const FriendListItem = (
  { isOnline, avatar, name }) => {
  return <>
   <span>{isOnline}</span>
   <img src={avatar} alt="User avatar" width="48" />
   <p>{name}</p>
  </>
}
  
  
  