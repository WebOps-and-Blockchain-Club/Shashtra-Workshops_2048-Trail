import './App.css';
import { Switch, Route, Redirect } from 'wouter'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" >Home</Route>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
