import SidebarHe from "./components/SidebarHeader";
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Home from "./components/Projects/Home";
import Login from './components/Projects/Login'
import Comentário from './components/Projects/Comentário'
function App() {
  return (
    <Router>
    <SidebarHe/>
    <Switch>
      <div id="Corpo">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/Login">
        <Login/>
      </Route>
      <Route path="/Comentário">
        <Comentário/>
      </Route>
      </div>
    </Switch>
    </Router>
  );
}

export default App;
