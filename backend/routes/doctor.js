
import express from "express"
import {
    createProfile,getAllDoctors,profile,doctorById
} from '../controllers/doctor.js'

const router= express.Router();

router.route('/create_profile')
    .post(createProfile)

router.route('/getAllDoctors')
    .post(getAllDoctors)

router.route('/profile/:userId')
    .post(profile)
    
router.param('userId', doctorById);

export default router;