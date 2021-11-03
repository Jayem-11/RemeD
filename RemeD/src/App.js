import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Sections/Footer';
import Complaints from './pages/Complaints';
import Header from './components/Sections/Header';
import Landing from './pages/Landing';
import PatientSignup from './pages/PatientSignup';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'} component={Landing} />
          <Route path={'/complaints'} component={Complaints} />
          <Route path={'/patient'} component={PatientSignup} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
