
import express from "express"
import {
    createProfile,getAllPatients,profile,patientById
} from '../controllers/patient.js'

const router= express.Router();

router.route('/create_profile')
    .post(createProfile)

router.route('/getAllPatients')
    .post(getAllPatients)

router.route('/profile/:userId')
    .post(profile)
    
router.param('userId', patientById);

export default router;