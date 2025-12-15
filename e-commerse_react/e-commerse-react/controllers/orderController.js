const Order = require('../models/Order');
const Cart = require('../models/Cart');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId }).sort({ createdAt: -1 });
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders', message: error.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const { products, shippingInfo, paymentMethod, subtotal, shipping, total } = req.body;
        if (!products || products.length === 0) return res.status(400).json({ error: 'No products in order' });
        if (!shippingInfo || !shippingInfo.fullName || !shippingInfo.email) {
            return res.status(400).json({ error: 'Incomplete shipping information' });
        }
        const orderProducts = products.map(item => ({
            product: item.product || item.productId,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity
        }));
        const newOrder = await Order.create({
            user: req.user.userId,
            products: orderProducts,
            shippingInfo,
            paymentMethod,
            subtotal,
            shipping: shipping || 40,
            total
        });
        await Cart.findOneAndUpdate({ user: req.user.userId }, { products: [] });
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order', message: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id, user: req.user.userId });
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch order', message: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
        if (!validStatuses.includes(status)) return res.status(400).json({ error: 'Invalid status' });
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.status(200).json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update order status', message: error.message });
    }
};

const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ _id: req.params.id, user: req.user.userId });
        if (!order) return res.status(404).json({ error: 'Order not found' });
        if (order.status !== 'pending') return res.status(400).json({ error: 'Cannot cancel order' });
        order.status = 'cancelled';
        await order.save();
        res.status(200).json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        res.status(500).json({ error: 'Failed to cancel order', message: error.message });
    }
};

module.exports = { getOrders, createOrder, getOrderById, updateOrderStatus, cancelOrder };