import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { UserContext } from '../../context/UserContext';
import { ArrowLeft, Mail, Phone, Building, Globe } from 'lucide-react';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import './index.css';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, loading, error } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!loading && !error) {
      const foundUser = users.find((u) => u.id === parseInt(id));
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [id, users, loading, error]);
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  
  if (!user && !loading) {
    return (
      <div className="empty-state">
        <h3>User not found</h3>
        <button onClick={() => navigate('/')} className="go-back-btn" style={{ marginTop: '1rem' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/')} className="go-back-btn">
        Go Back
      </button>

      {user && (
        <div className="detail-card">
          <div className="detail-header">
            <div>
              <h2 className="detail-name">{user.name}</h2>
             
            </div>
          </div>

          <div className="detail-body">
            <div className="detail-grid">
              <div className="detail-section">
                <h3 className="detail-section-title">Contact Information</h3>
                
                <div className="detail-item">
                 
                  <div className="detail-item-content">
                    <h4>Email</h4>
                    <p>{user.email}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                 
                  <div className="detail-item-content">
                    <h4>Phone</h4>
                    <p>{user.phone}</p>
                  </div>
                </div>

                <div className="detail-item">
                  
                  <div className="detail-item-content">
                    <h4>Website</h4>
                    <p>
                      <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                        {user.website}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3 className="detail-section-title">Company Details</h3>
                
                <div className="detail-item">
                
                  <div className="detail-item-content">
                    <h4>Company Name</h4>
                    <p>{user.company.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
