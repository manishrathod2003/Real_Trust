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

// Middleware
app.use(cors({
  origin: 'https://real-trust-beta.vercel.app',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⭐⭐⭐ IMPORTANT: Serve static files for images ⭐⭐⭐
// This serves files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directories if they don't exist
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

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));

// Test route - Homepage
app.get('/', (req, res) => {
  res.json({ 
    message: '🏠 Real House API is running!',
    endpoints: {
      projects: '/api/projects',
      clients: '/api/clients',
      contact: '/api/contact',
      newsletter: '/api/newsletter',
      uploads: '/uploads'
    }
  });
});

// Test image directory
app.get('/uploads/test', (req, res) => {
  try {
    const projectFiles = fs.readdirSync(projectsDir);
    const clientFiles = fs.readdirSync(clientsDir);
    
    res.json({
      message: 'Uploads directory info',
      projectsPath: projectsDir,
      clientsPath: clientsDir,
      projectImages: projectFiles,
      clientImages: clientFiles,
      totalImages: projectFiles.length + clientFiles.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found', path: req.path });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('\n🚀 ====================================');
  console.log(`   Server running on port ${PORT}`);
  console.log('   ====================================');
  console.log(`   🌐 API: http://localhost:${PORT}`);
  console.log(`   🖼️  Images: http://localhost:${PORT}/uploads`);
  console.log(`   📁 Uploads Path: ${uploadsDir}`);
  console.log('   ====================================\n');
});