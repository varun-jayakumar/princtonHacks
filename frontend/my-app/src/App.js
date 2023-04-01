import logo from './logo.svg';
import './App.css';
import Dashboard  from './components/Dashboard'; 
import styles from "./index.css" 
import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AddCourseForms from './components/AddCourseForms';


function App() {
 
  return (

    <ChakraProvider>
    <Router>
      <Routes>
      <Route exact path='/' element={<Dashboard/>}></Route>
      <Route exact path='/add' element={<AddCourseForms/>}></Route>
      
      </Routes>
    </Router>
    {/* <Dashboard/> */}

    
    </ChakraProvider>
  );
}

export default App;
