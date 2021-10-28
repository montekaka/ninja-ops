import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import {Home, Chatroom} from './screens'
import {Navbar} from './components'
// import { Layout} from 'antd';
// const { Content, Footer} = Layout;
import { LocaleProvider, Layout } from '@douyinfe/semi-ui';


function App() {  

  return (
    <LocaleProvider locale={en_US}>
      <Router>
        <Layout className="layout" style={{
          minHeight: '100vh'
        }}>
          <Navbar/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/chatroom/:id"><Chatroom/></Route>
            <Route exact path="/chatroom"><Chatroom/></Route>            
          </Switch>        
        </Layout>
      </Router>
    </LocaleProvider>
  );
}

export default App;
