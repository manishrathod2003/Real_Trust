const Contact = require('../models/Contact');

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create contact
exports.createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    const contact = new Contact({
      fullName,
      email,
      mobile,
      city
    });

    const savedContact = await contact.save();
    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      data: savedContact 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};