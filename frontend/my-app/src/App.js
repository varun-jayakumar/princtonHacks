import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import styles from "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourseForms from "./components/AddCourseForms";
import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";

function App() {
  return (
    <ChakraProvider>
      <div>
        <NavBar />
      </div>
      <Router>
        <Routes>
          <Route exact path="/learning" element={<HomeCard />}></Route>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/add" element={<AddCourseForms />}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
