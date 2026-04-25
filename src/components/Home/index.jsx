import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import UserCard from '../../components/UserCard';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import './index.css';

const Home = () => {
  const { users, loading, error, searchQuery, setSearchQuery, sortOrder, setSortOrder } = useContext(UserContext);

  let filteredAndSortedUsers = [...users];

    filteredAndSortedUsers = filteredAndSortedUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  filteredAndSortedUsers.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (sortOrder === 'asc') {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    } else {
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    }
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <div className="controls-container">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="sort-wrapper">
          <label htmlFor="sort" className="sort-label">Sort by:</label>
          <select
            id="sort"
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Name (A - Z)</option>
            <option value="desc">Name (Z - A)</option>
          </select>
        </div>
      </div>

      {filteredAndSortedUsers.length > 0 ? (
        <div className="user-grid">
          {filteredAndSortedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No users found</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
