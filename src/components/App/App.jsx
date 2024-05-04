import './App.css';
import Profile from './Profile/Profile';
import userData from '../data/userData.json';
import FriendList from './FriendList/FriendList';
import friendsData from '../data/Friends.json'; // Поправил имя переменной на friendsData
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

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
      <FriendList friends={friendsData} /> {/* Поправил имя переменной на friendsData */}
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;


