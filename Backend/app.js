import express from "express";
import { dbConnection }  from "./database/dbConnection.js";
import dotenv from 'dotenv'
import cors from 'cors'
import router from "./router/router.js";
dotenv.config();


const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/message',router);
dbConnection;

export default app;
