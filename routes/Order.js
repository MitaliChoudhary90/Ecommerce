const express = require("express");
const orderRoute = express.Router();
const protect = require("../middleware/Auth");
const AsyncHandler = require("express-async-handler");
const Order = require("../models/Order");

//for all the orders
orderRoute.post(
  "/",
  protect,
  AsyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      res.status(400);
      throw new Error("No Items Found !! Try Again.");
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        shippingPrice,
        taxPrice,
        totalPrice,
        price,
        user:req.user._id
      });
      const createdOrder= await order.save()
      res.status(201).json(createdOrder)
    }
  })
);


//order payment route
//this :id is the order_id
orderRoute.put('/:id/payment',protect, AsyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id)
    if(order){
        order.isPaid=true;
        order.paidAt=Date.now();
        order.paymentResult={
            id:req.body.id,
            status:req.body.status,
            updated_time:req.body.updated_time,
            email_address:req.body.email_address
        }
        const updatedOrder=await order.save()
        res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error("Order not found!");
    }
}))


//get all the orders
orderRoute.get('/',protect,AsyncHandler(async(req,res)=>{
    const orders=await Order.find({user:req.user._id}).sort({_id:-1})
    if(orders){
        res.status(200).json(orders)
    }else{
        res.status(404)
        throw new Error("Orders not found")

    }
}))

//order details of one order by id
orderRoute.get('/:id',protect,AsyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id).populate("user","email");
    if(order){
        res.status(200).json(order)
    }else{
        res.status(404)
        throw new Error("Order not found!")
    }

}))

module.exports=orderRoute
