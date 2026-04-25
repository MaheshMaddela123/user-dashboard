import { AlertCircle } from 'lucide-react';
import './index.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <AlertCircle size={48} className="error-icon" />
      <h2 className="error-message">Oops! Something went wrong.</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
