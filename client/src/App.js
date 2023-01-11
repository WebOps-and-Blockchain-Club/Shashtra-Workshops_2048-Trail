import './App.css';
import { Switch, Route, Redirect } from 'wouter'
import Dashboard from './pages/Dashboard';
import Diary from './pages/Diary';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" >Home</Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/diary" component={Diary} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
