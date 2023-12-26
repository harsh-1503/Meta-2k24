import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => <div>Home Content</div>;
const Docker = () => <div>Docker Content</div>;
const Go = () => <div>Go Content</div>;
const Register = () => <div>Register Content</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/docker" component={Docker} />
        <Route path="/go" component={Go} />
        <Route path="/register" component={Register} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default App;
