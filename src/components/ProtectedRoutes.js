
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    if (!user) {
        return <Navigate to ="/"/>
    }else return children
}

export default ProtectedRoutes