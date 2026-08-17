import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log(name);
  console.log(email);
  console.log(message);

  res.json({
    success: true,
    message: "Message received successfully",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});