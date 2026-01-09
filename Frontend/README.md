# 🏠 Real House - Full Stack Real Estate Platform

A comprehensive full-stack web application for real estate management with a beautiful landing page and powerful admin panel.

## 🔗 Live Demo

- **Landing Page:** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **Admin Panel:** [https://your-frontend-url.vercel.app/admin](https://your-frontend-url.vercel.app/admin)
- **Backend API:** [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)


## ✨ Features

### 🎨 Landing Page
- **Hero Section** with consultation form
- **Projects Showcase** - Display all real estate projects
- **Happy Clients** - Client testimonials with circular profile images
- **Contact Form** - Capture leads with full contact information
- **Newsletter Subscription** - Email subscription functionality
- **Responsive Design** - Mobile-first, fully responsive layout
- **Modern UI** - Clean design with smooth animations

### 🛠️ Admin Panel
- **Project Management** - Add, Edit, Delete projects with image upload
- **Client Management** - Add, Edit, Delete client testimonials
- **Contact Form Submissions** - View all contact form entries
- **Newsletter Subscribers** - Manage email subscriptions
- **Image Upload & Cropping** - Automatic image cropping to 450x350
- **Responsive Dashboard** - Mobile-friendly admin interface

### 🔧 Backend Features
- **RESTful API** - Well-structured API endpoints
- **Image Upload** - Multer integration for file uploads
- **Image Processing** - Sharp library for automatic image cropping
- **Database** - MongoDB with Mongoose ODM
- **CORS Enabled** - Cross-origin resource sharing
- **Error Handling** - Comprehensive error management

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload middleware
- **Sharp** - Image processing library
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### Deployment
- **Frontend:** Vercel
- **Backend:** Render / Railway
- **Database:** MongoDB Atlas

---

## 📁 Project Structure

```
real-house-project/
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── LandingPage.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/                    # Node.js backend
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
git clone https://github.com/your-username/real-house-project.git
cd real-house-project
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

#### 3. Frontend Setup
```bash
# Navigate to frontend folder (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

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

### Step 2: Start Frontend
```bash
cd frontend
npm run dev
```
✅ Frontend running on `http://localhost:5173`

### Step 3: Access the Application
- **Landing Page:** `http://localhost:5173/`
- **Admin Panel:** `http://localhost:5173/admin`

---

## 📦 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/realhouse
NODE_ENV=development
```

### Frontend
Update `API_URL` in components:
```javascript
// In LandingPage.jsx and AdminPanel.jsx
const API_URL = 'http://localhost:5000/api';  // Development
// const API_URL = 'https://your-backend-url.com/api';  // Production
```

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
cd frontend

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Or use Vercel Dashboard:**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Backend Deployment (Render)

1. Create account on [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Add Environment Variables:
   - `MONGODB_URI`
   - `PORT=5000`
   - `NODE_ENV=production`
6. Deploy

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

1. Navigate to `http://localhost:5173/admin`
2. Click on "Projects" tab
3. Click "Add Project" button
4. Fill in:
   - Project Name
   - Description
   - Upload Image (will auto-crop to 450x350)
5. Click "Add Project"

### Adding Clients via Admin Panel

1. Navigate to Admin Panel
2. Click on "Clients" tab
3. Click "Add Client" button
4. Fill in:
   - Client Name
   - Designation (e.g., CEO, Manager)
   - Testimonial Description
   - Upload Profile Image
5. Click "Add Client"

### Viewing Contact Form Submissions

1. Navigate to Admin Panel
2. Click on "Contacts" tab
3. View all submitted contact forms
4. Delete entries if needed

### Managing Newsletter Subscribers

1. Navigate to Admin Panel
2. Click on "Newsletter" tab
3. View all email subscribers
4. Remove subscribers if needed

---

## 🎨 Design Approach

### Landing Page Design
- **Modern & Clean:** Professional real estate aesthetic
- **User-Focused:** Clear call-to-actions and easy navigation
- **Responsive:** Mobile-first design approach
- **Performance:** Optimized images and lazy loading
- **Accessibility:** Semantic HTML and proper contrast ratios

### Admin Panel Design
- **Dashboard Layout:** Sidebar navigation for easy access
- **CRUD Operations:** Intuitive create, read, update, delete interfaces
- **Visual Feedback:** Loading states and success/error messages
- **Responsive Tables:** Mobile-friendly data display

### Technical Decisions
- **React + Vite:** Fast development and build times
- **Tailwind CSS:** Rapid UI development with utility classes
- **MongoDB:** Flexible schema for real estate data
- **Image Processing:** Automatic cropping ensures consistent layouts

---

## 🔧 Development Workflow

### 1. Planning
- Analyzed requirements and reference images
- Designed database schema
- Planned API endpoints

### 2. Backend Development
- Set up Express server
- Created MongoDB models
- Implemented RESTful API
- Added file upload with Multer
- Integrated Sharp for image processing

### 3. Frontend Development
- Built React components
- Implemented routing with React Router
- Styled with Tailwind CSS
- Connected to backend API
- Added form validation

### 4. Testing
- Tested all API endpoints
- Verified image upload and cropping
- Tested form submissions
- Checked responsive design

### 5. Deployment
- Deployed backend to Render
- Deployed frontend to Vercel
- Configured MongoDB Atlas
- Updated environment variables

---

## 🐛 Known Issues & Solutions

### Issue: Images not displaying
**Solution:** Ensure backend static file serving is configured:
```javascript
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
```

### Issue: CORS errors
**Solution:** Add CORS middleware in backend:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

### Issue: MongoDB connection failed
**Solution:** Check MongoDB URI and whitelist IP address in MongoDB Atlas

---

## 📈 Future Enhancements

- [ ] User authentication for admin panel
- [ ] Advanced search and filter for projects
- [ ] Email notifications for contact forms
- [ ] Property comparison feature
- [ ] Google Maps integration
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Dark mode theme

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

**Manish Rathod**
- GitHub: https://github.com/manishrathod2003
- LinkedIn: [Your Name](https://linkedin.com/in/manish-rathod5421)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Design inspiration from modern real estate websites
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Assignment provided by FLIPR

---

## 📞 Support

For support, email your.email@example.com or create an issue in the repository.

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ using React, Node.js, and MongoDB**