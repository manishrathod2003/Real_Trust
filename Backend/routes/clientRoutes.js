const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/upload');
const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/clientController');

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/', upload.single('image'), createClient);
router.put('/:id', upload.single('image'), updateClient);
router.delete('/:id', deleteClient);

module.exports = router;