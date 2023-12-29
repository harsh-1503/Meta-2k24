import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Screens/Home';
const Docker = () => <div>Docker Content</div>;
const Go = () => <div>Go Content</div>;
const Register = () => <div>Register Content</div>;
import './App.css';
const App = () => {
  return (
    <Home />
    // <Router>
    //   <Routes>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/docker" component={Docker} />
    //     <Route path="/go" component={Go} />
    //     <Route path="/register" component={Register} />
    //   </Routes>
    //   <Navbar />
    // </Router>
  );
};

export default App;
