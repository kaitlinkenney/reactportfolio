import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import About from './pages/about';
import Projects from './pages/projects';
import Home from './pages/home';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
        <Footer />
      </div>

    </Router>

  );
}

export default App;
