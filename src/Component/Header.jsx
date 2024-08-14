import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLink, FaFilePdf, FaListAlt, FaAddressBook, FaRegFileAlt, FaMobileAlt, FaSms, FaEnvelope, FaPhone, FaWifi, FaIdCard, FaBitcoin, FaTwitter } from 'react-icons/fa';
import './style/header.css';

function Header() {
  return (
    <div className="header container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12 d-flex justify-content-center">
          <NavLink to="/url" className="header-item" activeClassName="active">
            <FaLink size={24} />
            <span>URL</span>
          </NavLink>
          {/* <NavLink to="/pdf" className="header-item" activeClassName="active">
            <FaFilePdf size={24} />
            <span>PDF</span>
          </NavLink> */}
          {/* <NavLink to="/multi-url" className="header-item" activeClassName="active">
            <FaListAlt size={24} />
            <span>Multi-URL</span>
          </NavLink> */}
          <NavLink to="/contact" className="header-item" activeClassName="active">
            <FaAddressBook size={24} />
            <span>Contact</span>
          </NavLink>
          {/* <NavLink to="/plain-text" className="header-item" activeClassName="active">
            <FaRegFileAlt size={24} />
            <span>Plain Text</span>
          </NavLink> */}
          {/* <NavLink to="/app" className="header-item" activeClassName="active">
            <FaMobileAlt size={24} />
            <span>App</span>
          </NavLink> */}
          <NavLink to="/sms" className="header-item" activeClassName="active">
            <FaSms size={24} />
            <span>SMS</span>
          </NavLink>
          <NavLink to="/email" className="header-item" activeClassName="active">
            <FaEnvelope size={24} />
            <span>Email</span>
          </NavLink>
          <NavLink to="/phone" className="header-item" activeClassName="active">
            <FaPhone size={24} />
            <span>Phone</span>
          </NavLink>
          <NavLink to="/wifi" className="header-item" activeClassName="active">
            <FaWifi size={24} />
            <span>WiFi</span>
          </NavLink>
          <NavLink to="/vcard" className="header-item" activeClassName="active">
            <FaIdCard size={24} />
            <span>vCard</span>
          </NavLink>
          <NavLink to="/bitcoin" className="header-item" activeClassName="active">
            <FaBitcoin size={24} />
            <span>Bitcoin</span>
          </NavLink>
          <NavLink to="/twitter" className="header-item" activeClassName="active">
            <FaTwitter size={24} />
            <span>Twitter</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import {
//   FaLink, FaFilePdf, FaListAlt, FaAddressBook, FaRegFileAlt, FaMobileAlt, FaSms,
//   FaEnvelope, FaPhone, FaWifi, FaIdCard, FaBitcoin, FaTwitter
// } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/header.css';

// function Header() {
//   return (
//     <Navbar bg="light" expand="lg" className="header">
//       <div className="container-fluid">
//         <Navbar.Brand href="#">QR Generator</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/url" className="header-item" activeClassName="active">
//               <FaLink size={24} />
//               <span>URL</span>
//             </Nav.Link>
//             {/* <Nav.Link as={NavLink} to="/pdf" className="header-item" activeClassName="active">
//               <FaFilePdf size={24} />
//               <span>PDF</span>
//             </Nav.Link> */}
//             {/* <Nav.Link as={NavLink} to="/multi-url" className="header-item" activeClassName="active">
//               <FaListAlt size={24} />
//               <span>Multi-URL</span>
//             </Nav.Link> */}
//             <Nav.Link as={NavLink} to="/contact" className="header-item" activeClassName="active">
//               <FaAddressBook size={24} />
//               <span>Contact</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/plain-text" className="header-item" activeClassName="active">
//               <FaRegFileAlt size={24} />
//               <span>Plain Text</span>
//             </Nav.Link>
//             {/* <Nav.Link as={NavLink} to="/app" className="header-item" activeClassName="active">
//               <FaMobileAlt size={24} />
//               <span>App</span>
//             </Nav.Link> */}
//             <Nav.Link as={NavLink} to="/sms" className="header-item" activeClassName="active">
//               <FaSms size={24} />
//               <span>SMS</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/email" className="header-item" activeClassName="active">
//               <FaEnvelope size={24} />
//               <span>Email</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/phone" className="header-item" activeClassName="active">
//               <FaPhone size={24} />
//               <span>Phone</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/wifi" className="header-item" activeClassName="active">
//               <FaWifi size={24} />
//               <span>WiFi</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/vcard" className="header-item" activeClassName="active">
//               <FaIdCard size={24} />
//               <span>vCard</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/bitcoin" className="header-item" activeClassName="active">
//               <FaBitcoin size={24} />
//               <span>Bitcoin</span>
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/twitter" className="header-item" activeClassName="active">
//               <FaTwitter size={24} />
//               <span>Twitter</span>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// }

// export default Header;

