import express from "express";

const app = express();

// Use Render’s port or default to 3333 locally
const PORT = process.env.PORT || 3333;

let intervalStarted = false;

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Server is running ✅");

  if (!intervalStarted) {
    intervalStarted = true;

    setInterval(async () => {
      try {
        const response = await fetch("https://skfood.onrender.com/");
        const data = await response.text();
        console.log("Response from target:", data);
      } catch (err) {
        console.error("Error calling API:", err.message);
      }
    }, 850000);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Listening on port ${PORT}`);
});
