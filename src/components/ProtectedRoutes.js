
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authentication/Auth';


const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth();
    
    if (!user) {
        return <Navigate to ="/"/>
    }else return children
}

export default ProtectedRoutes