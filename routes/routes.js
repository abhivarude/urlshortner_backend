const express=require("express");
const router=express.Router();
const shortid=require("shortid");
const validurl=require("valid-url");
const {urlSchema}=require("../shared/urlmodule")
baseUrl="http://localhost:3005/redirect";
router.post("/shorten",async (req,res)=>{


    const {longurl}=req.body;
    console.log(longurl);
    if(!validurl.isUri(baseUrl))
    {
        return res.status(401).json("invalid url");    

    }

    const urlcode=shortid.generate();
   

    if(validurl.isUri(longurl))
    {


            try{
                let curl=await urlSchema.findOne({longurl});
                if(curl)
                {
                    
                    res.json(curl)
                }
                            
                else{
                    const shorturl=baseUrl+ "/" +urlcode;
                    url=new urlSchema({
                        longurl,
                        shorturl,
                        urlcode,
                        date:new Date()
                    })
                    await url.save()
                    res.json(url)
            

                    
                }
                            
    
                }

    catch(err)
    {
         
            res.status(500).json("server error")
        
    }
       
    }

    else{
        res.status(401).json('invalid longurl')
    }

})





module.exports=router;
