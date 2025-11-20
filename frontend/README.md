# User Directory 📋

A modern, responsive React application built with Vite for managing and browsing user data with advanced filtering and sorting capabilities.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)

## 📁 Project Structure

```
YOURDOST-ASSIGNMENT/
├── dsa/                 
├── frontend/            # This Project 
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── backend/             

## ✨ Features

- **👥 User Management** - Fetch and display user data from ReqRes API
- **🔍 Advanced Search** - Search users by name or email
- **📊 Smart Filtering** - Filter by email domain and first letter
- **🔄 Dynamic Sorting** - Sort by first name, last name, or email
- **📄 Pagination** - Navigate through multiple pages seamlessly
- **📱 Mobile Responsive** - Optimized for all devices
- **⚡ Loading States** - Beautiful spinner during data fetch

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation & Run

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3 with modern features
- **API**: ReqRes API
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📦 Project Structure (Frontend)

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx         # Main application component
│   ├── App.css         # Styling and responsive design
│   ├── main.jsx        # Application entry point
│   └── assets/
│       └── react.svg
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage Guide

### 🔍 Search & Filter
- **Search**: Type in search box to find users by name or email
- **Domain Filter**: Enter domain (e.g., `reqres.in`) 
- **First Letter**: Enter letter (e.g., `E`) for names starting with that letter

### 🔄 Sorting
- Sort by: First Name, Last Name, or Email

### 📄 Pagination
- Navigate between pages with Previous/Next buttons

## 🌐 API Integration

```javascript
API: https://reqres.in/api/users
Key: reqres-free-v1
Method: GET with pagination
```

## 📱 Responsive Design

- **Mobile First** approach
- **Tablet** optimized layouts
- **Desktop** enhanced experience

## 🚀 Deployment

### Vercel Deployment
```bash
npm install -g vercel
vercel --prod
```
## Deployed Link
https://your-dost-assign.vercel.app/

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open Pull Request


**Built with ⚡ Vite + React**
