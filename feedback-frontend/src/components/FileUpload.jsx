import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = () => {
  const [uploading, setUploading] = useState(false);

  const onDrop = async (acceptedFiles) => {
    const jsonFiles = acceptedFiles.filter(file => file.type === 'application/json');

    if (jsonFiles.length === 0) {
      toast.error("Only .json files are allowed!");
      return;
    }

    const formData = new FormData();
    jsonFiles.forEach(file => formData.append('file', file));

    try {
      setUploading(true);
      await axios.post('http://localhost:8080/api/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("✅ File uploaded successfully!");
    } catch (error) {
      toast.error("❌ Upload failed."  + (error.response?.data?.message || error.message));
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-container" style={styles.uploadBox}>
      <div {...getRootProps()} style={styles.dropArea}>
        <input {...getInputProps()} />
        {
          isDragActive ? <p>Drop the .json files here ...</p> :
          <p>📁 Drag & drop .json files here, or click to select files</p>
        }
      </div>
      {uploading && <p style={{ color: "blue" }}>Uploading...</p>}
    </div>
  );
};

const styles = {
  uploadBox: {
    padding: "2rem",
    border: "2px dashed #888",
    borderRadius: "8px",
    marginBottom: "1rem",
    textAlign: "center",
  },
  dropArea: {
    padding: "1rem",
    cursor: "pointer"
  }
};

export default FileUpload;
