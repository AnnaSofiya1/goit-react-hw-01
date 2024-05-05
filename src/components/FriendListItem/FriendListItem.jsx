import css from './FriendListItem.module.css';


export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="User avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;

