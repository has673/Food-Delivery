const User = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 async function registerUser(req,res,next){
    const{email , password } = req.body
   try{
    const user = await User.findOne({email:email})
    if(user){
        console.log("Email already in use")
        return res.status(400).send({success:false , message:"User already Exists."})
    }
    const newpass = bcrypt.hashSync(password,10)
    const newuser = new User({...req.body , password:newpass})
    await newuser.save()
    console.log('New User Added')
    return res.status(200).send({ success:true ,  message: "User added", user: newuser , success:true});

   }
   catch(err){
   console.log(err)
    return res.status(500).json({message : "Internal server error"})

   }
 }

async function Login(req, res, next) {
   try {
       const { email, password } = req.body;

       if (!email || !password) {
           return res.status(400).json({ message: "Empty fields" });
       }

       const user = await User.findOne({ email: email });

       if (!user) {
           console.log('not a user')
           return res.status(404).json({ message: "Invalid Email" });
       }

       const passwordMatch = await bcrypt.compare(password, user.password);

       if (!passwordMatch) {
         console.log('incoreet password')
           return res.status(401).json({ message: "Invalid Password" });
       }

       const token =  await jwt.sign(
           { _id: user._id, email: user.email },
           process.env.jwtsecret,
           { expiresIn: "3d" }
       );

       console.log('logged in');
       res.status(200).json({ email: user.email, token: token, uid: user._id , role:user.role});

   } catch (err) {
       console.log(err);
       res.status(500).json({ message: "Internal server error" });
   }
}
 async function forgotPasword(req,res,next){
   try{
      const{email , password} = req.body
      const user = await User.findOne({email:email})
      console.log('mail')
      if(!user){
         console.log('invalid email')
         return   res.status(404).json({message:"Invalid Email " })

      }
      
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log('hashedS')
    await User.findByIdAndUpdate(user._id ,{password : hashedPassword})
    console.log('password changed')
    res.status(200).json({message:"Change password"})

   }
   catch (err){
      console.log(err)
       res.status(200).json({message:"Internal server error"})

   }
 }
 module.exports = {
    registerUser,
    Login,
    forgotPasword
 }