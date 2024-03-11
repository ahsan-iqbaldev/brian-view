import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Login from "./view/auth/Login";
import Header from "./components/Header";
import Home from "./view/Home";
import Detail from "./components/Details";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const params = useParams();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (params.id && window.location.pathname.startsWith("/video-player")) {
      setHideHeader(true); 
    } else {
      setHideHeader(false); 
    }
  }, [params.id]);

  return (
    <BrowserRouter>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/video-player/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
