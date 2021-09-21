import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './screens'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
