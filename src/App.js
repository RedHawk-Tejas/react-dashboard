import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { UserProvider, useUserContext  } from "./UserContext";
import React from 'react';

const PrivateRoutes = ({ element: Component }) => {

  const { user } = useUserContext();

  if(user) {
    return  <Component /> ;
  } else {
    return <Navigate to="/" />;
  }
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<PrivateRoutes element={Dashboard} />} />
          <Route path="*" element={<Navigate to="/" />}/>

        </Routes>

      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
