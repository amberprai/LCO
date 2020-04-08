exports.signout = (req,res) =>{

    console.log("REQ BODY",req.body);
    
    res.json({
        message:"User Signout"
    });
};

exports.signup =(req,res) =>{
 res.json({
     message:"Signup works "
 });

};