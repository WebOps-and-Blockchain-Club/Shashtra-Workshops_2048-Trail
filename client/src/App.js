import './App.css';
import { Switch, Route, Redirect } from 'wouter'
import Dashboard from './pages/Dashboard';
import Diary from './pages/Diary';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  // setAuth=()=>{
  //    fetch("http://localhost:8000/auth/signin", {
  //         method: "get",
  //         body: Auth,
  //     })
  //         .then(res => console.log(res))
  //         .catch(err => console.log(err))
  // }
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" >Home</Route> */}
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <ProtectedRoute path="/dashboard" component={Dashboard} auth={false}/>
        {/* <Route path="/diary" component={Diary} /> */}
        <ProtectedRoute path="/diary" component={Diary} auth={false}/>
        <Route path="/" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
