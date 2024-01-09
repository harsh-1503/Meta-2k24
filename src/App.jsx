import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/TwoD/Navbar/Navbar";
import "../../Meta-2k24/index.css";
import Social from "./components/TwoD/Social/Social";
import Landing from "./components/TwoD/Landing/Landing";
import Layout from "./components/TwoD/Layout/Layout";
const Home = () => <div>Home Content</div>;
const Docker = () => <div>Docker Content</div>;
const Go = () => <div>Go Content</div>;
const Register = () => <div>Register Content</div>;

const App = (props) => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/docker" component={Docker} />
          <Route path="/go" component={Go} />
          <Route path="/register" component={Register} />
        </Routes>
       
      </Layout>
    </>
  );
};

export default App;
