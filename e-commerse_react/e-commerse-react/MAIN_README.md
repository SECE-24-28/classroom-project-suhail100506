# E-Commerce Full Stack Application

A complete e-commerce application with separate frontend and backend.

## Project Structure

```
e-commerse_react/e-commerse-react/
├── frontend/           # React frontend application
│   ├── src/           # React components, contexts, assets
│   ├── public/        # Static files
│   ├── index.html     # Entry HTML
│   ├── vite.config.js # Vite configuration
│   └── package.json   # Frontend dependencies
│
├── backend/           # Node.js/Express backend API
│   ├── config/        # Database configuration
│   ├── controllers/   # Route controllers
│   ├── middleware/    # Authentication middleware
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── data/          # JSON data files
│   ├── server.js      # Server entry point
│   └── package.json   # Backend dependencies
│
└── README.md          # This file
```

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Axios
- React Toastify
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- bcrypt
- CORS

## Quick Start

### 1. Start Backend

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:3000`

### 2. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Environment Variables

### Backend (.env)

Create a `.env` file in the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

## Default Admin Account

- **Email**: admin@ecommerce.com
- **Password**: Admin@123

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Products
- `GET /products` - Get all products
- `POST /products` - Add product (Admin only)

### Cart
- `GET /carts` - Get user cart
- `POST /carts` - Add item to cart
- `PUT /carts/:productId` - Update item quantity
- `DELETE /carts/:productId` - Remove item from cart

### Orders
- `GET /orders` - Get user orders
- `POST /orders` - Create order
- `GET /orders/:id` - Get order by ID
- `PUT /orders/:id/status` - Update order status
- `PUT /orders/:id/cancel` - Cancel order

## Development

### Frontend Development
```bash
cd frontend
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend Development
```bash
cd backend
npm start          # Start server
npm run dev        # Start with nodemon (if configured)
```

## Deployment

### Frontend
Build the frontend:
```bash
cd frontend
npm run build
```

Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

### Backend
Deploy the backend folder to your Node.js hosting service (Render, Railway, Heroku, etc.)

Make sure to set environment variables on your hosting platform.

## Features

- User authentication (Register/Login)
- Product browsing
- Shopping cart management
- Order placement
- Order history
- Admin panel for product management
- Responsive design
- Toast notifications

## License

MIT
