import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, Chatroom} from './screens'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/chatroom"><Chatroom/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
