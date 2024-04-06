const User = require('../Models/User')
const fs = require('fs')

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
    uploadpic
}