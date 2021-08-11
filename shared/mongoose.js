const mongoose=require("mongoose");
db_url="mongodb://localhost:27017/urlshortner";
mongoose.connect(db_url,{  useNewUrlParser: true , useUnifiedTopology:true})

const connection =mongoose.connection;
module.exports=connection;