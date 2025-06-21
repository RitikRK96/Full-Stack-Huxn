import express from 'express'
const app = express()
import student from './routes/student.js'


// HTTP METHODS:
// Get: Retrive Data
// Post: Create/Insert Data
// Put: Completely Update Data
// Patch: Partially Update Data
// Delete: Delete Data 
// All: Any HTTP Request Method

// app.get("/", (req, res)=>{
//     res.send("Hello World, I am Home <a href='/about'>About</a>")
// })
// app.get("/about", (req, res)=>{
//     res.send("<h1>About page</h1>")
// })

// String Pattern Path
// app.get('/ab?cd', (req, res)=>{
//     res.send("If the user hit (acd) or (abcd) then this will be executed")
// })

// Regex
// app.get(/a/, (req, res)=>{
//     res.send("<h1>This path contains (a) and it will work</h1>")
// })
// app.get(/^\/users\/[0-9]{4}$/, (req, res)=>{
//     res.send("<h1>Working</h1>")
// })

//Double Callback Function
// app.get("/double-cb", (req, res, next) => {
//     console.log("First Callback");
//     next();
// }, (req, res) => {
//     res.send("Second Callback");
// });

//Array Callback Function
// const cb1 = (req, res, next)=>{
//     console.log("First Callback");
//     next()
// }
// const cb2 = (req, res, next)=>{
//     console.log("Second Callback");
//     next()
// }
// const cb3 = (req, res)=>{
//     console.log("Third Callback");
//     res.send("Array of Callback")
// }

// app.get("/array-cb", [cb1, cb2, cb3])

// app.get('/student', (req, res)=>{
//     res.send("Student Data")
// })
// app.post('/student', (req, res)=>{
//     res.send("Student Data Post")
// })
// app.put('/student', (req, res)=>{
//     res.send("Student Data Put")
// })
// app.delete('/student', (req, res)=>{
//     res.send("Student Data Delete")
// })

// app.route('/student')
//     .get((req, res)=>{res.send("Get Student data via route")})
//    .post((req, res)=>{res.send("Post Student data via route")})
//    .put((req, res)=>{res.send("Put Student data via route")})
//    .delete((req, res)=>{res.send("Delete Student data via route")});

// app.use('/student', student)

// app.get("/student/delete/:id", (req, res)=>{
//     // res.send("User deleted...");
//     const {id} = req.params;
//     res.send(`Iphone ${id} Pro Max`)
// })

// app.get("/product/:category/:id", (req, res)=>{
//     const {category, id} = req.params;
//     res.send(`Category: ${category} and Product ID: ${id}`)
// })

app.param("id", (req, res, next, id)=>{
    console.log(`ID: ${id}`);
    next()
})

app.get("/user/:id", (req, res)=>{
    console.log("This is user Id path");
    res.send("Response Ok")
})

app.listen(8000, () => console.log("Server is Up at (8000)"))