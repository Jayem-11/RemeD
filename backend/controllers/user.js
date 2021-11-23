import User from '../models/user.js'
import pkg from 'google-auth-library'
import { nanoid } from 'nanoid'
import config from '../config/config.js'
import generateToken from '../utils/generateToken.js'

const {OAuth2Client} = pkg

const client = new OAuth2Client(config)

/**
 * @desc    Signin user to the services
 * @route   POST /api/users/signin
 * @access  Public
 */

const signin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        return res.status(200).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            isDoctor: user.isDoctor,
            token: generateToken(user._id)
        })
    } else {
        return res.status(400).json({
            message: "Invalid username or password"
        })
    }
}

/**
 * @desc  Register a user to the system
 * @route   POST /api/users/signup
 * @access  Public
 */


const signup = async (req, res) => {

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
        console.log('mUserv')
        return res.status(400).json({
            message: "Email already taken"
        })
    }

    const user = await User.create(req.body)

    if (user) {
        return res.status(200).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            isDoctor: user.isDoctor,
            token: generateToken(user._id)
        })
    } else {
        res.status(401).json({
            message: "An error was encoutered. Please try again later"
        })
    }
}

/**
 * @desc    Google Authententication to the system
 * @route   POST /api/users/google
 * @access  Public
 */

const authenticateGoogle = async (req, res) => {
    const { tokenId } = req.body;

    client.verifyIdToken({ idToken: tokenId, audience: config.googleCloud }).then(async(response) => {
        const { email, given_name, family_name } = response.payload;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(200).json({
                _id: userExists._id,
                firstname: userExist.firstname,
                lastname: userExist.lastname,
                email: userExists.email,
                token: generateToken(userExists._id)
            })
        } else {
            // Since the user doesnt exist in the database, the user is saved in the database

            // confirm which type of user is being saved in the database
            const { isDoctor } = req.body.userData;
            const { userData } = req.body;
            if (isDoctor) {
                var userObj = {
                    firstname: given_name,
                    lastname: family_name,
                    email: email,
                    password: nanoid(10),
                    isDoctor: isDoctor,
                    doctorInfo: userData.doctorInfo
                }
            } else {
                var userObj = {
                    firstname: given_name,
                    lastname: family_name,
                    email: email,
                    password: nanoid(10),
                    isDoctor: isDoctor,
                    patientInfo: userData.patientInfo
                }
            }

            let newUser = await User.create(userObj)

            try {
                let result = await newUser.save();
                return res.status(200).json({
                    _id: result._id,
                    firstname: result.firstname,
                    lastname: result.lastname,
                    email: result.email,
                    isDoctor: result.isDoctor,
                    token: generateToken(result._id)
                })
            } catch (err) {
                console.log(err)
                return res.status(400).json({
                    message: `An error was encountered`
                })
            }
        }
    }).catch(err => {
        console.log(err)
        return res.status(400).json({
            message: 'An error was encountered on saving'
        })
    })
}


/**
 * @desc    Return a given user profile
 * @access  Private /User
 * @path    /api/users/profile/:userId
 */

const getUserProfile = async(req, res) => {
    try{
        let user = req.user;
        return res.status(200).json(user)
    }catch(err){
        console.log(err)
        return res.status(400).json({
            message: `An error was encountered`
        })
    }
}

/**
 * @desc    Fetch all the doctors
 * @access  Private /User
 * @path    /api/users/list/doctors
 */

const listDoctors = async(req, res) => {
    try{
        let doctors = await User.find({isDoctor: true})
        return res.status(200).json(doctors)
    }catch(err){
        console.log(err)
        return res.status(400).json({
            message: 'An error was encountered'
        })
    }
}

/**
 * @desc    Fetch all the patients
 * @access  Private /User
 * @path    /api/users/list/patients
 */

const listPatients = async(req, res) => {
    try{
        let patients = await User.find({isDoctor: false})
        return res.status(200).json(patients)
    }catch(err){
        console.log(err)
        return res.status(400).json({
            message: 'An error was encountered'
        })
    }
}

/**
 * @desc    Fetch the user details by id and append the details to req
 */

const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                message: `User not found`
            })
        }

        req.user = user;
        next()
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: `Could not retrieve due to ${err}` })
    }
}




export {
    signin, signup, authenticateGoogle, getUserProfile, listDoctors, listPatients, userByID
}