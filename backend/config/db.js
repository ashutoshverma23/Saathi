// import mongoose from 'mongoose';

// const uri = `mongodb+srv://ashutoshverma23:${encodeURIComponent('loomax')}@samsnow.ev2jjjk.mongodb.net/?retryWrites=true&w=majority`

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//     } catch (error) {
//         console.error(`Error: ${error.message}`.red.bold);
//         process.exit(1); // Exit with a non-zero status code to indicate an error
//     }
// };

// // module.exports = connectDB;
// export default connectDB; // This is the ES6 way of exporting a module   