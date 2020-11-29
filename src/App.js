import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home'
import MyAccount from './components/myAccount'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/account' component={MyAccount} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
