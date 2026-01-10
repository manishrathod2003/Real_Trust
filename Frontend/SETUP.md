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

✅ Backend running on `http://localhost:5000`

---

### 2️⃣ Landing Page Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Landing page running on `http://localhost:5173`

---

### 3️⃣ Admin Panel Setup
```bash
# Navigate to admin-panel folder
cd admin-panel

# Install dependencies
npm install

# Install lucide-react for icons
npm install lucide-react

# Start development server
npm run dev
```

✅ Admin panel running on `http://localhost:5174`

---

### 4️⃣ Open in Browser
- **Landing Page:** http://localhost:5173/
- **Admin Panel:** http://localhost:5174/
- **Backend API:** http://localhost:5000/

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

### Landing Page & Admin Panel package.json
Both already have:
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

### Landing Page Files Required:
- ✅ `src/App.jsx`
- ✅ `src/components/LandingPage.jsx`
- ✅ `src/main.jsx`
- ✅ `src/index.css`
- ✅ `package.json`
- ✅ `vite.config.js`
- ✅ `tailwind.config.js`

### Admin Panel Files Required:
- ✅ `src/App.jsx`
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

# Test clients endpoint
curl http://localhost:5000/api/clients

# Test image serving
curl http://localhost:5000/uploads/test
```

### Test Landing Page
```bash
cd frontend

# Build for production
npm run build

# Preview production build
npm run preview
```

### Test Admin Panel
```bash
cd admin-panel

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment Commands

### Deploy Landing Page to Vercel
```bash
cd frontend

# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Live at:** https://real-trust-beta.vercel.app

---

### Deploy Admin Panel to Vercel
```bash
cd admin-panel

# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Live at:** https://real-trust-admin.vercel.app

---

### Deploy Backend to Render

**Push to GitHub first:**
```bash
# From project root
git add .
git commit -m "Ready for deployment"
git push origin main
```

**Then on Render Dashboard:**
1. New → Web Service
2. Connect GitHub repo
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. Add Environment Variables:
   - `MONGODB_URI=your_connection_string`
   - `PORT=5000`
   - `NODE_ENV=production`
7. Deploy

**Live at:** https://real-trust-backend-6k06.onrender.com

---

## 🔍 Troubleshooting Commands

### Check if ports are in use
```bash
# Check port 5000 (backend)
lsof -i :5000

# Check port 5173 (landing page)
lsof -i :5173

# Check port 5174 (admin panel)
lsof -i :5174

# Kill process if needed
kill -9 <PID>
```

### Clear node_modules and reinstall
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Landing Page
cd landing-page
rm -rf node_modules package-lock.json
npm install

# Admin Panel
cd admin-panel
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
git commit -m "Initial commit: Real Trust project"

# Add remote
git remote add origin https://github.com/your-username/real-trust-project.git

# Push to GitHub
git push -u origin main
```

---

## 🎯 Daily Development Workflow

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Landing Page
cd frontend
npm run dev

# Terminal 3 - Admin Panel
cd admin-panel
npm run dev

# Terminal 4 - Git operations
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
3. Create New Project → "RealTrust"
4. Build a Database → Free Tier (M0)
5. Choose Cloud Provider → AWS
6. Region → Choose nearest
7. Cluster Name → "Cluster0"
8. Create Cluster
9. Security → Database Access → Add New User
   - Username: `admin`
   - Password: (auto-generate and save it)
   - Role: `Read and write to any database`
10. Network Access → Add IP Address → `0.0.0.0/0` (Allow from anywhere)
11. Connect → Connect your application
12. Copy connection string
13. Replace `<password>` with your password
14. Update `.env` file

### Connection String Format:
```
mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/realtrust?retryWrites=true&w=majority
```

---

## 🔧 API URL Configuration

### For Local Development:

**Landing Page** (`landing-page/src/components/LandingPage.jsx`):
```javascript
const API_URL = 'http://localhost:5000/api';
```

**Admin Panel** (`admin-panel/src/components/AdminPanel.jsx`):
```javascript
const API_URL = 'http://localhost:5000/api';
const BASE_URL = 'http://localhost:5000';
```

### For Production:

**Landing Page**:
```javascript
const API_URL = 'https://real-trust-backend-6k06.onrender.com/api';
```

**Admin Panel**:
```javascript
const API_URL = 'https://real-trust-backend-6k06.onrender.com/api';
const BASE_URL = 'https://real-trust-backend-6k06.onrender.com';
```

---

## ✅ Verification Checklist

### Before Deployment:
- [ ] Backend runs on port 5000
- [ ] Landing page runs on port 5173
- [ ] Admin panel runs on port 5174
- [ ] MongoDB connection successful
- [ ] Can add projects in admin panel
- [ ] Projects show on landing page
- [ ] Can add clients in admin panel
- [ ] Clients show on landing page
- [ ] Contact form works
- [ ] Newsletter subscription works
- [ ] Images upload and display correctly
- [ ] Image cropping works (450x350)

### After Deployment:
- [ ] Landing page deployed to Vercel
- [ ] Admin panel deployed to Vercel
- [ ] Backend deployed to Render
- [ ] MongoDB Atlas configured
- [ ] API URLs updated in both frontends
- [ ] All features work on live sites
- [ ] Images load on live deployments
- [ ] No CORS errors
- [ ] Test on mobile devices

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

### Error: "Port 5173 already in use"
```bash
# Vite will automatically use next available port (5174, 5175, etc.)
# Or manually kill the process
lsof -i :5173
kill -9 <PID>
```

### Error: "MongoDB connection failed"
- Check MongoDB URI in .env
- Verify IP whitelist in MongoDB Atlas
- Ensure password doesn't have special characters (use alphanumeric)

### Error: "CORS policy error"
```javascript
// In server.js, ensure proper CORS configuration:
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://real-trust-beta.vercel.app',
    'https://real-trust-admin.vercel.app'
  ],
  credentials: true
}));
```

### Error: "Images not loading"
```javascript
// In server.js, ensure this line exists:
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
```

### Error: "lucide-react not found" (Admin Panel)
```bash
cd admin-panel
npm install lucide-react
```

---

## 📱 Testing on Different Ports

### If Ports Conflict:

**Landing Page (default 5173):**
```bash
# If port busy, Vite will ask to use 5174
npm run dev
# Press 'y' to continue with different port
```

**Admin Panel (usually 5174):**
```bash
# If port busy, Vite will ask to use 5175
npm run dev
# Press 'y' to continue with different port
```

**Backend (must be 5000):**
```bash
# If port 5000 is busy, kill the process
lsof -i :5000
kill -9 <PID>
npm run dev
```


---

## 🎯 Complete Setup Flow

```bash
# Step 1: Clone and setup
git clone <your-repo-url>
cd real-trust-project

# Step 2: Backend
cd backend
npm install
# Create .env with MongoDB URI
mkdir -p uploads/projects uploads/clients
npm run dev
# Keep this terminal running

# Step 3: Landing Page (new terminal)
cd landing-page
npm install
npm run dev
# Keep this terminal running

# Step 4: Admin Panel (new terminal)
cd admin-panel
npm install
npm install lucide-react
npm run dev
# Keep this terminal running

# Step 5: Test
# Open http://localhost:5173 (Landing Page)
# Open http://localhost:5174 (Admin Panel)
# Test all features
```

---

**Need help? Create an issue in the repository!** 🚀
