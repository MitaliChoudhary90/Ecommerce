# 🛒 Ecommerce Backend API

A robust and scalable backend for an Ecommerce platform built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **JWT** authentication.

---

## 🚀 Features

- 🔐 User Authentication (Register, Login, JWT-based sessions)
- 👤 Role-based Access Control (Admin, User)
- 🛍️ Product Management (CRUD)
- 📦 Order Processing and Management
- 📄 RESTful API architecture
- 🛠️ Error Handling and Validation
- 🌍 Environment Config with `.env`

---


---

## ⚙️ Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/Ecommerce.git

# 2. Navigate into the project folder
cd Ecommerce

# 3. Install dependencies
npm install

# 4. Add your environment variables
cp .env.example .env

---


---
📌 Environment Variables
Create a .env file in the root and add the following
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---


---
🧪 Run the Server
# Start the development server
npm run dev

# Or for production
npm start

---

---
📌 Dependencies

Express
Mongoose
JWT
dotenv
bcryptjs
cors
nodemon (dev)

---

---
🛡️ Security Practices
.env is ignored using .gitignore

Passwords are hashed

Routes are protected using JWT middleware

---

---
🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and open a pull request.
🙋‍♀️ Author
Mitali Choudhary
Feel free to connect for collaborations or feedback!
