// SplashScreen.jsx
import React, { useEffect, useState } from "react";
import "./SplashScreen.css"; // optional styling

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // hide after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-screen">
      <img src="/icons/icon-192.png" alt="Logo" />
      <h1>VoiceBridge</h1>
      <p>Speak in your language and translate instantly to others.</p>
    </div>
  );
};

export default SplashScreen;
