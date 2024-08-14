import React, { useEffect, useRef } from 'react';
import NgxQrcodeStyling from 'ngx-qrcode-styling';

const CustomQRCode = () => {
  const qrCodeRef = useRef(null);

  const config = {
    width: 300,
    height: 300,
    data: "https://www.facebook.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    margin: 5,
    dotsOptions: {
      color: "#1977f3",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  };

  useEffect(() => {
    const qrCode = new NgxQrcodeStyling(config);
    qrCode.append(qrCodeRef.current);
  }, []);

  return (
    <div ref={qrCodeRef}></div>
  );
};

export default CustomQRCode;
