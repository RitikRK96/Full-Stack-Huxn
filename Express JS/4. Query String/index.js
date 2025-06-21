import express from 'express'
const app = express()

app.get("/product", (req, res)=>{
    const {category, price} = req.query;
    res.send(`Response OK i.e ${category} and Price is Rs.${price}`)
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})