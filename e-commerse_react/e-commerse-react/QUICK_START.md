# Quick Start Guide

## Directory Structure

```
e-commerse_react/e-commerse-react/
├── frontend/     → React app (runs on localhost:5173)
├── backend/      → API server (runs on localhost:3000)
└── MAIN_README.md → Full documentation
```

## Start Development

### Terminal 1 - Backend:
```bash
cd backend
npm install      # First time only
npm start
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm install      # First time only
npm run dev
```

## Access

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Admin Login: admin@ecommerce.com / Admin@123

## Common Commands

### Frontend
```bash
cd frontend
npm run dev      # Development
npm run build    # Production build
npm run preview  # Preview build
```

### Backend
```bash
cd backend
npm start        # Start server
```

## Environment Setup

Create `backend/.env`:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

## Troubleshooting

- **Frontend can't connect to backend**: Make sure backend is running on port 3000
- **MongoDB errors**: Check your MONGODB_URI in backend/.env
- **Port already in use**: Kill the process or change the port
