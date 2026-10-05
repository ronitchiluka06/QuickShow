import mongoose from 'mongoose'
import dns from 'dns'

const connectDB = async () => {
    try {
        dns.setServers(['8.8.8.8', '8.8.4.4'])

        mongoose.connection.on('connected', () => {
            console.log('Database connected')
        })

        await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB