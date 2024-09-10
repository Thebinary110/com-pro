import { Router } from "express";
import { signup } from "../controllers/AuthController.js";

// Create a new router instance
const authRoutes = Router();

// Define the signup route with appropriate HTTP method and controller
authRoutes.post("/signup", signup);

// Export the router instance for use in the main application
export default authRoutes;
