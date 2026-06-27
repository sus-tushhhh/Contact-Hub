_Frontend in development_

# 📞 Contact Hub

A Contacts Management Backend built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This allows users to register, log in, and securely manage their contacts through protected endpoints.

---

## 🚀 Features

- User Registration
- User Login Authentication
- JWT-Based Authorization
- Create New Contacts
- Fetch All Contacts
- Update Existing Contacts
- Delete Contacts
- MongoDB Database Integration
- Password Hashing with bcrypt
- Protected Routes Middleware

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/contacts-manager.git
cd contacts-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

### Environment Variables

| Variable            | Description                                       |
| ------------------- | ------------------------------------------------- |
| `PORT`              | Port number on which the server will run          |
| `CONNECTION_STRING` | MongoDB connection string                         |
| `TOKEN_SECRET`      | Secret key used to generate and verify JWT tokens |

> **Note:** Never commit your `.env` file to GitHub. Add `.env` to your `.gitignore` file.

### 4. Run the Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

# 🔐 Authentication APIs

## Register User

**Endpoint**

```http
POST /api/user/register
```

### Request Body

```json
{
    "username": "john",
    "email": "john@example.com",
    "password": "password123"
}
```

### Success Response

```json
{
    "_id": "64a123456789",
    "email": "john@example.com"
}
```

---

## Login User

**Endpoint**

```http
POST /api/user/login
```

### Request Body

```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

### Success Response

```json
{
    "accessToken": "your_jwt_token"
}
```

---

# 📞 Contact APIs

> All Contact APIs require a valid JWT token in the Authorization header.

### Authorization Header

```http
Authorization: Bearer <token>
```

---

## Get All Contacts

**Endpoint**

```http
GET /api/contacts
```

### Success Response

```json
[
    {
        "_id": "123",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "9876543210"
    }
]
```

---

## Create Contact

**Endpoint**

```http
POST /api/contacts
```

### Request Body

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
}
```

### Success Response

```json
{
    "_id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
}
```

---

## Update Contact

**Endpoint**

```http
PUT /api/contacts/:id
```

### Request Body

```json
{
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "phone": "9999999999"
}
```

### Success Response

```json
{
    "_id": "123",
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "phone": "9999999999"
}
```

---

## Delete Contact

**Endpoint**

```http
DELETE /api/contacts/:id
```

### Success Response

```json
{
    "message": "Contact deleted successfully"
}
```

---

## 🔑 Authentication Flow

1. Register a new user using `/api/user/register`
2. Login using `/api/user/login`
3. Copy the returned JWT token
4. Add the token to the Authorization header:

```http
Authorization: Bearer <your_token>
```

5. Access all protected Contact APIs

---

## 👨‍💻 Author

**Tushant**

🔗 GitHub: https://github.com/sus-tushhhh

---
