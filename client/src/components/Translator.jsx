import React, { useEffect, useState } from "react";

const Translator = ({ sourceLang, targetLang, text, onTranslate }) => {
  const [translatedText, setTranslatedText] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  useEffect(() => {
    if (!text) return;

    const translateText = async () => {
      try {
        const response = await fetch(`${API_URL}/translate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text,
            source: sourceLang,
            target: targetLang,
          }),
        });

        const data = await response.json();
        setTranslatedText(data.translatedText);

        if (onTranslate) onTranslate(data.translatedText);
      } catch (err) {
        console.error("Translation error:", err);
      }
    };

    translateText();
  }, [text, sourceLang, targetLang, API_URL]);

  return (
    <div>
      <h3>Translated Text:</h3>
      <textarea value={translatedText} readOnly rows={3} />
    </div>
  );
};

export default Translator;
