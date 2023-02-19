const mongoose=require("mongoose")

const MongoDbConnect=()=>{
    return mongoose.connect(`mongodb+srv://deepakahlawat10:deepakahlawat10@cluster0.qkndiwa.mongodb.net/reunion?retryWrites=true&w=majority`)
}

module.exports=MongoDbConnect