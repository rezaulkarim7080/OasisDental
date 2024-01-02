import express from "express";

import { createAppointment, getAppointmentController, realtedAppointmentController } from "../controllers/appointmentController.js";






const router = express.Router();


router.post("/create-appointment", createAppointment);

// // user orders
router.get("/appointments", getAppointmentController);

// //similar product
router.get("/related-appointment/:pid/:cid", realtedAppointmentController);


export default router;