import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Sections/Footer";
import Login from "./pages/Signup/Login";
import Signup from "./pages/Signup/Signup";
import Complaints from "./pages/Complaints";
// import Header from "./components/Sections/Header";
import Landing from "./pages/Landing";
import Doctor from "./pages/Profiles/Doctor";
import Patient from "./pages/Profiles/Patient";
import DoctorSignup from "./pages/Signup/Doctor";
import PatientSignup from "./pages/Signup/Patient"
import PatientDash from "./pages/Dashboard/Patient";
import DoctorDash from "./pages/Dashboard/Doctor";
import PatientNotes from "./pages/PatientNotes";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Faqs from "./pages/Faqs";
import Payment from "./pages/Payment";


// import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                {/* <Header /> */}
                <Switch>
                    <Route component={Landing} exact path={"/"} />
                    <Route component={Login} path={"/login"} />
                    <Route component={Signup} exact path={"/signup"} />
                    <Route component={Doctor} path={"/profile/doctor"} />
                    <Route component={Patient} path={"/profile/patient"} />
                    <Route component={DoctorSignup} path={"/signup/doctor"} />
                    <Route component={PatientSignup} path={"/signup/patient"} />
                    <Route component={Complaints} path={"/complaints"} />
                    <Route component={Faqs} path={"/faqs"} />
                    <Route component={PatientDash} path={"/dashboard/patient"} />
                    <Route component={DoctorDash} path={"/dashboard/doctor"} />
                    <Route component={PatientNotes} path={"/notes"} />
                    <Route component={Chat} path={"/chats"} />
                    <Route component={Payment} exact path={"/payments"} />
                    <Route component={NotFound} exact path="*" />
                </Switch>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
