import React, { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import SpeechButton from "./components/SpeechButton";
import Translator from "./components/Translator";
import './styles.css'
import SplashScreen from "./components/SplashScreen";
function App() {
    const [isSpeaking, setIsSpeaking] = useState(false);
const [isListening, setIsListening] = useState(false); //when you dont want animation

  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const speakText = async (text, lang) => {
  if (!text) return;
  setIsSpeaking(true);
  try {
    const API_URL = import.meta.env.VITE_API_URL;   // ✅ get from .env
    const response = await fetch(`${API_URL}/tts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, lang })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.playbackRate = 1.0;
    audio.volume = 1.0;
    audio.play();
    audio.onended = () => setIsSpeaking(false);
  } catch (err) {
    console.error("TTS playback error:", err);
    setIsSpeaking(false);
  }
};
//below function also created for animation management
 const handleSpeak = async () => {
    await speakText(translatedText, targetLang);
  };

  return (
    <div>
      <SplashScreen/>
      <h1>VoiceBridge</h1>
      <p style={{fontWeight:"bold"}}>Real-Time Language Translator</p>

      <LanguageSelector
        label="Source Language"
        value={sourceLang}
        onChange={(e) => setSourceLang(e.target.value)}
      />

      <LanguageSelector
        label="Target Language"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      />

      {/* <SpeechButton
        sourceLang={sourceLang}
        onResult={(text) => setTextToTranslate(text)}
      /> */}
      <SpeechButton
  sourceLang={sourceLang}
  onResult={(text) => setTextToTranslate(text)}
  isListening={isListening}
  setIsListening={setIsListening}
/>

      <h3>Recognized Text:</h3>
      <textarea value={textToTranslate} readOnly rows={3} />

      <Translator
        sourceLang={sourceLang}
        targetLang={targetLang}
        text={textToTranslate}
        onTranslate={(text) => setTranslatedText(text)}
      />

<button
        className={`speak-button ${isSpeaking ? "speaking" : ""}`}
        onClick={handleSpeak}
      >
        Speak Translation
      </button>

      {/* <button onClick={() => speakText(translatedText, targetLang)}> Speak Translation </button> */}
    </div>
  );
}

export default App;
