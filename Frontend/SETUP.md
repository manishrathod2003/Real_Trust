# 🚀 Quick Setup Guide

## ⚡ Fast Setup (Copy-Paste Commands)

### 1️⃣ Backend Setup
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install express mongoose dotenv cors multer sharp

# Create .env file
cat > .env << EOF
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
NODE_ENV=development
EOF

# Create directories
mkdir -p uploads/projects uploads/clients

# Install nodemon for development
npm install --save-dev nodemon

# Start server
npm run dev
```

### 2️⃣ Frontend Setup
```bash
# Navigate to frontend (from project root)
cd frontend

# Install dependencies
npm install react-router-dom lucide-react

# Start development server
npm run dev
```

### 3️⃣ Open in Browser
- Landing Page: http://localhost:5173/
- Admin Panel: http://localhost:5173/admin
- Backend API: http://localhost:5000/

---

## 📋 Package.json Scripts

### Backend package.json
Add these scripts:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### Frontend package.json
Already has:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## 🗂️ File Checklist

### Backend Files Required:
- ✅ `server.js`
- ✅ `config/db.js`
- ✅ `models/Project.js`
- ✅ `models/Client.js`
- ✅ `models/Contact.js`
- ✅ `models/Newsletter.js`
- ✅ `routes/projectRoutes.js`
- ✅ `routes/clientRoutes.js`
- ✅ `routes/contactRoutes.js`
- ✅ `routes/newsletterRoutes.js`
- ✅ `controllers/projectController.js`
- ✅ `controllers/clientController.js`
- ✅ `controllers/contactController.js`
- ✅ `controllers/newsletterController.js`
- ✅ `middleware/upload.js`
- ✅ `.env`
- ✅ `package.json`

### Frontend Files Required:
- ✅ `src/App.jsx` (with routing)
- ✅ `src/components/LandingPage.jsx`
- ✅ `src/components/AdminPanel.jsx`
- ✅ `src/main.jsx`
- ✅ `src/index.css`
- ✅ `package.json`
- ✅ `vite.config.js`
- ✅ `tailwind.config.js`

---

## 🧪 Testing Commands

### Test Backend
```bash
# Test if server is running
curl http://localhost:5000/

# Test projects endpoint
curl http://localhost:5000/api/projects

# Test image serving
curl http://localhost:5000/uploads/test
```

### Test Frontend
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment Commands

### Deploy Frontend to Vercel
```bash
cd frontend

# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Deploy Backend to Render
```bash
# Push to GitHub first
git add .
git commit -m "Ready for deployment"
git push origin main

# Then use Render dashboard to connect repo
```

---

## 🔍 Troubleshooting Commands

### Check if ports are in use
```bash
# Check port 5000 (backend)
lsof -i :5000

# Check port 5173 (frontend)
lsof -i :5173

# Kill process if needed
kill -9 <PID>
```

### Clear node_modules and reinstall
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Check MongoDB connection
```bash
# In backend folder
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('✅ Connected')).catch(err => console.log('❌ Error:', err));"
```

---

## 💾 Git Commands

### Initial Setup
```bash
# Initialize git (if not already)
git init

# Create .gitignore
cat > .gitignore << EOF
node_modules/
.env
.DS_Store
dist/
uploads/
*.log
EOF

# First commit
git add .
git commit -m "Initial commit: Real House project"

# Add remote
git remote add origin https://github.com/your-username/real-house-project.git

# Push to GitHub
git push -u origin main
```

---

## 🎯 Daily Development Workflow

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - Git operations
git status
git add .
git commit -m "Your changes"
git push
```

---

## 📊 Database Setup (MongoDB Atlas)

### Quick Setup Steps:
1. Go to https://cloud.mongodb.com
2. Sign up / Log in
3. Create New Project → "RealHouse"
4. Build a Database → Free Tier (M0)
5. Choose Cloud Provider → AWS
6. Region → Choose nearest
7. Cluster Name → "Cluster0"
8. Create Cluster
9. Security → Database Access → Add New User
   - Username: `admin`
   - Password: (auto-generate)
   - Role: `Read and write to any database`
10. Network Access → Add IP Address → `0.0.0.0/0` (Allow from anywhere)
11. Connect → Connect your application
12. Copy connection string
13. Replace `<password>` with your password
14. Update `.env` file

### Connection String Format:
```
mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/realhouse?retryWrites=true&w=majority
```

---

## ✅ Verification Checklist

Before submitting:
- [ ] Backend runs on port 5000
- [ ] Frontend runs on port 5173
- [ ] MongoDB connection successful
- [ ] Can add projects in admin panel
- [ ] Can add clients in admin panel
- [ ] Contact form works
- [ ] Newsletter subscription works
- [ ] Images display correctly
- [ ] All routes work (/  and /admin)
- [ ] Deployed to Vercel (frontend)
- [ ] Deployed to Render (backend)
- [ ] README.md is complete
- [ ] .gitignore includes node_modules and .env
- [ ] GitHub repository is public

---

## 🚨 Common Errors & Fixes

### Error: "Cannot find module 'express'"
```bash
cd backend
npm install
```

### Error: "Port 5000 already in use"
```bash
lsof -i :5000
kill -9 <PID>
```

### Error: "MongoDB connection failed"
- Check MongoDB URI in .env
- Verify IP whitelist in MongoDB Atlas
- Ensure password doesn't have special characters

### Error: "CORS policy error"
```javascript
// In server.js, add:
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Error: "Images not loading"
```javascript
// In server.js, ensure this line exists:
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
```

---

**Need help? Create an issue in the repository!** 🚀