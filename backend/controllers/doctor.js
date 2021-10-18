import Doctor from "../models/doctor.js";


const createProfile = async(req,res)=>{
    const {userId,phoneno,institution,specialization,license} = req.body;

    const doctor= new Doctor({
        user:userId,
        phoneno:phoneno,
        institution:institution,
        specialization:specialization,
        license:license

    })

    try{
        let result = await doctor.save();
        return res.status(200).json(result)
    }catch(err){
        console.log(err)
        return res.status(400).json({
            msg:'An error was encountered'
        })
    }
}


const getAllDoctors= async(req,res)=>{
    try {
        let doctors= await Doctor.find();
        return res.json(doctors)
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            msg:'An error was encountered'
        })
    }
}

const profile= async(req,res)=>{
    try {
       let doctor= req.doctor
       return res.json(doctor) 
    } catch (error) {
        console.log(err)
        return res.status(404).json({
            msg:'Doctor not found'
        })
    }
}

const doctorById= async(req,res,next,id)=>{
    let doctor= await Doctor.findById(id);
    if(!doctor){
        console.log('Not Found')
    }
    req.doctor= doctor;
    next()
}

export {createProfile,getAllDoctors, profile,doctorById}