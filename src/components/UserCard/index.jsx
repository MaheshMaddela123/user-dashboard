import { Link } from 'react-router-dom';
import './index.css';

const UserCard = ({ user }) => {

  return (
    <div className="user-card">
      <div className="user-card-header">
        <h3 className="user-name">{user.name}</h3>
      </div>
      
      <div className="user-info">
        <div className="user-info-item">
          <p>Mail: {user.email}</p>
        </div>
        <div className="user-info-item">
          <p>Location: {user.address.city}</p>
        </div>
      </div>

      <Link to={`/user/${user.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
