import mongoose from 'mongoose';


const docSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    specialization:{
        type: String,
        required:true
    },
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
    ]
}, {
    timestamps: true
})

const Doctor = mongoose.model('Doctor', docSchema);

export default Doctor;