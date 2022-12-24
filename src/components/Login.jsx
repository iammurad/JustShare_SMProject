import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ShareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={ShareVideo}
          type="video/mp4"
          loop
          muted
          autoPlay
          controls={false}
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_USERID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>;
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
