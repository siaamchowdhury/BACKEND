const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_URI)
    // console.log('db connected', connect.connection.host, connect.connection.name)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}


module.exports = connectDB