const Item = require('../Models/Item')
const fs = require('fs')
const create = async(req,res,next)=>{
    try{
     
        const { photo } = req.files;
        const item = new Item({ ...req.fields })
        if (photo) {
            item.photo.data = fs.readFileSync(photo.path);
            item.photo.contentType = photo.type;
        }
       await item.save()
        console.log(item)
        return res.status(200).json({message:'item created'})

    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    create
}