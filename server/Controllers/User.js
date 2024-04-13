const User = require('../Models/User')
const fs = require('fs')

const updateprofile = async(req,res,next)=>{
    try{

        const {name,phone} = req.body
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, // Assuming id is passed as a parameter in the URL
            { $set: { name, phone } }, // Update only the provided fields
            { new: true } // Return the updated document
          );
      
          // Check if the user was found and updated
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          // Return the updated user information
          console.log('user update')
          res.status(200).json(updatedUser);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"update"})
    }
}

const uploadpic=async(req,res,next)=>{
    
        const { userId } = req.user._id; // Assuming you pass userId in the URL params
       const { photo} = req.files; // Assuming the uploaded file is named "picture"

    try {
        const user = await User.findById(userId); // Fetch the user from the database
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (picture) {
            user.photo.data = fs.readFileSync(photo.path);
            user.photo.contentType = photo.type;
        }

        await user.save();
        res.status(200).json({ message: "User picture updated successfully" });

    }
    catch(err){
        console.log(err)
    }

}
module.exports={
    updateprofile,
    uploadpic
}