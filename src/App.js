import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import Header from './components/Sections/Header';
import Landing from './pages/Landing';


function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path={'/'} component={Landing} />
        </Switch>
      </Router>
    </div>


  );
}

export default App;
