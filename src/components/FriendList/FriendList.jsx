import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';


export const FriendList = ({ Friends }) => {
  return (
    <ul className={css.list}>
      {Friends.map((Friend) => (
        <li key={Friend.id} className={css.listItem}>
          <FriendListItem friend={Friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;