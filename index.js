const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
//dotenv.config();

const products = require("./data/Products");
const PORT=process.env.PORT;

const mongoose=require ("mongoose");

//connect db
mongoose.connect(process.env.MONGOOSE_URL).then(()=> console.log("DB Connected")).catch((err)=> err);

app.use(express.json())
const databaseSeeder=require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute=require("./routes/Product");
const orderRoute = require("./routes/Order");

// database seeder routes
app.use('/api/seed',databaseSeeder);

//routes for user
//api/users/login
app.use('/api/users',userRoute)

//routes for  products
app.use('/api/products',productRoute)


//routes for order
app.use('/api/orders',orderRoute)



app.listen(PORT || 9000,()=>{
    console.log(`server listening on port ${PORT}`);
});



//test ports

// app.get("/",(req,res)=>{
//     res.send("<h1>HOME</h1>")
// })

// app.get("/api/products",(req,res)=>{

//     res.json(products);
// });

// app.get("/api/products/:id",(req,res)=>{
//     const product=products.find((product) => product.id===req.params.id);
//     if(!product){
//         return res.status(404).send("Product not found");
//     }
//     res.json(product);
// });



