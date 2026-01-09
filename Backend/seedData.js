// seedData.js - Run this file to populate MongoDB with test data
// Usage: node seedData.js

const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Import Models
const Project = require('./models/Project');
const Client = require('./models/Client');
const Contact = require('./models/Contact');
const Newsletter = require('./models/Newsletter');

// Sample Projects Data
const projects = [
      {
          name: 'Consultation',
          description: 'Project Name, Location',
          image: 'uploads/projects/pexels-brett-sayles-2881232.svg'
        },
        {
          name: 'Design',
          description: 'Project Name, Location',
          image: 'uploads/projects/pexels-brett-sayles-2881232-1.svg'
        },
        {
          name: 'Marketing & Design',
          description: 'Project Name, Location',
          image: 'uploads/projects/pexels-brett-sayles-2881232-2.svg'
        },
        {
          name: 'Consultation & Marketing',
          description: 'Project Name, Location',
          image: 'uploads/projects/pexels-brett-sayles-2881232-3.svg'
        },
        {
          name: 'Consultation',
          description: 'Project Name, Location',
          image: 'uploads/projects/pexels-fauxels-3182834.svg'
        }
    ];

// Sample Clients Data
const clients = [
      {
        name: 'Rowhan Smith',
        designation: 'CEO, Foreclosure',
        description: 'Excellent service! They helped us find our dream home.',
        image: 'uploads/clients/Ellipse 29.svg'
      },
      {
        name: 'Shipra Kayak',
        designation: 'Brand Designer',
        description: 'Outstanding experience from start to finish. Highly recommend their services.',
        image: 'uploads/clients/Ellipse 28.svg'
      },
      {
        name: 'John Lepore',
        designation: 'CEO, Foreclosure',
        description: 'Made buying our first property easy and enjoyable.',
        image: 'uploads/clients/Ellipse 31.svg'
      },
      {
        name: 'Marry Freeman',
        designation: 'Marketing Manager at Muxi',
        description: 'Professional and reliable team. Understood our needs perfectly.',
        image: 'uploads/clients/Ellipse 33.svg'
      },
      {
        name: 'Lucy Anderson',
        designation: 'Sales Rep at Alibaba',
        description: 'Best real estate service ever! Excellent negotiation skills.',
        image: 'uploads/clients/Ellipse 35.svg'
      }
    ];

// Sample Contact Form Submissions
const contacts = [
  {
    fullName: 'Amit Sharma',
    email: 'amit.sharma@example.com',
    mobile: '+91 98765 43210',
    city: 'Mumbai'
  },
  {
    fullName: 'Priya Patel',
    email: 'priya.patel@example.com',
    mobile: '+91 98765 43211',
    city: 'Delhi'
  },
  {
    fullName: 'Rahul Kumar',
    email: 'rahul.kumar@example.com',
    mobile: '+91 98765 43212',
    city: 'Bangalore'
  },
  {
    fullName: 'Sneha Gupta',
    email: 'sneha.gupta@example.com',
    mobile: '+91 98765 43213',
    city: 'Pune'
  },
  {
    fullName: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    mobile: '+91 98765 43214',
    city: 'Hyderabad'
  }
];

// Sample Newsletter Subscribers
const subscribers = [
  { email: 'subscriber1@example.com' },
  { email: 'subscriber2@example.com' },
  { email: 'subscriber3@example.com' },
  { email: 'info@realestate.com' },
  { email: 'contact@property.com' }
];

// Seed Function
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Project.deleteMany({});
    await Client.deleteMany({});
    await Contact.deleteMany({});
    await Newsletter.deleteMany({});
    
    // Insert new data
    console.log('📝 Inserting projects...');
    await Project.insertMany(projects);
    console.log(`✅ ${projects.length} projects added`);
    
    console.log('📝 Inserting clients...');
    await Client.insertMany(clients);
    console.log(`✅ ${clients.length} clients added`);
    
    console.log('📝 Inserting contacts...');
    await Contact.insertMany(contacts);
    console.log(`✅ ${contacts.length} contacts added`);
    
    console.log('📝 Inserting newsletter subscribers...');
    await Newsletter.insertMany(subscribers);
    console.log(`✅ ${subscribers.length} subscribers added`);
    
    console.log('\n🎉 Database seeding completed successfully!');
    
    // Display summary
    console.log('\n📊 Summary:');
    console.log(`   Projects: ${projects.length}`);
    console.log(`   Clients: ${clients.length}`);
    console.log(`   Contacts: ${contacts.length}`);
    console.log(`   Subscribers: ${subscribers.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed function
seedDatabase();