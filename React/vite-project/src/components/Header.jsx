import { Link } from "react-router";

const Header = () => {
    return (
        <header>
            <nav className="w-full bg-blue-200 p-4 font-bold flex justify-around">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/app">App</Link>
            </nav>
        </header>
    )
}
export default Header;