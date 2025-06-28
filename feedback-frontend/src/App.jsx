

// import './App.css'
// import React from 'react';
// import FileUpload from './components/FileUpload';
// import FileStatusList from './components/FileStatusList';
// import { ToastContainer } from 'react-toastify';

// function App() {
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h2>📁 JSON Feedback Uploader</h2>
//       <FileUpload />
//       <FileStatusList />
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;


import './App.css';
import React from 'react';
import FileUpload from './components/FileUpload';
import FileStatusList from './components/FileStatusList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>📊 Feedback Uploader</h1>
        <p style={styles.subtitle}>Upload your JSON feedback files and monitor processing in real time</p>
      </header>

      <section style={styles.section}>
        <FileUpload />
      </section>

      <section style={styles.section}>
        <FileStatusList />
      </section>

      <ToastContainer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

export default App;
