/* eslint-disable no-unused-vars */
import { useState } from "react";
import Victory from "../../assets/victory.svg"; // Victory is used, so we keep this import
// import Background from '../../assets/login2.png'; // Remove Background if unused
import { Input } from "../../components/ui/input";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Button } from "@radix-ui/themes";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client.js";
import { SIGNUP_ROUTE } from "../../utils/constants.js";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    // Implement login functionality
    
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      const response = await apiClient.post(SIGNUP_ROUTE, { email, password });
      console.log({ response });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[60vw] rounded-3xl grid grid-cols-1 xl:grid-cols-2">
        {/* Left side - Welcome section */}
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold">Welcome</h1>
              <img
                src={Victory}
                alt="victory emoji"
                className="h-[100px] ml-4"
              />
            </div>
            <p className="font-medium text-center">
              Fill in Details to get started with the best chat app
            </p>
          </div>
        </div>

        {/* Right side - Login/Signup form section */}
        <div className="flex items-center justify-center w-full">
          <Tabs className="w-3/4">
            <TabsList className="bg-transparent rounded-none w-full">
              <TabsTrigger
                value="Login"
                className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-3-purple-500 p-3 transition-all"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="Signup"
                className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-3-purple-500 p-3 transition-all"
              >
                Sign up
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent className="flex flex-col gap-5 mt-10" value="Login">
              <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="rounded-full p-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="rounded-full p-6 bg-black text-white"
                onClick={handleLogin}
              >
                Login
              </Button>
            </TabsContent>

            {/* Signup Form */}
            <TabsContent className="flex flex-col gap-5 mt-10" value="Signup">
              <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="rounded-full p-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                className="rounded-full p-6"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                className="rounded-full p-6 bg-black text-white"
                onClick={handleSignup}
              >
                Signup
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
