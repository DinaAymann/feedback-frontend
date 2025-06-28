# feedback-frontend

---

```markdown
# 📁 Feedback Uploader Frontend (React)

This is the frontend part of the Feedback Processing System, built using **React.js**. It allows users to upload `.json` files and monitor their processing status. This SPA (Single Page Application) interacts with a Spring Boot backend and PostgreSQL database.

---

## 🧰 Tech Stack

- **React 18+**
- **React Dropzone** – File drag-and-drop
- **Axios** – HTTP requests
- **React Toastify** – Notifications
- **Vite** – Project scaffolding and development server

---

## 🚀 Features

### ✅ Upload JSON Files
- Drag and drop or manual file selection
- Accepts only `.json` files
- Displays upload progress
- Shows success or failure toast notifications

### 📊 View Upload Status
- Displays uploaded file names
- Shows upload date and processing status (`true/false`)
- Automatically refreshes upon page reload

---

## 📁 Folder Structure

```



````

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/feedback-frontend.git
cd feedback-frontend
````

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Visit in browser:
   👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Components

### 📁 `FileUpload.jsx`

This component:

* Uses `react-dropzone` to accept files
* Filters only `.json` files
* Sends them to backend (`/api/files/upload`)
* Shows a toast notification using `react-toastify`

```jsx
<Dropzone>
  <input {...getInputProps()} />
  <p>Drag & drop .json files or click to browse</p>
</Dropzone>
```

On drop:

```javascript
axios.post('http://localhost:8080/api/files/upload', formData)
```

### 📄 `FileStatusList.jsx`

This component:

* Fetches file processing status from backend (`/api/files/status`)
* Displays filename, upload time, and status (processed or not)
* Uses `useEffect()` to fetch on mount

---

## 🔗 Backend Integration

The backend must expose the following endpoints:

* `POST /api/files/upload` – Accepts file uploads
* `GET /api/files/status` – Returns list of processed/unprocessed files

Make sure **CORS is enabled** in Spring Boot for `http://localhost:5173`.

---

## 🖼️ Sample UI

```
📁 JSON Feedback Uploader

[⬆️ Upload Area]

Uploading... ✅ / ❌

-----------------------
📄 Uploaded Files:
 - feedback1.json | ✅ Processed
 - feedback2.json | ❌ Pending
```

---

## 🔔 Notifications

* Success: ✅ "Files uploaded successfully!"
* Error: ❌ "Only .json files allowed!" or "Upload failed!"

Powered by:

```bash
npm install react-toastify
```

---
