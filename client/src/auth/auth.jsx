import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Redirect } from 'react-router-dom';
export const checkAuth = (Component) => {
    function Wrapper(props) {
        let role = localStorage.getItem("role")
        var user = true
        if (props.userAccess.indexOf(role) != -1) {
            return <Component />;
        } else {
            localStorage.clear()
            return <Navigate to="/" replace />;
        }
    }
    return Wrapper;
}
export default checkAuth;