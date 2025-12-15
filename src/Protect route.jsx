import { auth } from "./firebase";
import { Navigate, useLocation } from "react-router-dom";

function Protect({ children }) {
    const user = auth.currentUser;
    const location = useLocation();

    if(!user) {
        return <Navigate to='/signin' replace state={{from: location.pathname}}/>;
    }

    return children;
}

export default Protect;