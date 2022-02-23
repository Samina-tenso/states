import React from "react"
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={""} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
