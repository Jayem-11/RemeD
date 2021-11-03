import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import config from '../config/config.js'

/**
 * This function basically protects the user routes
 * by ensuring that the user who accesses the routes
 * is already signed in and has a unique token
 */

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, config.jwtSecret)

            req.user = await User.findById(decoded.id).select('-password')
            next();
        } catch (err) {
            console.log(err)
            return res.status(401).json({
                message: "Not authorized, token failed"
            })
        }
    }

    if (!token) {
        return res.status(401).json({
            message:'Not authorized, no token'
        })
    }
}

export { protect };