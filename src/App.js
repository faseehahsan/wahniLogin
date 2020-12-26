import MyAccount from './components/Registration/myAccount'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Layout/navbar'
import Home from './components/home'
import QuizPlay from './components/Quiz/quizPlay'
import Quiz from './components/Quiz/quizScreen'
import RankingScreen from './components/Ranking/rankingScreen'
import { UserContextProvider } from './components/context/user1Context';
import { QuestionContextProvider } from './components/context/questionsContext';
import { AdminQuestionContextProvider } from './components/context/adminQcontext'
import AddDel from './components/questionsScreen/addDelQs'
import './components/styles/globalStyles.css'
import Footer from './components/footer/footer'




function App() {
  return (
    
    <HashRouter>
      <Navbar />
      <Switch>
      <UserContextProvider>
        <Route exact path='/' component={Home} />
          <Route exact path='/myAccount' component={MyAccount} />
          <Route exact path='/Quiz' component={Quiz} />

          <QuestionContextProvider>
          <Route exact path='/Quiz/play' component={QuizPlay} />

          <AdminQuestionContextProvider>
          <Route exact path='/Quiz/add' component={AddDel} />
          </AdminQuestionContextProvider>
          
          </QuestionContextProvider>

          <Route exact path='/Quiz/ranking' component={RankingScreen} />
        </UserContextProvider>
      </Switch>
      <Footer />
    </HashRouter>

  );
}

export default App;
