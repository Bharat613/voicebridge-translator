import express from "express";
import cors from "cors";
import translate from "google-translate-api-x";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

// Translation endpoint
app.post("/translate", async (req, res) => {
  try {
    const { text, source, target } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    const result = await translate(text, { from: source, to: target });
    res.json({ translatedText: result.text });
  } catch (err) {
    console.error("Translation error:", err);
    res.status(500).json({ error: err.message });
  }
});

// TTS endpoint
app.post("/tts", async (req, res) => {
  try {
    const { text, lang } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

   const baseUrl = process.env.TTS_URL;
const url = `${baseUrl}?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${lang}&client=tw-ob`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
      }
    });

    const buffer = await response.arrayBuffer();
    res.set("Content-Type", "audio/mpeg");
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.error("TTS error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
