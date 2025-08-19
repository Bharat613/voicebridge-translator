import React from "react";
import { languages } from "./LanguageSelector"; 
import '../components/ListeningAnimation.css'
const SpeechButton = ({ sourceLang, onResult, isListening, setIsListening }) => {

  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition();

    const langObj = languages.find((l) => l.code === sourceLang);
    recognition.lang = langObj ? langObj.speechCode : sourceLang;

    recognition.interimResults = false;
 recognition.onstart = () => {
      setIsListening(true); // start animation
    };

    recognition.onend = () => {
      setIsListening(false); // stop animation
    };
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      onResult(spokenText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false); 
    };

    recognition.start();
  };

  return <button 
      className={`speak-button ${isListening ? "speaking" : ""}`}
      onClick={handleListen}
    >
      Start Listening
    </button>;

    // return <button onClick={handleListen}>Start Listening</button>;
};

export default SpeechButton;
