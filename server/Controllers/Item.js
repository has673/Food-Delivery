const Item = require('../Models/Item')
const fs = require('fs')
const create = async(req,res,next)=>{
    try{
        const{name,price} = req.fields
       
        const item = new Item({ name:name, price:price })
         const { photo } = req.files;
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
const get = async(req,res,next)=>{
    try{
        const items =  await Item.find()
        // console.log(items)
      return  res.status(200).json(items)

    }
    catch(err){
        console.log(err)
    }
}
async function getPhoto(req, res, next) {
    console.log('photo')
    try {
        
        const food = await Item.findById(req.params.id).select("photo");
         
        if (!food) {
            return res.status(404).send({
                success: false,
                message: "No item found with the provided ID",
            });
        }

        if (!food.photo || !food.photo.data) {
            return res.status(404).send({
                success: false,
                message: "No photo found for the item",
            });
        }

        res.set("Content-type", food.photo.contentType);
        return res.status(200).send(food.photo.data);
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            success: false,
            message: "Error while getting photo",
            error: err.message, // Sending only error message for security reasons
        });
    }
}
const singleitem = async(req,res,next)=>{
    try{
        const item= await Item.findById(req.params.id)
        return res.status(200).json(item)

    }
    catch(err){
        console.log(err)
    }
}
module.exports = {
    create,
    get,
    getPhoto,
    singleitem
}