import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import styles from "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourseForms from "./components/AddCourseForms";
import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <ChakraProvider>
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/learning" element={<HomeCard />}></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/add" element={<AddCourseForms />}></Route>
          </Routes>
        </Router>
      </>
    </ChakraProvider>
  );
}

export default App;
