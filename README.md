# quora-post-app
# 📝 Quora-Style Post App

This is a simple Quora-style web app built with **Node.js**, **Express**, and **EJS**. Users can:
- Create posts
- View all posts
- Edit posts
- Delete posts

The app uses `method-override` to support PUT and DELETE HTTP verbs via HTML forms and features a Quora-inspired front-end design.

---

## 📂 Project Structure

├── node_modules/
├── public/ # Static files (CSS)
│ ├── style.css
│ ├── create.css
│ ├── detail.css
│ └── edit.css
├── views/ # EJS Templates
│ ├── index.ejs
│ ├── new.ejs
│ ├── show.ejs
│ └── edit.ejs
├── index.js # Express app entry point
├── package.json
├── package-lock.json
└── README.md

---

## 🚀 How to Run Locally

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/quora-post-app.git
cd quora-post-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
node index.js
   OR
nodemon index.js(Iff , you have installed nodemon)
```

4. **Visit in browser:**

```bash
http://localhost:8080/posts
```

🛠️ Tech Stack
Node.js
Express.js
EJS Templating
HTML & CSS (custom Quora-style)

📦 Dependencies
express
ejs
uuid
method-override

**Install them with:**
```bash
npm install express ejs uuid method-override
```

🧠 Features
RESTful Routing (GET, POST, PATCH, DELETE)
Clean, mobile-friendly UI inspired by Quora
Dynamic rendering with EJS
Data stored in memory (use a DB like MongoDB for production)

📄 License
MIT License — feel free to fork and improve!


👨‍💻 Author
Made with ❤️ by VINEET RAJ
---
Let me know if:
- You want to include screenshot links
- You're using MongoDB or another DB
- You want a **live hosted URL section**

I'll customize it more for you!
---
