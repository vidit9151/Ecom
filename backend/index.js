import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = 8080 || process.env.PORT;

const app = express();
app.use(cookieParser());
//give fronend domain name
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
