// src/components/PdfForm.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function PdfForm() {
  const [url, setUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setPdfUrl(event.target.value);
  };

  const handlePdfUrlChange = (event) => {
    setPdfUrl(event.target.value);
    setUrl(event.target.value);
  };

  const handleClear = () => {
    setUrl('');
    setPdfUrl('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {pdfUrl ? (
        <>
          <h1>QR Code Generator</h1>
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
            style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
          />
          <div style={{ border: '1px solid #000', padding: '10px', marginBottom: '20px' }}>
            <QRCode value={pdfUrl} size={256} />
          </div>
        </>
      ) : (
        <>
          <h2>Enter PDF URL</h2>
          <input
            type="text"
            placeholder="Enter PDF URL"
            value={pdfUrl}
            onChange={handlePdfUrlChange}
            style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
          />
        </>
      )}
      <button
        onClick={handleClear}
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

export default PdfForm;
