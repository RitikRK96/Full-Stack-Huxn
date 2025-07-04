import mongoose from "mongoose";

const movieScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
    },
    money:{
        type: mongoose.Decimal128,
        required:true,
        validate: v=> v>=10,
    },
    genre:{type: Array},
    isActive: {type:Boolean},
    comments:[{value: {type:String}, published: {type:Date, default:Date.now}}]
})

const Movie = mongoose.model("Movie", movieScheme);

// const createDoc = async ()=>{
//     try{
//         const movie = new Movie({

//             name:"The 500",
//             rating:4.5,
//             money:100,
//             genre:["Action", "Crime"],
//             isActive:true,
//             comments: [{value:"Good movie"}]
//         })
//         const result = await movie.save();
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// export {createDoc};

// const insertManyDoc = async ()=>{
//     try{
//         const m1 = new Movie({
//             name:"The Extraction",
//             rating:4,
//             money:1400,
//             genre:["Action", "Thriller"],
//             isActive:true,
//             comments: [{value:"Best ever movie"}]
//         });
//         const m2 = new Movie({
//             name:"The 500",
//             rating:4.5,
//             money:100,
//             genre:["Action", "Crime"],
//             isActive:true,
//             comments: [{value:"Good movie"}]
//         });
//         const m3 = new Movie({
//             name: "Pokemon",
//             rating: 5,
//             money: 470,
//             genre: ["Animated", "Adventure"],
//             isActive: true,
//             comments: [{value:"Best Story"}]
//         })
//         const result = await Movie.insertMany([m1,m2,m3]);
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// expo
// rt {insertManyDoc};

// const allDoc = async ()=>{
//     try{
//         const movie = await Movie.find();
//         movie.forEach((m)=>{
//             console.log(m.name);
//             console.log(m.rating);
//         })        
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// export {allDoc};

// const singleDoc = async ()=>{
//     try{
//         const movie = await Movie.findById("68680c43d51ecb4c4fe208c2");
//         console.log(movie);
//     }
//     catch(err){
//         console.log(err); 
//     }
// }
// export {singleDoc};

// const updateDoc = async ()=>{
//     try{
//         const result = await Movie.updateOne({name:"The Extraction"},{
//             $set:{
//                 rating:5,
//                 money:1500,
//             }
//         })
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// export {updateDoc};

const deleteDoc = async ()=>{
    try{
        const result = await Movie.deleteOne({name:"Pokemon"});
        // const result = await Movie.findByIdAndDelete("68680c43d51ecb4c4fe208c2");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

export {deleteDoc};