

# ✅ External APIs & NPM Libraries for SmartSky

---

## 📨 **Email Handling**

### 1. **[Nodemailer](https://www.npmjs.com/package/nodemailer)**

* Send emails via SMTP (Gmail, Outlook, custom servers).
* Required for sending initial and follow-up emails.

```bash
npm install nodemailer
```

### 2. **Gmail API / Google OAuth2**

* For reading inbox to detect replies (optional but recommended for production).
* Use [googleapis](https://www.npmjs.com/package/googleapis) NPM package.

```bash
npm install googleapis
```

### 3. **imap-simple**

* Alternative to Gmail API for reading emails using IMAP.

```bash
npm install imap-simple
```

---

## 📂 **CSV & File Upload**

### 4. **multer**

* Middleware to handle CSV uploads in Express.

```bash
npm install multer
```

### 5. **csv-parser**

* To parse CSV files into JSON format.

```bash
npm install csv-parser
```

---

## 📤 **Exporting Data (Leads)**

### 6. **exceljs**

* Create and export Excel sheets (leads export feature).

```bash
npm install exceljs
```

### 7. **json2csv** *(alternative)*

* For CSV export instead of Excel.

```bash
npm install json2csv
```

---

## ⏰ **Scheduling Follow-ups**

### 8. **node-cron**

* Schedule tasks like sending follow-up emails (e.g., every 2 days).

```bash
npm install node-cron
```

### 9. **node-schedule** *(alternative)*

* More advanced cron job support.

```bash
npm install node-schedule
```

---

## 🛠️ **Backend Development**

### 10. **express**

* Fast and minimalist web framework for Node.js.

```bash
npm install express
```

### 11. **mongoose**

* ODM to work with MongoDB easily.

```bash
npm install mongoose
```

### 12. **dotenv**

* Load environment variables from `.env` file.

```bash
npm install dotenv
```

### 13. **cors**

* Enable Cross-Origin Resource Sharing.

```bash
npm install cors
```

---

## 🧾 **Logging & Debugging**

### 14. **morgan**

* Logs API calls and useful for debugging.

```bash
npm install morgan
```

### 15. **winston**

* Advanced logging with log files and levels (optional for production).

```bash
npm install winston
```

---

## 💬 **Frontend Animation & Styling**

(If using modern UI/UX for dashboard)

### 16. **GSAP**

* Smooth animations.

```bash
npm install gsap
```

### 17. **Framer Motion**

* Animate React components.

```bash
npm install framer-motion
```

### 18. **Locomotive Scroll**

* Smooth scroll with animation triggers.

```bash
npm install locomotive-scroll
```

---

## 🔒 **Security (Optional for Later Phases)**

### 19. **bcryptjs**

* For password hashing (when user auth is added).

```bash
npm install bcryptjs
```

### 20. **jsonwebtoken (JWT)**

* For user login/authentication (if added).

```bash
npm install jsonwebtoken
```

---

## 📦 **Other Helpful Tools**

### 21. **concurrently**

* Run frontend and backend together during development.

```bash
npm install concurrently --save-dev
```

### 22. **nodemon**

* Auto-restarts backend on file changes.

```bash
npm install nodemon --save-dev
```

---

## 💡 Optional Integrations

| Feature             | Tool/API                            |
| ------------------- | ----------------------------------- |
| OAuth Login (Gmail) | Google OAuth2                       |
| UI Notifications    | react-toastify, sweetalert2         |
| Form Handling       | react-hook-form                     |
| MongoDB Admin UI    | MongoDB Compass or MongoDB Atlas UI |

---

### ✅ Ready to Use?

Let me know if you want a `package.json` file template, Gmail API integration example, or complete backend folder structure with routes/controllers.

I can also give you a `Postman Collection` for all SmartSky API endpoints if needed.
