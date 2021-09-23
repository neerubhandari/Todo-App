import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
const Router = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/homepage" component={Home}/>
      </Switch>
    </div>
  );
}
export default Router;