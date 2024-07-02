// app.js (or index.js)
import express from "express";
import path from "path";
import router from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "src/views");
app.get("/", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
