import MyAccount from './components/Registration/myAccount'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Layout/navbar'
import Home from './components/home'
import QuizPlay from './components/Quiz/quizPlay'
import Quiz from './components/Quiz/quizScreen'
import RankingScreen from './components/Ranking/rankingScreen'
import { UserContextProvider } from './components/context/user1Context';




function App() {
  return (
    
    <HashRouter>
      <Navbar />
      <Switch>
      <UserContextProvider>
        <Route exact path='/' component={Home} />
          <Route exact path='/myAccount' component={MyAccount} />
          <Route exact path='/Quiz' component={Quiz} />
          <Route exact path='/Quiz/play' component={QuizPlay} />
          <Route exact path='/Quiz/ranking' component={RankingScreen} />
        </UserContextProvider>
      </Switch>
    </HashRouter>

  );
}

export default App;
