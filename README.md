# 🏠 Real Trust - Full Stack Real Estate Platform

A comprehensive full-stack web application for real estate management with a beautiful landing page and powerful admin panel.

## 🔗 Live Demo

- **Landing Page:** [https://real-trust-beta.vercel.app](https://real-trust-beta.vercel.app)
- **Admin Panel:** [https://real-trust-admin.vercel.app](https://real-trust-admin.vercel.app)
- **Backend API:** [https://real-trust-backend-6k06.onrender.com](https://real-trust-backend-6k06.onrender.com)

---

## ✨ Features

### 🎨 Landing Page
- **Hero Section** with consultation form
- **Projects Showcase** - Display all real estate projects fetched from backend
- **Happy Clients** - Client testimonials with circular profile images
- **Contact Form** - Capture leads with full contact information (saves to database)
- **Newsletter Subscription** - Email subscription functionality (saves to database)
- **Responsive Design** - Mobile-first, fully responsive layout
- **Modern UI** - Clean design with smooth animations and decorative elements

### 🛠️ Admin Panel
- **Project Management** - Add, Edit, Delete projects with image upload
- **Client Management** - Add, Edit, Delete client testimonials with image upload
- **Contact Form Submissions** - View all contact form entries
- **Newsletter Subscribers** - Manage email subscriptions
- **Image Upload & Cropping** - Automatic image cropping to 450x350 pixels
- **Responsive Dashboard** - Mobile-friendly admin interface with sidebar navigation

### 🔧 Backend Features
- **RESTful API** - Well-structured API endpoints
- **Image Upload** - Multer integration for file uploads
- **Image Processing** - Sharp library for automatic image cropping (450x350)
- **Database** - MongoDB with Mongoose ODM
- **CORS Enabled** - Cross-origin resource sharing configured
- **Error Handling** - Comprehensive error management
- **Static File Serving** - Serves uploaded images

---

## 🛠️ Technologies Used

### Landing Page
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Fetch API** - HTTP requests to backend

### Admin Panel
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library for UI elements
- **Fetch API** - HTTP requests to backend

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload middleware
- **Sharp** - Image processing library for automatic cropping
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### Deployment
- **Landing Page:** Vercel
- **Admin Panel:** Vercel (separate deployment)
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 📁 Project Structure

```
real-trust-project/
├── frontend/              # Landing page React app
│   ├── src/
│   │   ├── components/
│   │   │   └── LandingPage.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── admin-panel/               # Admin panel React app
│   ├── src/
│   │   ├── components/
│   │   │   └── AdminPanel.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/                   # Node.js backend
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── Project.js
    │   ├── Client.js
    │   ├── Contact.js
    │   └── Newsletter.js
    ├── routes/
    │   ├── projectRoutes.js
    │   ├── clientRoutes.js
    │   ├── contactRoutes.js
    │   └── newsletterRoutes.js
    ├── controllers/
    │   ├── projectController.js
    │   ├── clientController.js
    │   ├── contactController.js
    │   └── newsletterController.js
    ├── middleware/
    │   └── upload.js
    ├── uploads/
    │   ├── projects/
    │   └── clients/
    ├── server.js
    ├── .env
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/manishrathod2003/Real-Trust.git
cd Real-Trust
```

#### 2. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

**Add the following to `.env`:**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

**Create upload directories:**
```bash
mkdir -p uploads/projects uploads/clients
```

**Start the backend server:**
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

#### 3. Landing Page Setup
```bash
# Navigate to frontend folder (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Landing page will run on `http://localhost:5173`

#### 4. Admin Panel Setup
```bash
# Navigate to admin-panel folder (from project root)
cd admin-panel

# Install dependencies
npm install

# Install lucide-react for icons
npm install lucide-react

# Start development server
npm run dev
```

Admin panel will run on `http://localhost:5174`

---

## 🔗 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (with image upload)
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get single client
- `POST /api/clients` - Create client (with image upload)
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Contact Form
- `GET /api/contact` - Get all contact submissions
- `POST /api/contact` - Submit contact form
- `DELETE /api/contact/:id` - Delete contact

### Newsletter
- `GET /api/newsletter` - Get all subscribers
- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter/:id` - Unsubscribe

---

## 🎯 Running the Project Locally

### Step 1: Start Backend
```bash
cd backend
npm run dev
```
✅ Backend running on `http://localhost:5000`

### Step 2: Start Landing Page
```bash
cd frontend
npm run dev
```
✅ Landing page running on `http://localhost:5173`

### Step 3: Start Admin Panel
```bash
cd admin-panel
npm run dev
```
✅ Admin panel running on `http://localhost:5174`

### Step 4: Access the Application
- **Landing Page:** `http://localhost:5173/`
- **Admin Panel:** `http://localhost:5174/`
- **Backend API:** `http://localhost:5000/`

---

## 📦 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/realtrust
NODE_ENV=development
```

### Landing Page
Update `API_URL` in `src/components/LandingPage.jsx`:
```javascript
const API_URL = 'http://localhost:5000/api';  // Development
// const API_URL = 'https://real-trust-backend-6k06.onrender.com/api';  // Production
```

### Admin Panel
Update `API_URL` in `src/components/AdminPanel.jsx`:
```javascript
const API_URL = 'http://localhost:5000/api';  // Development
// const API_URL = 'https://real-trust-backend-6k06.onrender.com/api';  // Production
```

---

## 🚀 Deployment

### Landing Page Deployment (Vercel)

```bash
cd frontend

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Deployed at:** [https://real-trust-beta.vercel.app](https://real-trust-beta.vercel.app)

### Admin Panel Deployment (Vercel)

```bash
cd admin-panel

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Deployed at:** [https://real-trust-admin.vercel.app](https://real-trust-admin.vercel.app)

### Backend Deployment (Render)

1. Create account on [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Root Directory:** `backend`
5. Add Environment Variables:
   - `MONGODB_URI`
   - `PORT=5000`
   - `NODE_ENV=production`
6. Deploy

**Deployed at:** [https://real-trust-backend-6k06.onrender.com](https://real-trust-backend-6k06.onrender.com)

### Database Setup (MongoDB Atlas)

1. Create account on [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster
3. Create database user
4. Whitelist IP address: `0.0.0.0/0` (allow all)
5. Get connection string
6. Update `.env` with connection string

---

## 📝 Usage Guide

### Adding Projects via Admin Panel

1. Navigate to [https://real-trust-admin.vercel.app](https://real-trust-admin.vercel.app)
2. Click on "Projects" tab
3. Click "Add Project" button
4. Fill in:
   - Project Name
   - Description
   - Upload Image (will auto-crop to 450x350)
5. Click "Add Project"
6. Project will appear on landing page

### Adding Clients via Admin Panel

1. Navigate to Admin Panel
2. Click on "Clients" tab
3. Click "Add Client" button
4. Fill in:
   - Client Name
   - Designation (e.g., CEO, Manager)
   - Testimonial Description
   - Upload Profile Image (will auto-crop to 450x350)
5. Click "Add Client"
6. Client will appear on landing page

### Viewing Contact Form Submissions

1. Navigate to Admin Panel
2. Click on "Contacts" tab
3. View all submitted contact forms with:
   - Full Name
   - Email Address
   - Mobile Number
   - City
   - Submission Date
4. Delete entries if needed

### Managing Newsletter Subscribers

1. Navigate to Admin Panel
2. Click on "Newsletter" tab
3. View all email subscribers with:
   - Email Address
   - Subscription Date
4. Remove subscribers if needed

---

## 🎨 Design Approach

### Separation of Concerns
- **Landing Page** and **Admin Panel** are separate React applications
- Each runs independently on different ports (5173 and 5174)
- Both communicate with the same backend API
- Allows for independent deployment and scaling

### Landing Page Design
- **Modern & Clean:** Professional real estate aesthetic
- **User-Focused:** Clear call-to-actions and easy navigation
- **Responsive:** Mobile-first design approach
- **Performance:** Optimized images and lazy loading
- **Accessibility:** Semantic HTML and proper contrast ratios
- **Visual Elements:** Circular images, decorative shapes, smooth animations

### Admin Panel Design
- **Dashboard Layout:** Sidebar navigation for easy access
- **CRUD Operations:** Intuitive create, read, update, delete interfaces
- **Visual Feedback:** Loading states and success/error messages
- **Responsive Tables:** Mobile-friendly data display
- **Icon Library:** Lucide React for consistent iconography

### Technical Decisions
- **Separate Deployments:** Landing page and admin panel deployed separately for better maintainability
- **Vite:** Fast development and build times
- **Tailwind CSS:** Rapid UI development with utility classes
- **MongoDB:** Flexible schema for real estate data
- **Image Processing:** Automatic cropping to 450x350 ensures consistent layouts
- **No Router:** Simple single-page applications, no routing complexity

---

## 🔧 Development Workflow

### 1. Planning
- Analyzed requirements and reference images
- Designed database schema with 4 collections
- Planned API endpoints for CRUD operations
- Decided on separate deployments for landing page and admin panel

### 2. Backend Development
- Set up Express server with proper middleware
- Created MongoDB models (Project, Client, Contact, Newsletter)
- Implemented RESTful API with proper status codes
- Added file upload with Multer
- Integrated Sharp for automatic image cropping to 450x350
- Configured CORS for multiple frontend origins
- Set up static file serving for images

### 3. Landing Page Development
- Built React components with hooks (useState, useEffect)
- Implemented API integration for projects and clients
- Created functional contact form with backend integration
- Added newsletter subscription with backend integration
- Styled with Tailwind CSS for responsive design
- Added decorative elements (circles, shapes, gradients)

### 4. Admin Panel Development
- Built separate React application
- Created dashboard layout with sidebar navigation
- Implemented CRUD operations for projects and clients
- Added image upload functionality with preview
- Created tables for contact submissions and subscribers
- Integrated Lucide React for icons
- Made fully responsive with Tailwind CSS

### 5. Testing
- Tested all API endpoints with Postman
- Verified image upload and automatic cropping
- Tested form submissions (contact & newsletter)
- Checked responsive design on multiple devices
- Verified data persistence in MongoDB
- Tested CRUD operations in admin panel

### 6. Deployment
- Deployed backend to Render with environment variables
- Deployed landing page to Vercel
- Deployed admin panel to Vercel (separate deployment)
- Configured MongoDB Atlas with proper security
- Updated API URLs in both frontends
- Verified all features work on live deployments

---

## 📈 Future Enhancements

- [ ] User authentication for admin panel
- [ ] Advanced search and filter for projects
- [ ] Email notifications for contact forms
- [ ] Property comparison feature
- [ ] Google Maps integration for property locations
- [ ] Payment gateway integration for bookings
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Analytics dashboard for admin
- [ ] Export data to CSV/Excel

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@manishrathod2003](https://github.com/manishrathod2003)
- LinkedIn: [Manish Rathod](https://linkedin.com/in/manish-rathod5421)
- Email: manishrathod2003@gmail.com

---

## 🙏 Acknowledgments

- Design inspiration from modern real estate websites
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Assignment provided by FLIPR

---

## 📞 Support

For support, email manishrathod2003@gmail.com or create an issue in the repository.

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ using React, Node.js, and MongoDB**
