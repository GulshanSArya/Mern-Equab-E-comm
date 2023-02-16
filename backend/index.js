const express = require('express');
const mongoose = require('mongoose');
//const Products = require('./collections/products')
//require('./db/connect')
const { Schema } = mongoose;
const app = express(); 
const port = 3005;

const productSchema = new Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:Number, required:true},
    rating:{type:Number, required:true},
    color:'red' | 'green' | 'black',
    size:'S'|'M'|'L',
    details:Object,
    image:{type:String, required:true},
    images:{type:[String], required:true},

},{timestamps:true});

main().catch(err => console.log(err));
async function main(){
  await mongoose.connect('mongodb://localhost:27017/Ecomm');
  console.log('server connection done');
}

const Products =new mongoose.model('products', productSchema);
module.exports = Products;


app.get("/createProduct",(req,res)=>{
    let product = new Product({
        name: "Sony WX-5",
        price: 100,
        category: "Headphones",
        rating: 3,
        color: "red",
        size: "S",
        details: {
          product: "product details",
          warranty: "warranty details",
          merchant: "merchant details",
        },
        image: "product-1-square",
        images: ["product-1", "product-1-2", "product-1-3"],
})
  product.save().then((success)=>{
    res.send(success);
  }).catch(err=>{
    res.errored(err)
  })
    
})
app.listen(port,()=>{
    console.log('listen on Port', port)
})
