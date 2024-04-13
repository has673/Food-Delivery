const Item = require('../Models/Item')
const fs = require('fs')
const create = async(req,res,next)=>{
    try{
        const{name,price} = req.fields
       
        const item = new Item({ name:name, price:price })
        // const { photo } = req.files;
        // if (photo) {
        //     item.photo.data = fs.readFileSync(photo.path);
        //     item.photo.contentType = photo.type;
        // }
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