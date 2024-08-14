// import React, { useState, useRef } from 'react';
// import QRCode from 'qrcode.react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UrlForm() {
//   const [url, setUrl] = useState('');
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     setUrl(event.target.value);
//   };

//   const handleClear = () => {
//     setUrl('');
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector('canvas');
//     const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//     let downloadLink = document.createElement('a');
//     downloadLink.href = pngUrl;
//     downloadLink.download = 'qrcode.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-8 col-md-10 col-sm-12">
//           <div className="card shadow-sm p-4">
//             <h1 className="text-center mb-4">QR Code Generator for URL</h1>
//             <div className="row">
//               <div className="col-md-6">
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="urlInput" className="form-label">Enter URL</label>
//                     <input
//                       type="text"
//                       id="urlInput"
//                       placeholder="Enter URL"
//                       value={url}
//                       onChange={handleChange}
//                       className="form-control mb-3"
//                       aria-describedby="urlHelp"
//                     />
//                     <small id="urlHelp" className="form-text text-muted">Enter the URL you want to generate a QR code for.</small>
//                   </div>
//                 </form>
//                 <div className="d-flex justify-content-center mb-2">
//                   <button
//                     onClick={handleClear}
//                     className="btn btn-success me-2"
//                   >
//                     Clear
//                   </button>
//                   <button
//                     onClick={handleDownload}
//                     className="btn btn-primary"
//                   >
//                     Download
//                   </button>
//                 </div>
//               </div>
//               <div className="col-md-6 text-center">
//                 <div ref={qrRef} className="d-inline-block border p-3" aria-label="QR Code">
//                   <QRCode value={url || ' '} size={256} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UrlForm;

// import React, { useState, useRef, useEffect } from "react";
// import QRCode from "qrcode.react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   InputLabel,
// } from "@mui/material";

// function UrlForm() {
//   const [url, setUrl] = useState("");
//   const [photo, setPhoto] = useState("");
//   const qrRef = useRef();
//   const [qrSize, setQrSize] = useState(256);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 576) {
//         setQrSize(150); // Small screen size
//       } else if (width < 768) {
//         setQrSize(200); // Medium screen size
//       } else {
//         setQrSize(256); // Large screen size
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleChange = (event) => {
//     setUrl(event.target.value);
//   };

//   const handleClear = () => {
//     setUrl("");
//     setPhoto("");
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setPhoto(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector("canvas");
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     let downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "qrcode.png";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <Container>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h4" align="center" gutterBottom>
//                 QR Code Generator for URL
//               </Typography>
//               <Box component="form">
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Enter URL"
//                   value={url}
//                   onChange={handleChange}
//                 />
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
//                 sx={{
//                   border: "1px solid #000",
//                   padding: "10px",
//                   textAlign: "center",
//                 }}
//                 aria-label="QR Code"
//               >
//                 <QRCode value={url || " "} size={qrSize} includeMargin={true} />
//                 {photo && (
//                   <Box
//                     component="img"
//                     src={photo}
//                     alt="Uploaded"
//                     sx={{ mt: 2, maxWidth: "100%", height: "auto" }}
//                   />
//                 )}
//               </Box>
//               <InputLabel htmlFor="photo" sx={{ mt: 2 }}>
//                 Upload Photo
//               </InputLabel>
//               <Button variant="contained" component="label" fullWidth>
//                 Upload
//                 <input
//                   type="file"
//                   id="photo"
//                   name="photo"
//                   accept="image/*"
//                   hidden
//                   onChange={handleFileChange}
//                 />
//               </Button>
//               <Box sx={{ mt: 2, textAlign: "center" }}>
//                 <Button
//                   variant="contained"
//                   onClick={handleClear}
//                   sx={{ mr: 1 }}
//                 >
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

// export default UrlForm;

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
  InputLabel,
} from "@mui/material";

function UrlForm() {
  const [url, setUrl] = useState(null);
  const [photo, setPhoto] = useState(null);
  const qrRef = useRef();
  const qrCode = useRef(null);
  const [qrSize, setQrSize] = useState(256);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClear = () => {
    setUrl("");
    setPhoto(null);
    updateQrCode(); // Update QR code to reset it
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: "svg",
      data: url,
      dotsOptions: {
        color: "#1DA1F2",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#ffffff",
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
        setQrSize(150); // Small screen size
      } else if (width < 768) {
        setQrSize(200); // Medium screen size
      } else {
        setQrSize(256); // Large screen size
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateQrCode = () => {
    if (qrCode.current) {
      qrCode.current.update({
        width: qrSize,
        height: qrSize,
        data: url,
        image: photo, // Include the uploaded photo in the QR code
      });
    }
  };

  useEffect(() => {
    updateQrCode();
  }, [qrSize, url, photo]);

  const handleDownload = () => {
    qrCode.current.download({ name: "qrcode", extension: "png" });
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                QR Code Generator for URL
              </Typography>
              <Box component="form">
                <TextField
                  fullWidth
                  margin="normal"
                  label="Enter URL"
                  value={url}
                  onChange={handleChange}
                />
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
                sx={{
                  border: "1px solid #000",
                  padding: "10px",
                  textAlign: "center",
                }}
                aria-label="QR Code"
              />
              <InputLabel htmlFor="photo" sx={{ mt: 2 }}>
                Upload Photo
              </InputLabel>
              <Button variant="contained" component="label" fullWidth>
                Upload
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleClear}
                  sx={{ mr: 1 }}
                >
                  Clear
                </Button>
                <Button variant="contained" onClick={handleDownload}>
                  Download QR Code
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UrlForm;

