import express from 'express';
const app = express();

app.listen(3333, () => {
  console.log("listening...");
});


app.get("/", (req, res)=>{
    console.log("Hello")
    setInterval(async () => {
    try {
      await fetch("http://localhost:6363/api/checkSeverRunning");
      console.log("Response from 6363");
    } catch (err) {
      console.error("Error calling API:", err.message);
    }
    }, 850000);
})