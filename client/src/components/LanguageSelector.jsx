import React from "react";

const languages = [
  // English
  { code: "en", speechCode: "en-US", name: "English" },

  // Indian Languages (Eighth Schedule + widely spoken)
  { code: "hi", speechCode: "hi-IN", name: "Hindi" },
  { code: "bn", speechCode: "bn-IN", name: "Bengali" },
  { code: "te", speechCode: "te-IN", name: "Telugu" },
  { code: "mr", speechCode: "mr-IN", name: "Marathi" },
  { code: "ta", speechCode: "ta-IN", name: "Tamil" },
  { code: "ur", speechCode: "ur-IN", name: "Urdu" },
  { code: "gu", speechCode: "gu-IN", name: "Gujarati" },
  { code: "kn", speechCode: "kn-IN", name: "Kannada" },
  { code: "ml", speechCode: "ml-IN", name: "Malayalam" },
  { code: "or", speechCode: "or-IN", name: "Odia" },
  { code: "pa", speechCode: "pa-IN", name: "Punjabi" },
  { code: "as", speechCode: "as-IN", name: "Assamese" },
  { code: "ma", speechCode: "hi-IN", name: "Maithili (mapped to Hindi)" },
  { code: "bh", speechCode: "hi-IN", name: "Bhojpuri (mapped to Hindi)" },
  { code: "sd", speechCode: "sd-IN", name: "Sindhi" },
  { code: "kok", speechCode: "kok-IN", name: "Konkani" },
  { code: "san", speechCode: "hi-IN", name: "Sanskrit (mapped to Hindi)" },
  { code: "ne", speechCode: "ne-NP", name: "Nepali" },
  { code: "dog", speechCode: "hi-IN", name: "Dogri (mapped to Hindi)" },
  { code: "ks", speechCode: "ks-IN", name: "Kashmiri" },
  { code: "lus", speechCode: "hi-IN", name: "Mizo (mapped to Hindi)" },

  // Major World Languages
  { code: "es", speechCode: "es-ES", name: "Spanish" },
  { code: "fr", speechCode: "fr-FR", name: "French" },
  { code: "de", speechCode: "de-DE", name: "German" },
  { code: "zh", speechCode: "zh-CN", name: "Chinese" },
  { code: "ja", speechCode: "ja-JP", name: "Japanese" },
  { code: "ko", speechCode: "ko-KR", name: "Korean" },
  { code: "ar", speechCode: "ar-SA", name: "Arabic" },
  { code: "ru", speechCode: "ru-RU", name: "Russian" },
  { code: "pt", speechCode: "pt-PT", name: "Portuguese" },
  { code: "it", speechCode: "it-IT", name: "Italian" },
  { code: "nl", speechCode: "nl-NL", name: "Dutch" },
  { code: "sv", speechCode: "sv-SE", name: "Swedish" },
  { code: "tr", speechCode: "tr-TR", name: "Turkish" },
  { code: "vi", speechCode: "vi-VN", name: "Vietnamese" },
  { code: "th", speechCode: "th-TH", name: "Thai" },
  { code: "pl", speechCode: "pl-PL", name: "Polish" },
  { code: "he", speechCode: "he-IL", name: "Hebrew" },
  { code: "fa", speechCode: "fa-IR", name: "Persian" },
  { code: "id", speechCode: "id-ID", name: "Indonesian" }
];

const LanguageSelector = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <select value={value} onChange={onChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
export { languages };
