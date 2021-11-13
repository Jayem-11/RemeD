import express from 'express'
import {
    signin, signup, authenticateGoogle, getUserProfile, listDoctors, listPatients, userByID
} from '../controllers/user.js'

import { protect } from '../middleware/auth.js'


const router = express.Router()

router.route('/signup')
    .post(signup)

router.route('/signin')
    .post(signin)

router.route('/auth/google')
    .post(authenticateGoogle)

router.route('/profile/:userId')
    .get(protect, getUserProfile)

router.route('/list/doctors')
    .get(protect, listDoctors)

router.route('/list/patients')
    .get(protect, listPatients)

router.param('userId', userByID)

export default router