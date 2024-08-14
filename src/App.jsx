import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QR from './Component/QR';
import Header from './Component/Header';
import UrlForm from './Component/Form/UrlForm';
import PdfForm from './Component/Form/PdfForm';
import MultiUrlForm from './Component/Form/MultiUrlForm';
import ContactForm from './Component/Form/ContactForm';
// import PlainTextForm from './Component/Form/PlainTextForm';
import AppForm from './Component/Form/AppForm';
import SmsForm from './Component/Form/SmsForm';
import EmailForm from './Component/Form/EmailForm';
import PhoneForm from './Component/Form/PhoneForm';
import WifiForm from './Component/Form/WifiForm'
import VcardForm from './Component/Form/VcardForm';
import BitcoinForm from './Component/Form/BitcoinForm';
import TwitterForm from './Component/Form/TwitterForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<QR />} />
        <Route path="/url" element={<UrlForm />} />
        <Route path="/pdf" element={<PdfForm />} />
        <Route path="/multi-url" element={<MultiUrlForm />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* <Route path="/plain-text" element={<PlainTextForm />} /> */}
        <Route path="/app" element={<AppForm />} />
        <Route path="/sms" element={<SmsForm />} />
        <Route path="/email" element={<EmailForm />} />
        <Route path="/phone" element={<PhoneForm />} />
        <Route path="/wifi" element={<WifiForm/>} />
        <Route path="/vcard" element={<VcardForm/>}  />
        <Route path="/bitcoin" element={<BitcoinForm/>}/>
        <Route path="/twitter" element={<TwitterForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
