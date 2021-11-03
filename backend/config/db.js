import mongoose from 'mongoose'
import config from './config'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(encodeURI(config.mongoUri), {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;