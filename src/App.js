import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./view/auth/Login";
import Header from "./components/Header";
import Home from "./view/Home";
import Detail from "./components/Details";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const ProtectedRoute = ({ element, path }) => {
    const { uid } = useSelector((state) => state.auth);

    if (!uid && path !== "/login") {
      return <Navigate to="/login" />;
    }

    return element;
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protect other routes */}
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/details/:id"
          element={<ProtectedRoute element={<Detail />} />}
        />
        <Route
          path="/video-player/:id"
          element={<ProtectedRoute element={<VideoPlayer />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
