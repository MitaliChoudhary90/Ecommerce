const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

//validate password matches or not
userSchema.methods.matchPassword=async function(enterPassword){

  //enterPassword is one from req.body and this.password is from userSchema
  return await bcrypt.compare(enterPassword,this.password)

}


//hash and store registered password
userSchema.pre("save", async function(next){
  if(!this.isModified('password')){
    next()
  }
  const salt= await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

module.exports=mongoose.model("User",userSchema)
