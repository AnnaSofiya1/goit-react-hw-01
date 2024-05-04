import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
    const { followers, views, likes } = stats;
    
 return (
    <div className={css.container}>
      <div className={css.information}>
        <img className={css.avatar} src={image} alt="User avatar" width="150" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span> <span>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;