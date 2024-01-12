import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ImagePage from "./pages/ImagesPage";
import NavCloseBtn from "./ui/buttons/navCloseBtn/NavCloseBtn";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";
import LovesPage from "./pages/LovesPage";

import "./App.css";


function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Images" element={<ImagePage />} />
        <Route path="/Todos" element={<TodosPage/>}/>
        <Route path="/Users" element={<UsersPage/>}/>
        <Route path="/Loves" element={<LovesPage/>}/>
      </Routes>
      <NavCloseBtn open={open} setOpen={setOpen} color="white"/>
      <Navbar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
