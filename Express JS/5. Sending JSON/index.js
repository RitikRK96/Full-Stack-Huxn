import express from 'express'
import { products } from './products.js';
const app = express()
import userCredentials from './Middleware.js';

app.use(userCredentials)

app.get("/product", (req, res)=>{
    res.json(products)
})

app.get("/", userCredentials, (req, res)=> {
    res.send("<h1>Hello Ritik</h1>");
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})