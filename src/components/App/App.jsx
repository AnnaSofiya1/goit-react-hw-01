import './App.css'
import Profile from '../Profile/Profile';
import userData from '../../data/userData.json';
import FriendList from '../FriendList/FriendList';
import Friends from '../../data/Friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList Friends={Friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;
