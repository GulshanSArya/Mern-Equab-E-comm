const express = require('express');
const mongoose = require('mongoose');
//const Products = require('./collections/products')
//require('./db/connect')
const cors = require('cors');
const bodyParser = require('body-parser');
const { Schema } = mongoose;
const app = express(); 
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

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

const cartSchema = new Schema({
  items:{type:[Object],required:true,default:[]},
  userId:{ type:String,default:1}
},{timestamps:true});

const userSchema = new Schema({
   name:String,
   email:String,
   addresses:[Object],
   orders:[Object]
},{timestamps:true});


const Product  = new mongoose.model('products', productSchema);
const Cart  = new mongoose.model('carts', cartSchema);
const User = new mongoose.model('users', userSchema);


main().catch(err => console.log(err));
async function main(){
  await mongoose.connect('mongodb://localhost:27017/Ecomm');
  console.log('server connection done');
}


// app.get("/createProduct",(req,res)=>{
//     let product = new Product(
// //       {
// //         name: "Sony WX-5",
// //         price: 100,
// //         category: "Headphones",
// //         rating: 3,
// //         color: "red", 
// //         size: "S",
// //         details: {
// //           product: "product details",
// //           warranty: "warranty details",
// //           merchant: "merchant details",
// //         },
// //         image: "product-1-square",
// //         images: ["product-1", "product-1-2", "product-1-3"],
// // },
// // {
// // name: "Apple Watch 2",
// // price: 500,
// // category: "SmartWatch",
// // rating: 4,
// // color: "black",
// // size: "",
// // details: {
// //   product: "",
// //   warranty: "",
// //   merchant: "",
// // },
// // image: "product-2-square",
// // images: ["product-2", "product-2-2", "product-2-3"],
// // },
// {
//   name: "Apple iPhone 11",
//   price: 799,
//   category: "Mobile",
//   rating: 4,
//   color: "black",
//   size: "",
//   details: {
//     product: "",
//     warranty: "",
//     merchant: "",
//   },
//   image: "product-3-square",
//   images: ["product-3", "product-3-2", "product-3-3"],
// }
// );
//   product.save().then((success)=>{
//     res.send(success);
//   }).catch(err=>{
//     res.send(err)
//   })
    
// })

// app.get("/createUser",(req,res)=>{
//   let user=new User({
//     name:'gulshan',
//     email:'gulshan@gmail.com',
//     orders: [],
//     addresses :[]
//   });
//   user.save().then(user=>{
//     res.send(user)
//   })
// });

app.get("/user",(req,res)=>{
  User.findOne({}).then(result=>{
    res.send(result);
  })
})

app.get("/products",(req,res)=>{
 Product.find({}).then(result=>{
  res.send(result);
 })
});

app.post("/cart",(req,res)=>{
  const userId= "63f0eebfb7926a41d3f9e15a";
  const item = req.body.item;
  if(!item.quantity){
    item.quantity = 1;
  }
   Cart.findOne({userId:userId}).then(result=>{
    if(result){
      const itemIndex = result.items.findIndex(it=>it._id===item._id) ;
      if(itemIndex>=0){
      result.items.splice(itemIndex,1,item);
    }else{
      result.items.push(item);
      }
      result.save().then(cart=>{
        res.send(cart);
      })
    }else{
      let cart= new Cart();
      cart.userId= userId;
      cart.items=[item];
      cart.save().then(cart=>{
        res.send(cart);
      }); 
    }
  })
 });

 app.get("/cart",(req,res)=>{
  const userId= "63f0eebfb7926a41d3f9e15a";
   Cart.findOne({userId:userId}).then(result=>{
    if(result){
      res.send(result);
    }else{
      res.send({userId:1,items:[]});
    }
    })
  })

 app.post("/removeitem",(req,res)=>{
    const userId= '63f0eebfb7926a41d3f9e15a';
    const item= req.body.item;
     Cart.findOne({userId:userId}).then(result=>{

      const itemIndex = result.items.findIndex(it=>it._id===item._id) ;
      result.items.splice(itemIndex,1);
      result.save().then(cart=>{
        res.send(cart)
      })

      })
    })

app.post("/emptycart",(req,res)=>{
      const userId= '63f0eebfb7926a41d3f9e15a';
       Cart.findOne({userId:userId}).then(result=>{
        result.items = [];
        result.save().then(cart=>{
          res.send(cart)
        })
  
        })
      })

app.post('/updateuseraddress',(req,res)=>{
  const userId ='63f0eebfb7926a41d3f9e15a';
  User.findOneAndUpdate({userId:userId},{address}),then((user)=>{
    user.addresses.push(address);
    user.save().then(user=>{
      res.send(address);
    })
  })
})

app.listen(port,()=>{
    console.log('listen on Port', port)
})
