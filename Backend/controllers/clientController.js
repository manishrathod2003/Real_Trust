const Client = require('../models/Client');
const { cropImage } = require('../middleware/upload');
const path = require('path');

// Get all clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single client
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create client
exports.createClient = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    // Crop image to 450x350
    const originalPath = req.file.path;
    const croppedPath = originalPath.replace(path.extname(originalPath), '-cropped' + path.extname(originalPath));
    
    await cropImage(originalPath, croppedPath);

    const client = new Client({
      name,
      designation,
      description,
      image: croppedPath.replace(/\\/g, '/')
    });

    const savedClient = await client.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update client
exports.updateClient = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const updateData = { name, designation, description };

    if (req.file) {
      const originalPath = req.file.path;
      const croppedPath = originalPath.replace(path.extname(originalPath), '-cropped' + path.extname(originalPath));
      await cropImage(originalPath, croppedPath);
      updateData.image = croppedPath.replace(/\\/g, '/');
    }

    const client = await Client.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete client
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};