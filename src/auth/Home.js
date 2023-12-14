import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './actions';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const username = useSelector((state) => state.username);

  const handleLogout = () => {
    // Simulated logout logic
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome to the Home Page, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not authenticated. Please login.</p>
      )}
    </div>
  );
};

export default Home;
