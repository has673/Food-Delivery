const Item = require('../Models/Item')

const create = async(req,res,next)=>{
    try{
        const {name , price} = req.body
        const item = await Item.create({
            name:name,
            price:price
        })
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