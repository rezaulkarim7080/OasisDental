import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    buyer: {
        type: mongoose.ObjectId,
        ref: "User",

    },
    service: {
        type: mongoose.ObjectId,
        ref: "Product",
        required: true,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
)



const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;