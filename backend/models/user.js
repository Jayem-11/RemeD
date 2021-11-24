import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true, "Firstname is required"],
        trim: true
    },
    lastname:{
        type: String,
        required: [true, 'Lastname is required']
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
    isDoctor:{
        type: Boolean,
        default: false
    },
    doctorInfo:{
        phoneno:{
            type: String,
            trim: true
        },
        speciality:{
            type: String,
            trim:true
        },
        institution:{
            type: String,
            trim:true
        },
        license:{
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
    },
    patientInfo:{
        phoneno: {
            type: String,
            trim: true
        },
        gender:{
            type: String,
            enum:['Male', 'Female', 'Others'],
        },
        bloodType:{
            type: String,
            enum:['A-' ,'AB-', 'B-', 'O-', 'A+' ,'AB+', 'B+', 'O+'],
        },
    },
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