import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Sections/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Complaints from './pages/Complaints';
import Header from './components/Sections/Header';
import Landing from './pages/Landing';
import Doctor from './pages/Profiles/Doctor';
import Patient from './pages/Profiles/Patient';
import Doctorsignup from './pages/Doctorsignup';
// import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route component={Login} path={'/login'}/>
          <Route component={Signup} exact path={'/signup'}/>
          <Route component={Doctor} path={'/profile/doctor'}/>
          <Route component={Patient} path={'/profile/patient'}/>
          <Route component={Doctorsignup} path={'/signup/doctor'}/>
          <Route component={Complaints} path={'/complaints'} />
          {/* <Route component={Complaints} path={'/complaints'} /> */}
        </Switch>
        {/* <Footer /> */}
        
      </div>
    </Router>
  );
}

export default App;
