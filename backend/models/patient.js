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
    mydoctors:[{
        doctor:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    }]
})

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;