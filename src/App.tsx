import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from './store/context'
import Layout from './pages/Layout/Layout'

const App: React.FC<any> = () => (
  <Provider>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App;