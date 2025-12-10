import { useState } from "react";
import { useRef } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }
    const passwordRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", passwordRef.current.value);
    }
    console.log(username, passwordRef.current.value);
    return (
        <div className="w-[300px] mx-auto p-5 border-2 flex flex-col gap-4 bg-gray-200 rounded-md mt-10">
            <h1 className="text-3xl text-center mb-4">Login</h1>
            <input type="text"
                placeholder="Enter Username"
                className="p-2 border-2 rounded-md"
                value={username}
                onChange={handleNameChange} />
            <input type="password"
                placeholder="Enter Password"
                className="p-2 border-2 rounded-md"
                ref={passwordRef} />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-[100px] " onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default LoginForm