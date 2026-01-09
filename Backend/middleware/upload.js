const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = req.path.includes('project') 
      ? 'uploads/projects/' 
      : 'uploads/clients/';
    
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Image cropping function (450x350)
const cropImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(450, 350, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputPath);
    
    // Delete original file
    fs.unlinkSync(inputPath);
    return true;
  } catch (error) {
    console.error('Image cropping error:', error);
    return false;
  }
};

module.exports = { upload, cropImage };