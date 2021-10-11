import Patient from "../models/patient.js";

const createProfile = async(req,res)=>{
    const {userId,phoneno} = req.body;

    const patient= new Patient({
        user:userId,
        phoneno:phoneno
    })

    try{
        let result = await patient.save();
        return res.status(200).json(result)
    }catch(err){
        console.log(err)
        return res.status(400).json({
            msg:'An error was encountered'
        })
    }
}


const getAllPatients= async(req,res)=>{
    try {
        let patients= await Patient.find();
        return res.json(patients)
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            msg:'An error was encountered'
        })
    }
}

const profile= async(req,res)=>{
    try {
       let patient= req.patient
       return res.json(patient) 
    } catch (error) {
        console.log(err)
        return res.status(404).json({
            msg:'Patient not found'
        })
    }
}

const patientById= async(req,res,next,id)=>{
    let patient= await Patient.findById(id);
    if(!patient){
        console.log('Not Found')
    }
    req.patient= patient;
    next()
}

export {createProfile,getAllPatients, profile,patientById}