import User from '../models/user.js'
import { OAuth2Client } from 'google-auth-library'
import { nanoid } from 'nanoid'
import config from '../config/config.js'

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
            name: user.name,
            email: user.email,
            username: user.username,
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
    const { name, username, password, email } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({
            message: "Email already taken"
        })
    }

    const user = await User.create({
        name, username, password, email
    })

    if (user) {
        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
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

const authententicateGoogle = async (req, res) => {
    const { tokenId } = req.body;

    client.verifyIdToken({ idToken: tokenId, audience: config.googleCloud }).then((response) => {
        const { name, email, given_name } = response.payload;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(200).json({
                _id: userExists._id,
                name: userExist.name,
                email: userExists.email,
                username: userExists.username,
                token: generateToken(userExists._id)
            })
        } else {
            // Since the user doesnt exist in the database, the user is saved in the database
            const userObj = {
                name: name,
                email: email,
                username: given_name,
                password: nanoid(10)
            }

            let newUser = await User.create(userObj)

            try {
                let result = await newUser.save();
                return res.status(200).json({
                    _id: result._id,
                    name: result.name,
                    username: result.username,
                    email: result.email,
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

const getUserById = async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (user) {
        return res.status(200).json(user)
    } else {
        return res.status(404).json({
            message: "User not found"
        })
    }
}

export {
    signin, signup, authententicateGoogle, getUserById
}