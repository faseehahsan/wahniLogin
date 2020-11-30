import MyAccount from './components/Registration/myAccount'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Layout/navbar'
import Home from './components/home'
import Quiz from './components/Quiz/quizScreen'



function App() {
  return (
    <HashRouter>
    <Navbar />
    <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/myAccount' component={MyAccount} />
            <Route exact path='/Quiz' component={Quiz} />
          </Switch>
    </HashRouter>
        
    

  );
}

export default App;
