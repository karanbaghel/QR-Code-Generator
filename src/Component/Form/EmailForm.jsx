// import React, { useState, useRef } from 'react';
// import QRCode from 'qrcode.react';

// function EmailForm() {
//   const [emailInfo, setEmailInfo] = useState({ to: '', subject: '', body: '' });
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEmailInfo({ ...emailInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setEmailInfo({ to: '', subject: '', body: '' });
//   };

//   const generateQrValue = () => {
//     return `mailto:${emailInfo.to}?subject=${encodeURIComponent(emailInfo.subject)}&body=${encodeURIComponent(emailInfo.body)}`;
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector('canvas');
//     const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//     let downloadLink = document.createElement('a');
//     downloadLink.href = pngUrl;
//     downloadLink.download = 'email_qrcode.png';
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className="container my-4">
//       <h1 className="text-center mb-4">Email Information and QR Code Generator</h1>
//       <form className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="form-group mb-3">
//             <label htmlFor="to" className="form-label">To</label>
//             <input
//               type="email"
//               id="to"
//               name="to"
//               placeholder="To"
//               value={emailInfo.to}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="subject" className="form-label">Subject</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               placeholder="Subject"
//               value={emailInfo.subject}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="body" className="form-label">Body</label>
//             <textarea
//               id="body"
//               name="body"
//               placeholder="Body"
//               value={emailInfo.body}
//               onChange={handleChange}
//               className="form-control"
//               rows="4"
//             />
//           </div>
//           <div className="d-flex justify-content-between mb-3">
//             <button
//               type="button"
//               onClick={handleClear}
//               className="btn btn-secondary"
//             >
//               Clear
//             </button>
//             <button
//               type="button"
//               onClick={handleDownload}
//               className="btn btn-primary"
//             >
//               Download
//             </button>
//           </div>
//           <div ref={qrRef} className="border p-3 d-flex justify-content-center" aria-label="QR Code">
//             <QRCode value={generateQrValue()} size={256} />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EmailForm;

// import React, { useState, useRef } from "react";
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
// } from "@mui/material";

// function EmailForm() {
//   const [emailInfo, setEmailInfo] = useState({ to: "", subject: "", body: "" });
//   const qrRef = useRef();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEmailInfo({ ...emailInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setEmailInfo({ to: "", subject: "", body: "" });
//   };

//   const generateQrValue = () => {
//     return `mailto:${emailInfo.to}?subject=${encodeURIComponent(emailInfo.subject)}&body=${encodeURIComponent(emailInfo.body)}`;
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector("canvas");
//     const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//     let downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "email_qrcode.png";
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
//                 Email Information
//               </Typography>
//               <Box component="form">
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="To"
//                   name="to"
//                   type="email"
//                   value={emailInfo.to}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Subject"
//                   name="subject"
//                   value={emailInfo.subject}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Body"
//                   name="body"
//                   value={emailInfo.body}
//                   onChange={handleChange}
//                   multiline
//                   rows={4}
//                 />
//                 <Box sx={{ mt: 2, textAlign: "center" }}>
//                   <Button variant="contained" onClick={handleClear} sx={{ mr: 1 }}>
//                     Clear
//                   </Button>
//                   <Button variant="contained" onClick={handleDownload}>
//                     Download QR Code
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
//               >
//                 <QRCode value={generateQrValue()} size={256} />
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default EmailForm;


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

// function EmailForm() {
//   const [emailInfo, setEmailInfo] = useState({ to: "", subject: "", body: "" });
//   const qrRef = useRef(null);
//   const qrCode = useRef(null);
//   const [qrSize, setQrSize] = useState(300);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEmailInfo({ ...emailInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setEmailInfo({ to: "", subject: "", body: "" });
//     updateQrCode(); // Update QR code to reset it
//   };

//   const generateQrValue = () => {
//     return `mailto:${emailInfo.to}?subject=${encodeURIComponent(emailInfo.subject)}&body=${encodeURIComponent(emailInfo.body)}`;
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
//   }, [qrSize, emailInfo]);

//   const handleDownload = () => {
//     qrCode.current.download({ name: "email_qrcode", extension: "png" });
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
//                 Email Information and QR Code Generator
//               </Typography>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="To"
//                   name="to"
//                   type="email"
//                   value={emailInfo.to}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Subject"
//                   name="subject"
//                   value={emailInfo.subject}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label="Body"
//                   name="body"
//                   value={emailInfo.body}
//                   onChange={handleChange}
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

// export default EmailForm;

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
} from "@mui/material";

function EmailForm() {
  const [emailInfo, setEmailInfo] = useState({ to: "", subject: "", body: "" });
  const qrRef = useRef(null);
  const qrCode = useRef(null);
  const [qrSize, setQrSize] = useState(300);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailInfo({ ...emailInfo, [name]: value });
  };

  const handleClear = () => {
    setEmailInfo({ to: "", subject: "", body: "" });
    setImage(null);
    updateQrCode(); // Update QR code to reset it
  };

  const generateQrValue = () => {
    return `mailto:${emailInfo.to}?subject=${encodeURIComponent(emailInfo.subject)}&body=${encodeURIComponent(emailInfo.body)}`;
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
  }, [qrSize, emailInfo, image]);

  const handleDownload = () => {
    qrCode.current.download({ name: "email_qrcode", extension: "png" });
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
                Email Information and QR Code Generator
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="To"
                  name="to"
                  type="email"
                  value={emailInfo.to}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Subject"
                  name="subject"
                  value={emailInfo.subject}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Body"
                  name="body"
                  value={emailInfo.body}
                  onChange={handleChange}
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

export default EmailForm;
