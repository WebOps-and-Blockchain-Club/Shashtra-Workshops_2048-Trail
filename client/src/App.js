import './App.css';
import { Switch, Route, Redirect } from 'wouter'
import Dashboard from './pages/Dashboard';
import Diary from './pages/Diary';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" >Home</Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/diary" component={Diary} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
