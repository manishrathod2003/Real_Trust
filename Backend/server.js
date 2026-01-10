const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ⭐⭐⭐ CORS CONFIGURATION ⭐⭐⭐
const allowedOrigins = [
  "https://real-trust-beta.vercel.app",
  "https://real-trust-admin.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, server-to-server)
    if (!origin) return callback(null, true);

    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Allow any localhost in development mode
    if (origin.startsWith('http://localhost:')) {
      return callback(null, true);
    }

    // Not allowed
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200
}));

// ⭐⭐⭐ MIDDLEWARE ⭐⭐⭐
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ⭐⭐⭐ SERVE STATIC FILES ⭐⭐⭐
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ⭐⭐⭐ CREATE UPLOAD DIRECTORIES ⭐⭐⭐
const uploadsDir = path.join(__dirname, 'uploads');
const projectsDir = path.join(__dirname, 'uploads/projects');
const clientsDir = path.join(__dirname, 'uploads/clients');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
  console.log('✅ Created uploads directory');
}
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
  console.log('✅ Created uploads/projects directory');
}
if (!fs.existsSync(clientsDir)) {
  fs.mkdirSync(clientsDir, { recursive: true });
  console.log('✅ Created uploads/clients directory');
}

// ⭐⭐⭐ API ROUTES ⭐⭐⭐
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));

// ⭐⭐⭐ TEST ROUTES ⭐⭐⭐
// Homepage - API Info
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: '🏠 Real Trust Backend API is running!',
    version: '1.0.0',
    endpoints: {
      projects: '/api/projects',
      clients: '/api/clients',
      contact: '/api/contact',
      newsletter: '/api/newsletter',
      uploads: '/uploads',
      test: '/uploads/test'
    },
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Test uploads directory
app.get('/uploads/test', (req, res) => {
  try {
    const projectFiles = fs.readdirSync(projectsDir);
    const clientFiles = fs.readdirSync(clientsDir);
    
    res.json({
      success: true,
      message: 'Uploads directory info',
      paths: {
        uploads: uploadsDir,
        projects: projectsDir,
        clients: clientsDir
      },
      files: {
        projects: projectFiles,
        clients: clientFiles
      },
      stats: {
        totalProjects: projectFiles.length,
        totalClients: clientFiles.length,
        totalImages: projectFiles.length + clientFiles.length
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    success: true,
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// ⭐⭐⭐ ERROR HANDLING ⭐⭐⭐
// CORS Error Handler
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'CORS Error: Origin not allowed',
      origin: req.headers.origin
    });
  }
  next(err);
});

// General Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 Handler - Must be last
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// ⭐⭐⭐ START SERVER ⭐⭐⭐
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('\n🚀 ========================================');
  console.log(`   Real Trust Backend Server`);
  console.log('   ========================================');
  console.log(`   📍 Port: ${PORT}`);
  console.log(`   🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('   ========================================');
  console.log(`   🌐 Local API: http://localhost:${PORT}`);
  console.log(`   🖼️  Uploads: http://localhost:${PORT}/uploads`);
  console.log(`   📁 Upload Path: ${uploadsDir}`);
  console.log('   ========================================');
  console.log('   ✅ Allowed Origins:');
  allowedOrigins.forEach(origin => {
    console.log(`      • ${origin}`);
  });
  console.log('   ========================================');
  console.log('   📡 Available Routes:');
  console.log('      • GET  /');
  console.log('      • GET  /health');
  console.log('      • GET  /uploads/test');
  console.log('      • ALL  /api/projects');
  console.log('      • ALL  /api/clients');
  console.log('      • POST /api/contact');
  console.log('      • POST /api/newsletter');
  console.log('   ========================================\n');
});