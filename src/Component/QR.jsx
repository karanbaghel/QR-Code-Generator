// src/Component/QR.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QR() {
  const [url, setUrl] = useState('');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleChange}
        style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
      />
      <div style={{ border: '1px solid #000', padding: '10px', marginBottom: '20px' }}>
        <QRCode value={url} size={256} />
      </div>
      <button
        onClick={() => setUrl('')}
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

export default QR;
