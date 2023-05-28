import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStateProvider } from './utils/GlobalStateProvider';

export const App: React.FC = () => {
  useEffect(() => {
    fetch('http://test-work/wp-json/jwt-auth/v1/token', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: '123'
      })
    })
      .then(response => response.json())
      .then(user => {
        localStorage.setItem('jwt', user.data.token);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <GlobalStateProvider>
      <div className="App">
        <Outlet />
      </div >
    </GlobalStateProvider>
  );
};
