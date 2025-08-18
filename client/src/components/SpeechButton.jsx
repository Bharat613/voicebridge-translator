import React from "react";

const SpeechButton = ({ sourceLang, onResult }) => {
  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = sourceLang;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      onResult(spokenText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return <button onClick={handleListen}>Start Listening</button>;
};

export default SpeechButton;
