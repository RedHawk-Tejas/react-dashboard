import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password, callback) => {
    // Simulating a login request with a delay
    setTimeout(() => {
      // Mocking a successful login
      if (username === 'admin' && password === 'password') {
        const userData = {
          username: username,
          // Other user data
        };
        setUser(userData);
        callback(); // Invoke the callback function to navigate after successful login
      } else {
        alert('Invalid username or password');
      }
    }, 1000);
  };

  const logout = () => {
    // Implement logout logic here
    // Clear the user data in the context
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};
