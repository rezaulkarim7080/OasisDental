

import Product from "../models/productModel.js";
import Appointment from "../models/appointmentModel.js";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

// CREATE Product 

export const createAppointment = async (req, res) => {
    try {
        const { name, email, phone, date, time, message } = req.body;

        const appointment = new Appointment({ ...req.body });

        await appointment.save();
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            appointment,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in crearing product",
        });
    }

};

// get all product

export const getAppointmentController = async (req, res) => {
    try {
        const appointments = await Appointment
            .find({})

        res.status(200).send({
            success: true,
            counTotal: appointments.length,
            message: "ALlProducts ",
            appointments,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting products",
            error: error.message,
        });
    }

};


// // similar products
export const realtedAppointmentController = async (req, res) => {
    try {
        const { pid, cid } = req.params;
        const appointments = await Appointment
            .find({
                service: cid,
                _id: { $ne: pid },
            })
            .select("+photo")
            .limit(15)
            .populate("service");
        res.status(200).send({
            success: true,
            appointments,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "error while geting related product",
            error,
        });
    }
};