// src/Form/AppForm.js
import React, { useState } from 'react';

function AppForm() {
  const [appInfo, setAppInfo] = useState({ name: '', url: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppInfo({ ...appInfo, [name]: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Enter App Information</h2>
      <input
        type="text"
        name="name"
        placeholder="App Name"
        value={appInfo.name}
        onChange={handleChange}
        style={{ width: '300px', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="text"
        name="url"
        placeholder="App URL"
        value={appInfo.url}
        onChange={handleChange}
        style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
      />
      <button
        onClick={() => setAppInfo({ name: '', url: '' })}
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

export default AppForm;
