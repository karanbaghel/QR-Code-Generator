// import React, { useState, useRef, useEffect } from "react";
// import QRCode from "qrcode.react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import '../Form/style/contact.css'

// function ContactQrForm() {
//   const [contactInfo, setContactInfo] = useState({
//     name: "",
//     lastName: "",
//     organization: "",
//     title: "",
//     email: "",
//     phone: "",
//     street: "",
//   });

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
//     const { name, value } = event.target;
//     setContactInfo({ ...contactInfo, [name]: value });
//   };

//   const handleClear = () => {
//     setContactInfo({
//       name: "",
//       lastName: "",
//       organization: "",
//       title: "",
//       email: "",
//       phone: "",
//       street: "",
//     });
//   };

//   const generateQrValue = () => {
//     return `
//       Name: ${contactInfo.name} ${contactInfo.lastName}
//       Organization: ${contactInfo.organization}
//       Title: ${contactInfo.title}
//       Email: ${contactInfo.email}
//       Phone: ${contactInfo.phone}
//       Street: ${contactInfo.street}
//     `;
//   };

//   const handleDownload = () => {
//     const canvas = qrRef.current.querySelector("canvas");
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     let downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "contact_qrcode.png";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-12 mb-4">
//           <div className="card shadow-sm p-4">
//             <h1 className="text-center mb-4">Contact Information</h1>
//             <form>
//               <div className="form-group mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   value={contactInfo.name}
//                   onChange={handleChange}
//                   className="form-control mb-2"
//                   aria-describedby="nameHelp"
//                 />
//                 <small id="nameHelp" className="form-text text-muted">
//                   Enter your first name.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="lastName" className="form-label">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={contactInfo.lastName}
//                   onChange={handleChange}
//                   className="form-control mb-2"
//                   aria-describedby="lastNameHelp"
//                 />
//                 <small id="lastNameHelp" className="form-text text-muted">
//                   Enter your last name.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="organization" className="form-label">
//                   Organization
//                 </label>
//                 <input
//                   type="text"
//                   id="organization"
//                   name="organization"
//                   placeholder="Organization"
//                   value={contactInfo.organization}
//                   onChange={handleChange}
//                   className="form-control mb-2"
//                   aria-describedby="organizationHelp"
//                 />
//                 <small id="organizationHelp" className="form-text text-muted">
//                   Enter your organization name.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="title" className="form-label">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   placeholder="Title"
//                   value={contactInfo.title}
//                   onChange={handleChange}
//                   className="form-control mb-2"
//                   aria-describedby="titleHelp"
//                 />
//                 <small id="titleHelp" className="form-text text-muted">
//                   Enter your title.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   value={contactInfo.email}
//                   onChange={handleChange}
//                   className="form-control mb-2"
//                   aria-describedby="emailHelp"
//                 />
//                 <small id="emailHelp" className="form-text text-muted">
//                   Enter your email address.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="phone" className="form-label">
//                   Phone
//                 </label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   placeholder="Phone"
//                   value={contactInfo.phone}
//                   onChange={handleChange}
//                   className="form-control mb-2"
//                   aria-describedby="phoneHelp"
//                 />
//                 <small id="phoneHelp" className="form-text text-muted">
//                   Enter your phone number.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="street" className="form-label">
//                   Street
//                 </label>
//                 <input
//                   type="text"
//                   id="street"
//                   name="street"
//                   placeholder="Street"
//                   value={contactInfo.street}
//                   onChange={handleChange}
//                   className="form-control mb-3"
//                   aria-describedby="streetHelp"
//                 />
//                 <small id="streetHelp" className="form-text text-muted">
//                   Enter your street address.
//                 </small>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-8 col-sm-12 mb-4">
//           <div className="card shadow-sm p-4">
//             <h2 className="text-center mb-4">QR Code</h2>
//             <div className="text-center">
//               <div
//                 ref={qrRef}
//                 style={{ border: "1px solid #000", padding: "10px" }}
//                 aria-label="QR Code"
//               >
//                 <QRCode value={generateQrValue()} size={qrSize} />
//                 <div className="mb-3 d-flex justify-content-center">
//                   <button
//                     type="button"
//                     onClick={handleClear}
//                     className="btn btn-light me-2"
//                   >
//                     Clear
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleDownload}
//                     className="btn btn-primary"
//                   >
//                     Download QR Code
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





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

function ContactQrForm() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    lastName: "",
    organization: "",
    title: "",
    email: "",
    phone: "",
    street: "",
    photo: "",
  });

  const qrRef = useRef(null);
  const qrCode = useRef(null);
  const [qrSize, setQrSize] = useState(300);

  const generateQrValue = () => {
    return `
      Name: ${contactInfo.name} ${contactInfo.lastName}
      Organization: ${contactInfo.organization}
      Title: ${contactInfo.title}
      Email: ${contactInfo.email}
      Phone: ${contactInfo.phone}
      Street: ${contactInfo.street}
    `;
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
        imageSize: 0.3, // Adjusted to ensure image is properly visible
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
        image: contactInfo.photo,
      });
    }
  };

  useEffect(() => {
    updateQrCode();
  }, [qrSize, contactInfo.photo, contactInfo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleClear = () => {
    setContactInfo({
      name: "",
      lastName: "",
      organization: "",
      title: "",
      email: "",
      phone: "",
      street: "",
      photo: "",
    });
    updateQrCode(); // Clear QR code
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setContactInfo({ ...contactInfo, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    qrCode.current.download({ name: "contact_qrcode", extension: "png" });
  };

  const handleGenerate = () => {
    updateQrCode();
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Contact Information
              </Typography>
              <Box component="form">
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  value={contactInfo.name}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lastName"
                  value={contactInfo.lastName}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Organization"
                  name="organization"
                  value={contactInfo.organization}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Title"
                  name="title"
                  value={contactInfo.title}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Street"
                  name="street"
                  value={contactInfo.street}
                  onChange={handleChange}
                />

                
                

                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Button variant="contained" onClick={handleGenerate}>
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
                <Button variant="contained" onClick={handleClear} sx={{ mr: 1 }}>
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

export default ContactQrForm;
