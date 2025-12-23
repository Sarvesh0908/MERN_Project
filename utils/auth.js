const jwt = require("jsonwebtoken")
const config = require("./config")
const result = require("./result")

function authUser(req,res,next){
    const allowedUrl = ["/user/signup","/user/signin","/courses"]
    if(allowedUrl.includes(req.url)) return next();
    else{
        const token = req.headers.token
        console.log(token)

        if(!token) res.send(result.createResult("token is missing"));
        else{
            try{
            const payload = jwt.verify(token,config.SECRET);
            console.log(payload)
            
            req.headers.email = payload.email
            req.headers.role = payload.role

            return next();




            }
            catch(ex){
                console.log(ex)
                return res.send(result.createResult("token is invalid"))
                

            }


        }

    }
}


function checkAuthorization(req,res,next){
    const role=req.header.role
    console.log("role=",role)
    if(role==='admin'){
        return next();

    }
    result.createResult("unauthorized access")
}

module.exports ={authUser,checkAuthorization}