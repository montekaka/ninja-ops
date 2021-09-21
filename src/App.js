import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, Chatroom} from './screens'
import {Navbar} from './components'
import { Layout} from 'antd';
const { Content, Footer} = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Navbar/>
        <Content  className="site-layout" style={{ padding: '50px 50px'}}>          
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/chatroom"><Chatroom/></Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
