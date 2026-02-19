import express from "express";

import dotenv from "dotenv";


dotenv.config();

const app = express();

const { PORT } = process.env;

app.get('/' , (req , res) => {
    res.send("Hello from the server side")
})

app.listen( PORT  , () => {
    console.log(`The server is up and running on port ${PORT}`);
})