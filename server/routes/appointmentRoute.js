import express from "express";

import { createAppointment, getAppointmentController, realtedAppointmentController } from "../controllers/appointmentController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";





const router = express.Router();


router.post("/create-appointment", isAuthenticatedUser, createAppointment);

// // user orders
router.get("/appointments", getAppointmentController);

// //similar product
router.get("/related-appointment/:pid/:cid", realtedAppointmentController);


export default router;