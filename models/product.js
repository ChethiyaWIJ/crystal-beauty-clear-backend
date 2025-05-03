import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    productId : {
        type : String,
        required : true,
        unique : true
    },

    name : {
        type : String,
        required : true
    },

    altNames : {
        type : [String],
        default : []
    },

    price : {
        type : Number,
        required : true
    },

    labledPrice : {
        type : Number,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    images : {
        type : [String],
        required : true,
        default : ["https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"]
    },
    stock : {
        type : Number,
        required : true
    },
})

const Product = mongoose.model("products",productSchema)

export default Product;