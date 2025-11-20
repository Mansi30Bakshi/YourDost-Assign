# Todo List API

A simple RESTful API for managing todo items built with Node.js and Express.

## Features

- ✅ Create new todo items
- 📋 Get all todos
- ✏️ Update existing todos
- 🗑️ Delete todos
- 💾 Persistent storage with JSON file
- 🔒 Input validation
- 🌐 CORS enabled

## API Endpoints

### Base URL
```
http://localhost:5001
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API information and available routes |
| `GET` | `/todolist` | Get all todo items |
| `POST` | `/todolist` | Create a new todo item |
| `PUT` | `/todolist/:id` | Update a specific todo item |
| `DELETE` | `/todolist/:id` | Delete a specific todo item |

## Request/Response Examples

### Get All Todos
```http
GET /todolist
```

### Create Todo
```http
POST /todolist
Content-Type: application/json

{
  "title": "Learn Node.js",
  "description": "Study Express framework",
  "completed": false
}
```

### Update Todo
```http
PUT /todolist/1701234567890-abc123
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true
}
```

### Delete Todo
```http
DELETE /todolist/1701234567890-abc123
```

## Todo Item Structure
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "updatedAt": "string (optional)"
}
```

## Validation Rules
- **Title**: Required, max 100 characters
- **Description**: Optional
- **Completed**: Boolean, defaults to false

## Setup Instructions

1. **Install dependencies:**
```bash
npm install express cors
```

2. **Run the server:**
```bash
node server.js
```

3. **Server runs on:**
```
http://localhost:5001
```

## Error Responses

```json
{
  "error": "Error message here"
}
```

Common error codes:
- `400` - Bad Request (validation failed)
- `404` - Todo not found
- `500` - Internal server error

## Data Storage
Todos are automatically saved to `todo.json` file in the same directory.


## Deployment to Render
Live Demo
Base URL: https://yourdost-assign.onrender.com

Deployment Steps
Prerequisites
Code pushed to GitHub repository

Render account (sign up with GitHub)

Deployment Process
Go to Render Dashboard

Click "New+" button and select "Web Service"

Connect your GitHub repository

Configure settings:

Environment: Node

Build Command: npm install

Start Command: node server.js

Click "Create Web Service"
