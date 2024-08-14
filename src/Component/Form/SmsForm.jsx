// import React, { useState, useRef } from 'react';
// import QRCode from 'qrcode.react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SmsForm() {
//   const [smsInfo, setSmsInfo] = useState({ phone: '', message: '' });
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSmsInfo({ ...smsInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setSmsInfo({ phone: '', message: '' });
//   };

//   const generateQrValue = () => {
//     return `SMSTO:${smsInfo.phone}:${smsInfo.message}`;
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector('canvas');
//     const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//     let downloadLink = document.createElement('a');
//     downloadLink.href = pngUrl;
//     downloadLink.download = 'sms_qrcode.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-10 col-12">
//           <div className="card shadow-sm p-4">
//             <h1 className="text-center mb-4">SMS Information and QR Code Generator</h1>
//             <form>
//               <div className="form-group mb-3">
//                 <label htmlFor="phone" className="form-label">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   id="phone"
//                   placeholder="Phone Number"
//                   value={smsInfo.phone}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   placeholder="Message"
//                   value={smsInfo.message}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="4"
//                 />
//               </div>
//               <div className="mb-3 d-flex justify-content-center">
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
//                   <QRCode value={generateQrValue()} size={256} />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SmsForm;

// import React, { useState, useRef, useEffect } from 'react';
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

// function SmsForm() {
//   const [smsInfo, setSmsInfo] = useState({
//     phone: '',
//     message: '',
//   });
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);

//   // Function to handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSmsInfo({ ...smsInfo, [name]: value });
//   };

//   // Function to clear form and QR code
//   const handleClear = () => {
//     setSmsInfo({ phone: '', message: '' });
//     updateQrCode(); // Update QR code to reset it
//   };

//   // Function to generate QR code value
//   const generateQrValue = () => {
//     return `SMSTO:${smsInfo.phone}:${smsInfo.message}`;
//   };

//   // Initialize QR code styling and handle resize
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

//   // Update QR code when size or SMS info changes
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
//   }, [qrSize, smsInfo]);

//   // Function to handle QR code download
//   const handleDownload = () => {
//     qrCode.current.download({ name: "sms_qrcode", extension: "png" });
//   };

//   // Function to handle form submission
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
//                 SMS Information and QR Code Generator
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Phone Number"
//                   name="phone"
//                   value={smsInfo.phone}
//                   onChange={handleChange}
//                   aria-describedby="phoneHelp"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Message"
//                   name="message"
//                   value={smsInfo.message}
//                   onChange={handleChange}
//                   aria-describedby="messageHelp"
//                   multiline
//                   rows={4}
//                 />
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

// export default SmsForm;


// import React, { useState, useRef, useEffect } from 'react';
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

// function SmsForm() {
//   const [smsInfo, setSmsInfo] = useState({
//     phone: '',
//     message: '',
//   });
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);
//   const [image, setImage] = useState(null);

//   // Function to handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSmsInfo({ ...smsInfo, [name]: value });
//   };

//   // Function to clear form and QR code
//   const handleClear = () => {
//     setSmsInfo({ phone: '', message: '' });
//     setImage(null);
//     updateQrCode(); // Update QR code to reset it
//   };

//   // Function to generate QR code value
//   const generateQrValue = () => {
//     return `SMSTO:${smsInfo.phone}:${smsInfo.message}`;
//   };

//   // Initialize QR code styling and handle resize
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

//   // Update QR code when size or SMS info changes
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
//   }, [qrSize, smsInfo, image]);

//   // Function to handle QR code download
//   const handleDownload = () => {
//     qrCode.current.download({ name: "sms_qrcode", extension: "png" });
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateQrCode();
//   };

//   // Function to handle image upload
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
//                 SMS Information and QR Code Generator
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Phone Number"
//                   name="phone"
//                   value={smsInfo.phone}
//                   onChange={handleChange}
//                   aria-describedby="phoneHelp"
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Message"
//                   name="message"
//                   value={smsInfo.message}
//                   onChange={handleChange}
//                   aria-describedby="messageHelp"
//                   multiline
//                   rows={4}
//                 />
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
//                   />
//                 </Box>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default SmsForm;


import React, { useState, useRef, useEffect } from 'react';
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
} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

function SmsForm() {
  const [smsInfo, setSmsInfo] = useState({
    phone: '',
    message: '',
  });
  const qrRef = useRef(null);
  const qrCode = useRef(null);
  const [qrSize, setQrSize] = useState(300);
  const [image, setImage] = useState(null);

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSmsInfo({ ...smsInfo, [name]: value });
  };

  // Function to clear form and QR code
  const handleClear = () => {
    setSmsInfo({ phone: '', message: '' });
    setImage(null);
    updateQrCode(); // Update QR code to reset it
  };

  // Function to generate QR code value
  const generateQrValue = () => {
    return `SMSTO:${smsInfo.phone}:${smsInfo.message}`;
  };

  // Initialize QR code styling and handle resize
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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update QR code when size or SMS info changes
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
  }, [qrSize, smsInfo, image]);

  // Function to handle QR code download
  const handleDownload = () => {
    qrCode.current.download({ name: "sms_qrcode", extension: "png" });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    updateQrCode();
  };

  // Function to handle image upload
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
                SMS Information and QR Code Generator
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone Number"
                  name="phone"
                  value={smsInfo.phone}
                  onChange={handleChange}
                  aria-describedby="phoneHelp"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Message"
                  name="message"
                  value={smsInfo.message}
                  onChange={handleChange}
                  aria-describedby="messageHelp"
                  multiline
                  rows={4}
                />
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

export default SmsForm;



