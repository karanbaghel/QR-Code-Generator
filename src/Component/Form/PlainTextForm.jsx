// import React, { useState, useRef } from 'react';
// import QRCode from 'qrcode.react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function PlainTextForm() {
//   const [text, setText] = useState('');
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleClear = () => {
//     setText('');
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector('canvas');
//     const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//     let downloadLink = document.createElement('a');
//     downloadLink.href = pngUrl;
//     downloadLink.download = 'plaintext_qrcode.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-10 col-12">
//           <div className="card shadow-sm p-4">
//             <h1 className="text-center mb-4">Plain Text and QR Code Generator</h1>
//             <form>
//               <div className="form-group mb-3">
//                 <label htmlFor="text" className="form-label">Enter Text</label>
//                 <textarea
//                   id="text"
//                   placeholder="Enter text"
//                   value={text}
//                   onChange={handleChange}
//                   className="form-control mb-3"
//                   aria-describedby="textHelp"
//                   style={{ height: '100px' }}
//                 />
//                 <small id="textHelp" className="form-text text-muted">Type the text you want to encode in the QR code.</small>
//               </div>
//               <div className="d-flex justify-content-center mb-3">
//                 <button
//                   type="button"
//                   onClick={handleClear}
//                   className="btn btn-light me-2"
//                 >
//                   Clear
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleDownload}
//                   className="btn btn-primary"
//                 >
//                   Download
//                 </button>
//               </div>
//               <div className="text-center">
//                 <div ref={qrRef} style={{ border: '1px solid #000', padding: '10px' }} aria-label="QR Code">
//                   <QRCode value={text || ' '} size={256} />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlainTextForm;


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
// } from "@mui/material";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function PlainTextForm() {
//   const [text, setText] = useState('');
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);

//   useEffect(() => {
//     qrCode.current = new QRCodeStyling({
//       width: qrSize,
//       height: qrSize,
//       type: "svg",
//       data: text,
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
//         data: text,
//       });
//     }
//   };

//   useEffect(() => {
//     updateQrCode();
//   }, [qrSize]);

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleClear = () => {
//     setText('');
//   };

//   const handleDownload = () => {
//     qrCode.current.download({ name: "plaintext_qrcode", extension: "png" });
//   };

//   const handleSubmit = () => {
//     updateQrCode();
//   };

//   return (
//     <Container>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4" align="center" gutterBottom>
//                 Plain Text and QR Code Generator
//               </Typography>
//               <Box component="form">
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Enter Text"
//                   value={text}
//                   onChange={handleChange}
//                   aria-describedby="textHelp"
//                   multiline
//                   rows={4}
//                 />
//                 <Box sx={{ mt: 2, textAlign: "center" }}>
//                   <Button variant="contained" onClick={handleSubmit}>
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

// export default PlainTextForm;

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
// } from "@mui/material";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function PlainTextForm() {
//   const [text, setText] = useState("");
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);

//   const generateQrValue = () => {
//     return `PlainText: ${text}`;
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
//   }, [qrSize]);

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleClear = () => {
//     setText('');
//     updateQrCode(); // Update QR code to reset it
//   };

//   const handleDownload = () => {
//     qrCode.current.download({ name: "plaintext_qrcode", extension: "png" });
//   };

//   const handleSubmit = () => {
//     updateQrCode();
//   };

//   return (
//     <Container>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4" align="center" gutterBottom>
//                 Plain Text and QR Code Generator
//               </Typography>
//               <Box component="form">
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Enter Text"
//                   name="text"
//                   value={text}
//                   onChange={handleChange}
//                   aria-describedby="textHelp"
//                   multiline
//                   rows={4}
//                 />
//                 <Box sx={{ mt: 2, textAlign: "center" }}>
//                   <Button variant="contained" onClick={handleSubmit}>
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

// export default PlainTextForm;

