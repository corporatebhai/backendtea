import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));

app.use(express.json()); 
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

export { app };