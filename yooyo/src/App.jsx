// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Add Routes and Route
// eslint-disable-next-line no-unused-vars
//import { Button } from './components/ui/button';
import Auth from './pages/auth/index';
import Profile from './pages/profile/index'
import Chat from './pages/chat/index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} /> 
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/profile" element={<Profile />} /> 


          <Route path = "*" element = {<Navigate to="/auth"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
