import React from "react";

const languages = [
  // English
  { code: "en", name: "English" },

  // Indian Languages (Eighth Schedule + widely spoken)
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" },
  { code: "ta", name: "Tamil" },
  { code: "ur", name: "Urdu" },
  { code: "gu", name: "Gujarati" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "or", name: "Odia" },
  { code: "pa", name: "Punjabi" },
  { code: "as", name: "Assamese" },
  { code: "ma", name: "Maithili" },
  { code: "bh", name: "Bhojpuri" },
  { code: "sd", name: "Sindhi" },
  { code: "kok", name: "Konkani" },
  { code: "san", name: "Sanskrit" },
  { code: "ne", name: "Nepali" },
  { code: "dog", name: "Dogri" },
  { code: "ks", name: "Kashmiri" },
  { code: "lus", name: "Lushai / Mizo" },

  // Major World Languages
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "ar", name: "Arabic" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "it", name: "Italian" },
  { code: "nl", name: "Dutch" },
  { code: "sv", name: "Swedish" },
  { code: "tr", name: "Turkish" },
  { code: "vi", name: "Vietnamese" },
  { code: "th", name: "Thai" },
  { code: "pl", name: "Polish" },
  { code: "he", name: "Hebrew" },
  { code: "fa", name: "Persian" },
  { code: "id", name: "Indonesian" }
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
