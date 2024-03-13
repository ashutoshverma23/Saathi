import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1); // Exit with a non-zero status code to indicate an error
    }
};

export default connectDB; // This is the ES6 way of exporting a module   