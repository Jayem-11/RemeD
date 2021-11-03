import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        trim: true
    },
    username:{
        type:String,
        required:[true, "Username is required"],
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        trim:true
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    isProfileAdded:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})


userSchema.methods.matchPassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);

export default User;