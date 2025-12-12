import { useState, useEffect } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {

        const storedUsername = sessionStorage.getItem('username') || 'Guest';
        setUsername(storedUsername);

        const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        setOrders(storedOrders);
    }, []);


    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Orders</h1>
                    <p className="text-gray-600">Welcome back, {username}!</p>
                </div>

                {orders.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Orders Yet</h2>
                        <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here!</p>
                        <a href="/products" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                            Browse Products
                        </a>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            Order #{order.id || index + 1}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {order.date || new Date().toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {order.status || 'Processing'}
                                    </span>
                                </div>

                                <div className="border-t pt-4">
                                    {order.items && order.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex justify-between items-center mb-2">
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-semibold">₹{item.price * item.quantity}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t mt-4 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">Total:</span>
                                        <span className="text-lg font-bold text-blue-600">
                                            ₹{order.total || 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
