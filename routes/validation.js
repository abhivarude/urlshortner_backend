const joi=require("joi");


const signupvalidation=(data)=>{


const validationschema=joi.object(

    {
        Name:joi.string().min(10).required(),
     Email:joi.string().min(6).email().required(),
        password:joi.string().min(5).max(12).required()
    }

    )

return validationschema.validate(data);
}


const loginvalidation=(data)=>{

    const lvalidationschema=joi.object({
        Email:joi.string().min(6).email().required(),
        password:joi.string().min(5).max(12).required()
    })
    return lvalidationschema.validate(data)
}

module.exports={signupvalidation,loginvalidation}