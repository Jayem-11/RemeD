import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    phoneno:{
        type: String,
        required:true
    },
    mydoctors:[
        {
            doctor:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        }
    ],
    age: {
        type: Number,
        required: [true, 'Age is required'],
        trim: true,
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required'],
        trim: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: [true, 'Gender is required'],
        trim: true,
    },
    dateofbirth:{
        type: Date,
        required: [true, 'Date of birth is required'],
        trim: true
    },
    phoneno:{
        type: String,
        required: true,
        trim: true
    },
    medicalHistory:[
        {
            startDate: String,
            condition:{
                type: String,
                minlength: 1,
                maxlength: 255,
                trim: true
            },
            notes:{
                type: String,
                minlength:1,
                maxlength: 10000,
                trim: true
            }
        }
    ],
    allergies: [
        {
            name: {
                type: String,
                minlength: 1,
                maxlength: 255,
                trim: true
            },
            severity:{
                type: Number,
                min: 1,
                max: 5,
                default: 1
            }
        }
    ],
    medication: [
        {
            name: {
                type: String,
                minlength: 1,
                maxlength: 255,
                trim: true
            },
            description: {
                type: String,
                minlength: 1,
                maxlength: 1000,
                trim: true
            }
        }
    ],
    bloodType:{
        type: String,
        enum: ['A+', "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true,
    },
    profileImage: {
        type: String,
    }
})

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;