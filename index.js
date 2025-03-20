import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

// For ES Modules, define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
