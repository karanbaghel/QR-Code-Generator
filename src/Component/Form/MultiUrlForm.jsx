// src/Form/MultiUrlForm.js
import React, { useState } from 'react';

function MultiUrlForm() {
  const [urls, setUrls] = useState('');

  const handleChange = (event) => {
    setUrls(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Enter Multiple URLs</h2>
      <textarea
        placeholder="Enter URLs, separated by commas"
        value={urls}
        onChange={handleChange}
        style={{ width: '300px', height: '100px', padding: '10px', marginBottom: '20px' }}
      />
      <button
        onClick={() => setUrls('')}
        style={{
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default MultiUrlForm;
