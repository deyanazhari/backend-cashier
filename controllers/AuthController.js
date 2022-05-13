import user from '../models/User.js';
const register = async(req, res) => {
    try{

        if(!req.body.fullname){throw{code:428,message:'Fullname is required'}}
        if(!req.body.email){throw{code:428,message:'Email is required'}}
        if(!req.body.password){throw{code:428,message:'Password is required'}}
    

    const newUser = new user({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
    const User = await newUser.save();
    if(!User){throw{code : 500, message : 'User_register Failed'}}
    return res.status(200).json({
        status : true,
        message: 'USER_register Succes',
        User
    });
}catch(err){
    if(!err.code){err.code = 500}
    return res.status(err.code).json({
        status : false,
        message:err.message
    });

}
}
export {register};