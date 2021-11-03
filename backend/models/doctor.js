import mongoose from 'mongoose';


const docSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    speciality:{
        type: String,
        required:true
    },
    subSpeciality:[
        {
            type: String,
            minLength: 1,
            maxLength: 255,
            trim: true
        }
    ],
    institution:{
        type: String,
        required: true
    },
    license:{
        type: String,
        required:true
    },
    phoneno:{
        type: String,
        required: true,
    },
    mypatients:[
        {
            patient:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        }
    ],
    title:{
        type: String,
        enum: ['Mr', 'Miss', 'Dr', 'Rev', 'Sir', 'Ms', 'Mrs'],
        required: true,
        trim: true,
    },
    gender:{
        type: String,
        required:[true, "Gender is required"],
        trim: true,
    },
    education: [
        {
            type: String,
            minLength:1,
            maxLegth: 255
        }
    ],
    rating: {
        type: Number,
        min: 1,
        max:5
    },
    profileImage: {
        type: String,
    }
}, {
    timestamps: true
})

const Doctor = mongoose.model('Doctor', docSchema);

export default Doctor;