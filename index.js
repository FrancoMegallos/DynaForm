// app.js (or index.js)
import express from "express";
import path from "path";
import router from "./src/routes/routes.js";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true | false }));

app.get("*/*", router);
app.post("*/*", router);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
