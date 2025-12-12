import { useContext } from 'react';
import { AppContext } from '../App';
import AddProduct from './AddProduct';

const Admin = () => {
    const { addProduct } = useContext(AppContext);
    const username = sessionStorage.getItem('username') || 'Admin';

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Welcome, {username}! Manage your products here.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
                    <AddProduct onAddProduct={addProduct} />
                </div>


            </div>
        </div>
    );
};

export default Admin;