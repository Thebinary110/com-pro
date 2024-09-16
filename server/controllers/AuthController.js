import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export const signup = async (request, response) => {
    try {
        const { email, password } = request.body;
        console.log(email,password)
        if (!email || !password) {
            return response.status(400).send("Email and password are required.");
        }

        // Check if the email is already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response.status(400).send("Email is already in use.");
        }

        // Hash the password before saving the user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const user = await User.create({ email, password: hashedPassword });
        const token = createToken(email, user.id);

        // Set cookie with token
        response.cookie("jwt", token, {
            maxAge,
            httpOnly: true, // Ensure the cookie is HTTP only
            secure: process.env.NODE_ENV === 'production', // Secure cookies in production
            sameSite: "None", // Adjust as needed (e.g., "Lax" or "Strict")
        });

        // Send response with user data
        return response.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
            },
        });

    } catch (error) {
        console.error('Signup error:', error.message);
        return response.status(500).send("Internal Server Error");
    }
};
