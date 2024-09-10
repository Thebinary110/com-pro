import axios from "axios";
import { HOST } from "@/utils/constants.js";

// Create an instance of axios with default configuration
export const apiClient = axios.create({
    baseURL: HOST,
});

