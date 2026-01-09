const express = require('express');
const router = express.Router();
const {
  getAllSubscribers,
  subscribe,
  unsubscribe
} = require('../controllers/newsletterController');

router.get('/', getAllSubscribers);
router.post('/', subscribe);
router.delete('/:id', unsubscribe);

module.exports = router;