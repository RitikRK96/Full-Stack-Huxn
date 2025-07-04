import express from 'express'
import connectDB from './db/connectDB.js';
// import {createDoc, insertManyDoc, allDoc, singleDoc,updateDoc} from './models/Movies.js'
import {deleteDoc} from './models/Movies.js'
const app = express()
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/life';

connectDB(DATABASE_URL)
// createDoc();
// allDoc();
// singleDoc();
// updateDoc()
deleteDoc()
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})
