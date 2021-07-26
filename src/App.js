import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Route path='/about' component={About} />
      <Route path='/' exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;