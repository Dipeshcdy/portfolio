
import './App.css';

import {
  BrowserRouter as Router,
 

  
} from "react-router-dom";

import AnimatedRoute from './components/AnimatedRoute';
import {Nav} from './components/Nav';


function App() {

  return (
    <>
    
    
    
    <Router>
    <Nav/>
    
    <AnimatedRoute/>
</Router>
    {/* 
    
    
    <Footer/> */}
    </>
  );
}

export default App;
