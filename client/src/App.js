import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="" style={{textAlign: "center" , paddingTop: 30}}>
        <header className="">
          <Link to="/">Home</Link>
          <p></p>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <br/>
        <br/>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
