import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return(
            <div>
                <img src="https://i.ibb.co/GcG6Pgm/65ba488626025cff82f091336fbf94bb.gif" alt="" />
            </div>
        )
    }
    if(user){
        return children
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;