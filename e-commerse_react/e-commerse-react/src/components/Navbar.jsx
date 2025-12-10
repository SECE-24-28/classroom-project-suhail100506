const NavigationBar = ({ cartCount = 0, onCartClick, onHomeClick }) => {
    return (
        <>
            <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">Techify</h1>
                <div className="space-x-4 text-lg font-medium">
                    <button onClick={onHomeClick} className="hover">Home</button>
                    <button className="hover">Services</button>
                    <button className="hover">About</button>
                    <button className="hover">Contact</button>
                </div>
                <div className="space-x-4 flex items-center">
                    <button
                        onClick={onCartClick}
                        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                    >
                        Cart
                    </button>
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Login</button>
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
                </div>
            </div>
        </>
    )
}
export default NavigationBar