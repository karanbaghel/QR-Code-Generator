// import React, { useState, useRef } from 'react';
// import QRCode from 'qrcode.react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

// function WifiForm() {
//   const [wifiInfo, setWifiInfo] = useState({ ssid: '', password: '', encryption: 'WPA' });
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setWifiInfo({ ...wifiInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setWifiInfo({ ssid: '', password: '', encryption: 'WPA' });
//   };

//   const generateQrValue = () => {
//     return `WIFI:T:${wifiInfo.encryption};S:${wifiInfo.ssid};P:${wifiInfo.password};;`;
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector('canvas');
//     const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//     let downloadLink = document.createElement('a');
//     downloadLink.href = pngUrl;
//     downloadLink.download = 'wifi_qrcode.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <Container className="py-5">
//       <Row>
//         <Col xs="12" md="8" lg="6" className="mx-auto">
//           <h1 className="text-center mb-4">WiFi QR Code Generator</h1>
//           <Form aria-labelledby="form-title">
//             <FormGroup>
//               <Label for="ssid">SSID</Label>
//               <Input
//                 type="text"
//                 id="ssid"
//                 name="ssid"
//                 placeholder="Enter SSID"
//                 value={wifiInfo.ssid}
//                 onChange={handleChange}
//                 aria-label="Enter SSID"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="text"
//                 id="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 value={wifiInfo.password}
//                 onChange={handleChange}
//                 aria-label="Enter Password"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="encryption">Encryption</Label>
//               <Input
//                 type="select"
//                 id="encryption"
//                 name="encryption"
//                 value={wifiInfo.encryption}
//                 onChange={handleChange}
//                 aria-label="Select Encryption Type"
//               >
//                 <option value="WPA">WPA/WPA2</option>
//                 <option value="WEP">WEP</option>
//                 <option value="nopass">No Password</option>
//               </Input>
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

// export default WifiForm;


// import React, { useState, useRef, useEffect } from "react";
// import QRCodeStyling from "qr-code-styling";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";

// function WifiForm() {
//   const [wifiInfo, setWifiInfo] = useState({ ssid: '', password: '', encryption: 'WPA' });
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setWifiInfo({ ...wifiInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setWifiInfo({ ssid: '', password: '', encryption: 'WPA' });
//     updateQrCode(); // Update QR code to reset it
//   };

//   const generateQrValue = () => {
//     return `WIFI:T:${wifiInfo.encryption};S:${wifiInfo.ssid};P:${wifiInfo.password};;`;
//   };

//   useEffect(() => {
//     qrCode.current = new QRCodeStyling({
//       width: qrSize,
//       height: qrSize,
//       type: "svg",
//       data: generateQrValue(),
//       dotsOptions: {
//         color: "#4267b2",
//         type: "rounded",
//       },
//       backgroundOptions: {
//         color: "#e9ebee",
//       },
//       imageOptions: {
//         crossOrigin: "anonymous",
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

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
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
//   }, [qrSize, wifiInfo]);

//   const handleDownload = () => {
//     qrCode.current.download({ name: "wifi_qrcode", extension: "png" });
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
//                 WiFi QR Code Generator
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="SSID"
//                   name="ssid"
//                   value={wifiInfo.ssid}
//                   onChange={handleChange}
//                   aria-label="Enter SSID"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Password"
//                   name="password"
//                   type="password"
//                   value={wifiInfo.password}
//                   onChange={handleChange}
//                   aria-label="Enter Password"
//                 />
//                 <FormControl fullWidth margin="normal">
//                   <InputLabel id="encryption-label">Encryption</InputLabel>
//                   <Select
//                     labelId="encryption-label"
//                     id="encryption"
//                     name="encryption"
//                     value={wifiInfo.encryption}
//                     onChange={handleChange}
//                     label="Encryption"
//                     aria-label="Select Encryption Type"
//                   >
//                     <MenuItem value="WPA">WPA/WPA2</MenuItem>
//                     <MenuItem value="WEP">WEP</MenuItem>
//                     <MenuItem value="nopass">No Password</MenuItem>
//                   </Select>
//                 </FormControl>
//                 <Box sx={{ mt: 2, textAlign: "center" }}>
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
//                 sx={{ border: "1px solid #000", padding: "10px", textAlign: "center" }}
//                 aria-label="QR Code"
//               />
//               <Box sx={{ mt: 2, textAlign: "center" }}>
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

// export default WifiForm;

// import React, { useState, useRef, useEffect } from "react";
// import QRCodeStyling from "qr-code-styling";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";

// function WifiForm() {
//   const [wifiInfo, setWifiInfo] = useState({ ssid: '', password: '', encryption: 'WPA' });
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);
//   const [image, setImage] = useState(null);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setWifiInfo({ ...wifiInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setWifiInfo({ ssid: '', password: '', encryption: 'WPA' });
//     setImage(null);
//     updateQrCode(); // Update QR code to reset it
//   };

//   const generateQrValue = () => {
//     return `WIFI:T:${wifiInfo.encryption};S:${wifiInfo.ssid};P:${wifiInfo.password};;`;
//   };

//   useEffect(() => {
//     qrCode.current = new QRCodeStyling({
//       width: qrSize,
//       height: qrSize,
//       type: "svg",
//       data: generateQrValue(),
//       dotsOptions: {
//         color: "#4267b2",
//         type: "rounded",
//       },
//       backgroundOptions: {
//         color: "#e9ebee",
//       },
//       imageOptions: {
//         crossOrigin: "anonymous",
//         margin: 20,
//         imageSize: 0.4, // Adjust image size here
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

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const updateQrCode = () => {
//     if (qrCode.current) {
//       qrCode.current.update({
//         width: qrSize,
//         height: qrSize,
//         data: generateQrValue(),
//         image: image,
//       });
//     }
//   };

//   useEffect(() => {
//     updateQrCode();
//   }, [qrSize, wifiInfo, image]);

//   const handleDownload = () => {
//     qrCode.current.download({ name: "wifi_qrcode", extension: "png" });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateQrCode();
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Container>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4" align="center" gutterBottom>
//                 WiFi QR Code Generator
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="SSID"
//                   name="ssid"
//                   value={wifiInfo.ssid}
//                   onChange={handleChange}
//                   aria-label="Enter SSID"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Password"
//                   name="password"
//                   type="password"
//                   value={wifiInfo.password}
//                   onChange={handleChange}
//                   aria-label="Enter Password"
//                 />
//                 <FormControl fullWidth margin="normal">
//                   <InputLabel id="encryption-label">Encryption</InputLabel>
//                   <Select
//                     labelId="encryption-label"
//                     id="encryption"
//                     name="encryption"
//                     value={wifiInfo.encryption}
//                     onChange={handleChange}
//                     label="Encryption"
//                     aria-label="Select Encryption Type"
//                   >
//                     <MenuItem value="WPA">WPA/WPA2</MenuItem>
//                     <MenuItem value="WEP">WEP</MenuItem>
//                     <MenuItem value="nopass">No Password</MenuItem>
//                   </Select>
//                 </FormControl>
//                 <Box sx={{ mt: 2, textAlign: "center" }}>
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
//                 sx={{ border: "1px solid #000", padding: "10px", textAlign: "center" }}
//                 aria-label="QR Code"
//               />
//               <Box sx={{ mt: 2, textAlign: "center" }}>
//                 <Button variant="contained" onClick={handleClear} sx={{ mr: 1 }}>
//                   Clear
//                 </Button>
//                 <Button variant="contained" onClick={handleDownload}>
//                   Download QR Code
//                 </Button>
//                 <Box sx={{ mt: 2 }}>
//                   <input
//                     accept="image/*"
//                     type="file"
//                     onChange={handleImageUpload}
//                     aria-label="Upload Image"
//                     style={{ display: 'none' }}
//                     id="upload-image"
//                   />
//                   <label htmlFor="upload-image">
//                     <Button variant="contained" component="span">
//                       Upload Image
//                     </Button>
//                   </label>
//                 </Box>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default WifiForm;


import React, { useState, useRef, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function WifiForm() {
  const [wifiInfo, setWifiInfo] = useState({ ssid: '', password: '', encryption: 'WPA' });
  const qrRef = useRef(null);
  const qrCode = useRef(null);
  const [qrSize, setQrSize] = useState(300);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWifiInfo({ ...wifiInfo, [name]: value });
  };

  const handleClear = () => {
    setWifiInfo({ ssid: '', password: '', encryption: 'WPA' });
    setImage(null);
    updateQrCode(); // Update QR code to reset it
  };

  const generateQrValue = () => {
    return `WIFI:T:${wifiInfo.encryption};S:${wifiInfo.ssid};P:${wifiInfo.password};;`;
  };

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: "svg",
      data: generateQrValue(),
      dotsOptions: {
        color: "#4267b2",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#e9ebee",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20,
        imageSize: 0.4, // Adjust image size here
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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
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
  }, [qrSize, wifiInfo, image]);

  const handleDownload = () => {
    qrCode.current.download({ name: "wifi_qrcode", extension: "png" });
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
                WiFi QR Code Generator
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="SSID"
                  name="ssid"
                  value={wifiInfo.ssid}
                  onChange={handleChange}
                  aria-label="Enter SSID"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  value={wifiInfo.password}
                  onChange={handleChange}
                  aria-label="Enter Password"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel id="encryption-label">Encryption</InputLabel>
                  <Select
                    labelId="encryption-label"
                    id="encryption"
                    name="encryption"
                    value={wifiInfo.encryption}
                    onChange={handleChange}
                    label="Encryption"
                    aria-label="Select Encryption Type"
                  >
                    <MenuItem value="WPA">WPA/WPA2</MenuItem>
                    <MenuItem value="WEP">WEP</MenuItem>
                    <MenuItem value="nopass">No Password</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ mt: 2, textAlign: "center" }}>
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
                sx={{ border: "1px solid #000", padding: "10px", textAlign: "center" }}
                aria-label="QR Code"
              />
              <Box sx={{ mt: 2, textAlign: "center" }}>
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

export default WifiForm;

