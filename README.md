# AI-Based Smart Complaint Management System

## Project Overview

The AI-Based Smart Complaint Management System is a full stack MERN application developed to simplify the complaint registration and tracking process.  
This system allows users to register complaints online and uses Artificial Intelligence to analyze complaints automatically.

The application can:
- Detect complaint priority
- Recommend the responsible department
- Generate complaint summaries
- Generate automatic responses

The project is developed using:
- MongoDB
- Express.js
- React.js
- Node.js
- OpenRouter AI API

---

# Objective

The main objective of this project is to create an intelligent complaint management platform where users can easily submit complaints and administrators can manage them efficiently.

The system also improves complaint handling using AI-powered automation.

---

# Features

## User Features

- User Registration and Login
- Secure Authentication using JWT
- Register New Complaint
- View All Complaints
- Search Complaints by Location
- Update Complaint Status
- Delete Complaints

---

# AI Features

The application uses AI integration to analyze complaints automatically.

AI can:
- Detect complaint urgency level
- Suggest concerned department
- Generate complaint summary
- Generate automatic response message

---

# Technologies Used

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication
- JWT Authentication
- bcryptjs Password Hashing

## AI Integration
- OpenRouter API
- Mistral AI Model

## Deployment
- Render
- MongoDB Atlas

---

# System Modules

## 1. Authentication Module

This module handles:
- User Signup
- User Login
- JWT Token Generation
- Protected Routes

Passwords are stored in encrypted format using bcryptjs.

---

## 2. Complaint Registration Module

Users can submit complaints with:
- Name
- Email
- Complaint Title
- Description
- Category
- Location

Complaints are stored in MongoDB database.

---

## 3. AI Analysis Module

When a complaint is submitted, AI analyzes the complaint and generates:
- Priority
- Department Suggestion
- Complaint Summary
- Auto-generated Response

---

## 4. Complaint Tracking Module

Users can:
- View all complaints
- Update complaint status
- Search complaints by location
- Delete complaints

---

# Database

MongoDB is used as the database.

Two main collections are used:
- Users
- Complaints

---

# Authentication & Security

Security features implemented:
- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Secure API Handling

---

# Frontend Description

The frontend is developed using React.js.

Frontend pages include:
- Home Page
- Signup Page
- Login Page
- Dashboard
- Complaint Registration Page
- Complaint List Page

---

# Backend Description

Backend is developed using Node.js and Express.js.

Backend handles:
- REST APIs
- MongoDB Connection
- Authentication
- AI APIs
- Complaint CRUD Operations

---

# API Testing

All APIs were tested successfully using Thunder Client.

Tested APIs:
- Signup
- Login
- Add Complaint
- Get Complaints
- Update Complaint
- Delete Complaint
- AI Analyze API

---

# Deployment

The project is deployed on Render.

## Frontend Deployment
- Render Static Site

## Backend Deployment
- Render Web Service

## Database
- MongoDB Atlas Cloud Database

---

# Project Workflow

1. User registers or logs into the system.
2. User submits a complaint.
3. Backend sends complaint to AI API.
4. AI analyzes complaint.
5. Complaint is stored in MongoDB.
6. User/Admin can track and manage complaints.

---

# Advantages of the System

- Easy complaint registration
- AI-powered automation
- Fast complaint handling
- Secure authentication
- User-friendly interface
- Cloud deployment support

---

# Future Enhancements

Future improvements can include:
- Email Notifications
- Admin Dashboard
- Complaint Analytics
- Real-time Chat Support
- File Upload Support
- Mobile Application

---

# Conclusion

The AI-Based Smart Complaint Management System successfully automates the complaint handling process using Artificial Intelligence and MERN Stack technologies.

The project provides:
- Secure Authentication
- Efficient Complaint Management
- AI-powered Automation
- Cloud Deployment

This system improves user experience and reduces manual effort in complaint handling.

---

# Live URLs

## Frontend URL

```text
[Add Frontend URL Here](https://ese-frontend-8wwp.onrender.com/)
```

## Backend URL

```text
https://ese-backend-vt0c.onrender.com
```

# Author

Developed by Shreya
