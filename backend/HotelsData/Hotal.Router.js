const express=require("express")
const { HotelModal } = require("./Hotel.Model")


const hotel=express.Router()


// hotel.get("/",async(req,res)=>{
     
//     const {location="",price="0-10000",type="",bed=""}=req.query
   

//     let [less,greater]=price.split("-")
//     console.log(location,price,type,bed)

//     try {
//         let data=await HotelModal.find(
//             {$and :[
//                 {$and:[{price : {$lt: +greater}},{price:{$gt:+less}} ]},    
//                 {country:location},
//                 {type: type}, 
//             ]},
//         )

//         res.send({data:data})
        
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })



hotel.get("/",async(req,res)=>{
    const {page=1,sort='asc'}=req.query
   


    try {
        let data=await HotelModal.find()
        // .sort({["price"]: sort==="asc" ? 1 :-1}).skip((page-1)*12).limit(12)
        res.send({data:data})
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})


module.exports={hotel}