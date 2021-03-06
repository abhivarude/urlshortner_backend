const express=require("express");
const router=express.Router();
const {urlSchema}=require("../shared/urlmodule");

router.get("/:code",async(req,res)=>{
  
try{
    
    const url=await urlSchema.findOne({urlcode:req.params.code})

    if (url) {
      
       
        return res.redirect(url.longurl)
      
    } else {
       
        return res.status(404).json('No URL Found')
    }
}
catch(err){
 
    res.status(500).json('redirect server error  ')
}
    
})

module.exports=router;