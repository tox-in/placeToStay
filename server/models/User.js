const userSchema = mongoose.Schema({
    name:{type:String, min:2, max:50, required},
    email:{type:String, min:2, max:50, required, unique:true
})