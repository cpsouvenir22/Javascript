const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema ({
    title: {
        type:String,
        required:[true, "Product must have a name"]
    },
    price: {
        type:Number,
        required:[true, "What does this cost?"]
    },
    description: {
        type:String,
        required:[true, "Tell me a litte about the product"]
    }
}, {timestamps:true});

const Product = mongoose.model ('Product', ProductSchema);

module.exports = Product;