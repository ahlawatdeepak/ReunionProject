const mongoose=require("mongoose")

const HotelSchema=new mongoose.Schema({
       name:{type:String},
       streetAddress:{type:String},
       city:{type:String},
       country:{type:String},
       startDate:{type:String},
       price:{type:Number},
       type:{type:String},
       bed:{type:String},
       bathroom:{type:String},
       area:{type:Number},
       about:{type:String},
       titleImage:{type:String},
       status:{type:String}
}
)

const HotelModal=mongoose.model("HotelData",HotelSchema)

module.exports={HotelModal}

// {"id":"63290509-6e6d-4af1-a8e2-246fbd289ba6",
// "name":"Winged Peperomia",
// "streetAddress":"552 Fairfield Road",
// "city":"Ciusul","country":"Indonesia","startDate":"4/16/2022",
// "price":9710,"type":"laser","bed":3,"bathroom":2,"area":74,"status":1,
// "about":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
// "titleImage":"https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=600"},