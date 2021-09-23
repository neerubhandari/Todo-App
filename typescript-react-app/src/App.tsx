import './App.css';
import NotFound from './Components/NotFound';
import Protectedrouting from './Components/ProtectedRouting'
import Loginpage from './Components/Login/Login'
import { Route, Switch } from 'react-router-dom'
import Router from './Components/Router'
import { Login } from './Redux/actions'
import "./Style/header.css"
import Signup from './Components/Login/Signup';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/signup" component={Signup} />
        <Route path="/login" component={Loginpage} />
        <Protectedrouting path="/" Login={Login} component={Router} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
