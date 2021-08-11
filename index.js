const express=require("express");
const cors=require("cors")
const app=express();
const authroute=require("./routes/authenticate")
const connection=require("./shared/mongoose")
connection.once('open',()=>{console.log('db connected')})
connection.on('error',()=>{console.log('Error')})
app.use(express.json({extended:false}))
app.use(cors());
app.use('/redirect',require('./routes/redirect'))

app.use('',require('./routes/routes'))
app.use('',authroute)
app.use('',authroute)
const PORT=3005;

app.listen(PORT,()=>{console.log("app connected at"+`${PORT}`)}) 