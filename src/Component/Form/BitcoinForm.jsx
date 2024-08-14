// import React, { useState, useRef } from 'react';
// import QRCode from 'qrcode.react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

// function BitcoinForm() {
//   const [bitcoinInfo, setBitcoinInfo] = useState({ address: '', amount: '', label: '', message: '' });
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setBitcoinInfo({ ...bitcoinInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setBitcoinInfo({ address: '', amount: '', label: '', message: '' });
//   };

//   const generateQrValue = () => {
//     return `bitcoin:${bitcoinInfo.address}?amount=${bitcoinInfo.amount}&label=${encodeURIComponent(bitcoinInfo.label)}&message=${encodeURIComponent(bitcoinInfo.message)}`;
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector('canvas');
//     const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//     let downloadLink = document.createElement('a');
//     downloadLink.href = pngUrl;
//     downloadLink.download = 'bitcoin_qrcode.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <Container className="py-5">
//       <Row>
//         <Col xs="12" md="8" lg="6" className="mx-auto">
//           <h1 className="text-center mb-4">Bitcoin QR Code Generator</h1>
//           <Form aria-labelledby="form-title">
//             <FormGroup>
//               <Label for="address">Bitcoin Address</Label>
//               <Input
//                 type="text"
//                 id="address"
//                 name="address"
//                 placeholder="Enter Bitcoin Address"
//                 value={bitcoinInfo.address}
//                 onChange={handleChange}
//                 aria-label="Enter Bitcoin Address"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="amount">Amount</Label>
//               <Input
//                 type="text"
//                 id="amount"
//                 name="amount"
//                 placeholder="Enter Amount"
//                 value={bitcoinInfo.amount}
//                 onChange={handleChange}
//                 aria-label="Enter Amount"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="label">Label</Label>
//               <Input
//                 type="text"
//                 id="label"
//                 name="label"
//                 placeholder="Enter Label"
//                 value={bitcoinInfo.label}
//                 onChange={handleChange}
//                 aria-label="Enter Label"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="message">Message</Label>
//               <Input
//                 type="text"
//                 id="message"
//                 name="message"
//                 placeholder="Enter Message"
//                 value={bitcoinInfo.message}
//                 onChange={handleChange}
//                 aria-label="Enter Message"
//               />
//             </FormGroup>
//             <Button color="secondary" onClick={handleClear} className="mb-3" aria-label="Clear the form">
//               Clear
//             </Button>
//             <div ref={qrRef} className="border p-3 mb-3 text-center" aria-live="polite" aria-label="QR Code display">
//               <QRCode value={generateQrValue()} size={256} />
//             </div>
//             <Button color="primary" onClick={handleDownload} aria-label="Download the QR code">
//               Download
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default BitcoinForm;

// import React, { useState, useRef, useEffect } from 'react';
// import QRCodeStyling from 'qr-code-styling';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   Box,
// } from '@mui/material';

// function BitcoinForm() {
//   const [bitcoinInfo, setBitcoinInfo] = useState({ address: '', amount: '', label: '', message: '' });
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setBitcoinInfo({ ...bitcoinInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setBitcoinInfo({ address: '', amount: '', label: '', message: '' });
//     updateQrCode(); // Update QR code to reset it
//   };

//   const generateQrValue = () => {
//     return `bitcoin:${bitcoinInfo.address}?amount=${bitcoinInfo.amount}&label=${encodeURIComponent(bitcoinInfo.label)}&message=${encodeURIComponent(bitcoinInfo.message)}`;
//   };

//   useEffect(() => {
//     qrCode.current = new QRCodeStyling({
//       width: qrSize,
//       height: qrSize,
//       type: 'svg',
//       data: generateQrValue(),
//       dotsOptions: {
//         color: '#4267b2',
//         type: 'rounded',
//       },
//       backgroundOptions: {
//         color: '#e9ebee',
//       },
//       imageOptions: {
//         crossOrigin: 'anonymous',
//         margin: 20,
//         imageSize: 1,
//       },
//     });

//     qrCode.current.append(qrRef.current);

//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 576) {
//         setQrSize(150);
//       } else if (width < 768) {
//         setQrSize(200);
//       } else {
//         setQrSize(300);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const updateQrCode = () => {
//     if (qrCode.current) {
//       qrCode.current.update({
//         width: qrSize,
//         height: qrSize,
//         data: generateQrValue(),
//       });
//     }
//   };

//   useEffect(() => {
//     updateQrCode();
//   }, [qrSize, bitcoinInfo]);

//   const handleDownload = () => {
//     qrCode.current.download({ name: 'bitcoin_qrcode', extension: 'png' });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateQrCode();
//   };

//   return (
//     <Container>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4" align="center" gutterBottom>
//                 Bitcoin QR Code Generator
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Bitcoin Address"
//                   name="address"
//                   value={bitcoinInfo.address}
//                   onChange={handleChange}
//                   aria-label="Enter Bitcoin Address"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Amount"
//                   name="amount"
//                   value={bitcoinInfo.amount}
//                   onChange={handleChange}
//                   aria-label="Enter Amount"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Label"
//                   name="label"
//                   value={bitcoinInfo.label}
//                   onChange={handleChange}
//                   aria-label="Enter Label"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Message"
//                   name="message"
//                   value={bitcoinInfo.message}
//                   onChange={handleChange}
//                   aria-label="Enter Message"
//                 />
//                 <Box sx={{ mt: 2, textAlign: 'center' }}>
//                   <Button variant="contained" type="submit">
//                     Submit
//                   </Button>
//                 </Box>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4" align="center" gutterBottom>
//                 QR Code
//               </Typography>
//               <Box
//                 ref={qrRef}
//                 sx={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}
//                 aria-label="QR Code"
//               />
//               <Box sx={{ mt: 2, textAlign: 'center' }}>
//                 <Button variant="contained" onClick={handleClear} sx={{ mr: 1 }}>
//                   Clear
//                 </Button>
//                 <Button variant="contained" onClick={handleDownload}>
//                   Download QR Code
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default BitcoinForm;
import React, { useState, useRef, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';

function BitcoinForm() {
  const [bitcoinInfo, setBitcoinInfo] = useState({ address: '', amount: '', label: '', message: '' });
  const qrRef = useRef(null);
  const qrCode = useRef(null);
  const [qrSize, setQrSize] = useState(300);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBitcoinInfo({ ...bitcoinInfo, [name]: value });
  };

  const handleClear = () => {
    setBitcoinInfo({ address: '', amount: '', label: '', message: '' });
    setImage(null);
    updateQrCode(); // Update QR code to reset it
  };

  const generateQrValue = () => {
    return `bitcoin:${bitcoinInfo.address}?amount=${bitcoinInfo.amount}&label=${encodeURIComponent(bitcoinInfo.label)}&message=${encodeURIComponent(bitcoinInfo.message)}`;
  };

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: 'svg',
      data: generateQrValue(),
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded',
      },
      backgroundOptions: {
        color: '#e9ebee',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
        imageSize: 1,
      },
    });

    qrCode.current.append(qrRef.current);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setQrSize(150);
      } else if (width < 768) {
        setQrSize(200);
      } else {
        setQrSize(300);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateQrCode = () => {
    if (qrCode.current) {
      qrCode.current.update({
        width: qrSize,
        height: qrSize,
        data: generateQrValue(),
        image: image,
      });
    }
  };

  useEffect(() => {
    updateQrCode();
  }, [qrSize, bitcoinInfo, image]);

  const handleDownload = () => {
    qrCode.current.download({ name: 'bitcoin_qrcode', extension: 'png' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateQrCode();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Bitcoin QR Code Generator
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Bitcoin Address"
                  name="address"
                  value={bitcoinInfo.address}
                  onChange={handleChange}
                  aria-label="Enter Bitcoin Address"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Amount"
                  name="amount"
                  value={bitcoinInfo.amount}
                  onChange={handleChange}
                  aria-label="Enter Amount"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Label"
                  name="label"
                  value={bitcoinInfo.label}
                  onChange={handleChange}
                  aria-label="Enter Label"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Message"
                  name="message"
                  value={bitcoinInfo.message}
                  onChange={handleChange}
                  aria-label="Enter Message"
                />
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                QR Code
              </Typography>
              <Box
                ref={qrRef}
                sx={{ border: '1px solid #000', padding: '10px', textAlign: 'center' }}
                aria-label="QR Code"
              />
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button variant="contained" onClick={handleClear} sx={{ mr: 1 }}>
                  Clear
                </Button>
                <Button variant="contained" onClick={handleDownload}>
                  Download QR Code
                </Button>
                <Box sx={{ mt: 2 }}>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                    aria-label="Upload Image"
                    style={{ display: 'none' }}
                    id="upload-image"
                  />
                  <label htmlFor="upload-image">
                    <Button variant="contained" component="span">
                      Upload Image
                    </Button>
                  </label>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BitcoinForm;
