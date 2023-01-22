import './App.css';
import { Switch, Route, Redirect } from 'wouter'
import Dashboard from './pages/Dashboard';
import Diary from './pages/Diary';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/diary" component={Diary} />
        <Route path="/" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
