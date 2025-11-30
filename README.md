````markdown
# Social Media MERN

A simple social media web app built with the **MERN stack** (MongoDB, Express, React, Node.js).  
Users can register, log in, create posts, like and comment on posts, and manage their profile.

---

## ✨ Features

- 🔐 Authentication (register / login / logout)
- 👤 User profile (basic info, avatar, list of posts)
- 📝 Create / read / update / delete posts
- ❤️ Like / unlike posts
- 💬 Comment on posts
- 📸 Upload image for posts (if implemented)
- 🔎 Feed of all posts
- 📱 Responsive UI (desktop & mobile friendly)

---

## 🧰 Tech Stack

**Frontend**

- React / Vite
- React Router
- Axios
- CSS / Tailwind (tùy bạn dùng cái nào)

**Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- dotenv

---

## 📁 Project Structure

```bash
social-media-mern/
├─ client/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ api/
│  │  ├─ context/
│  │  └─ main.jsx
│  └─ package.json
│
├─ server/
│  ├─ src/
│  │  ├─ config/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  ├─ middleware/
│  │  └─ index.js
│  ├─ .env.example
│  └─ package.json
```
````

---

## ⚙️ Setup

### Clone repo

```bash
git clone git@github.com:tiendungv03/social-media-mern.git
cd social-media-mern
```

### Install backend

```bash
cd server
npm install
```

### Install frontend

```bash
cd ../client
npm install
```

---

## 🔧 Environment Variables

### Server `.env`

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/social-media-mern
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173
```

### Client `.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🚀 Run App

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

## 📡 API (Example)

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/posts`
- `POST /api/posts`
- `PATCH /api/posts/:id/like`
- `POST /api/posts/:id/comments`

---

## 🚀 Future Improvements

- Real-time notifications (Socket.io)
- Follow / friend system
- Chat system
- Cloud image upload (Cloudinary)
- Dark mode

---

```

```
