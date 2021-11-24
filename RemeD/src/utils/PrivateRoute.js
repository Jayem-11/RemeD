import auth from '../services/auth';
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ Comp, ...rest }) => {
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

export default PrivateRoute;
