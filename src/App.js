import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, Chatroom} from './screens'
import {Navbar} from './components'
// import { Layout} from 'antd';
// const { Content, Footer} = Layout;
import { Layout } from '@douyinfe/semi-ui';


function App() {
  const { Content } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Navbar/>
        <Content  className="site-layout">          
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
