import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./view/auth/Login";
import Header from "./components/Header";
import Home from "./view/Home";
import Detail from "./components/Details";


function App() {
  return(
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/details/:id" element={<Detail />} />
      
    </Routes>
    </BrowserRouter>

  ) 
}

export default App;
