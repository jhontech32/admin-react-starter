import { Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const ProtectedRoute = (props) => {
    const { isLogedIn } = props

    console.log('isLogedIndd', isLogedIn)

    return (
        isLogedIn ? <Dashboard /> : (<Navigate to='/' />)
    )
}

export default ProtectedRoute