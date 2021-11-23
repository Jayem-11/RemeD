import auth from '../../services/auth';
import { Redirect, Route, useLocation } from "react-router-dom";

const DoctorRoute = ({ Comp, ...rest }) => {
    let location = useLocation();
    const { isAuthenticated } = auth

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <Comp {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
};

export default DoctorRoute;
