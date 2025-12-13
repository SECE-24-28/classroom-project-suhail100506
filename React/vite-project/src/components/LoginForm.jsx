import { useState, useRef } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-hot-toast"
const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()
    const passwordRef = useRef('')
    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }
    console.log(userName)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(userName, passwordRef.current.value)
            const { data } = await axios.post('http://localhost:3000/auth/login', {
                email: userName,
                password: passwordRef.current.value
            });
            console.log("respone =>", data);
            toast.success(data.message);
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate('/product');
        } catch (error) {
            console.log("Error =>", error);
            toast.error(error.response?.data?.error || "Login Failed");
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter your password"
                            ref={passwordRef}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account?{' '}
                        <button
                            type="button"
                            onClick={() => navigate('/register')}
                            className="text-blue-500 hover:underline"
                        >
                            Register here
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default LoginForm;