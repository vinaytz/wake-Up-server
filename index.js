// import express from 'express';
// const app = express();

// app.listen(3333, () => {
//   console.log("listening...");
// });


// app.get("/api", (req, res)=>{
//     console.log("Hello")
//     setInterval(async () => {
//     try {
//       await fetch("https://skfood.onrender.com/");
//       console.log("Response from 6363");
//     } catch (err) {
//       console.error("Error calling API:", err.message);
//     }
//     }, 850000);
// })


let intervalStarted = false;

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Server is running!");

  if (!intervalStarted) {
    intervalStarted = true;

    setInterval(async () => {
      try {
        const response = await fetch("https://skfood.onrender.com/");
        const data = await response.text();
        console.log("Response from 6363:", data);
      } catch (err) {
        console.error("Error calling API:", err.message);
      }
    }, 850000);
  }
});
