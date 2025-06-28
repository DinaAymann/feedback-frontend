import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileStatusList = () => {
  const [fileStatuses, setFileStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStatuses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/files/status');
      setFileStatuses(response.data);
    } catch (error) {
      console.error("❌ Failed to fetch file statuses", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatuses();
    const interval = setInterval(fetchStatuses, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h3>📄 File Processing Status</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Status</th>
              <th>Uploaded At</th>
            </tr>
          </thead>
          <tbody>
            {fileStatuses.map((file, index) => (
              <tr key={index}>
                <td>{file.filename}</td>
                <td style={{ color: file.processed ? 'green' : 'orange' }}>
                  {file.processed ? '✅ Processed' : '⏳ Pending'}
                </td>
                <td>{new Date(file.uploadedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '2rem'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  }
};

export default FileStatusList;
