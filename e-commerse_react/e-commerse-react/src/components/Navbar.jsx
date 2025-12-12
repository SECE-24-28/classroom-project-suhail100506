import { Link, useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

const NavigationBar = ({ cartCount = 0 }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        const userRole = sessionStorage.getItem('role') || '';
        setIsLoggedIn(loggedIn);
        setRole(userRole);
    }, [location]);

    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        setIsLoggedIn(false);
        setRole('');
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <Link to="/" className="text-2xl font-bold hover:text-gray-300">
                    Techify
                </Link>
                <div className="space-x-4 text-lg font-medium">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/products" className="hover:text-gray-300">Products</Link>
                    {isLoggedIn && <Link to="/orders" className="hover:text-gray-300">Orders</Link>}
                    {isLoggedIn && role === 'admin' && (
                        <Link to="/admin" className="hover:text-gray-300">Admin</Link>
                    )}
                </div>
                <div className="space-x-4 flex items-center">
                    <Link
                        to="/cart"
                        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                    >
                        Cart
                    </Link>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}
export default NavigationBar