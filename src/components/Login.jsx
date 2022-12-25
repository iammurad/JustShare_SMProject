import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import ShareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import {client} from '../client'

const Login = () => {
  const navigate = useNavigate();
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
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_API_USERID}
            >
              <GoogleLogin
                onSuccess={(credentialResponse) => {

                  var token = credentialResponse.credential;
                  var decoded = jwt_decode(token);
                  localStorage.setItem("user", JSON.stringify(decoded));
                  console.log(decoded)
                  const { name, sub, picture } = decoded;

                  const doc = {
                    _id: sub,
                    _type: "user",
                    username: name,
                    image: picture,
                  };

                  client.createIfNotExists(doc)
                    .then(()=>{
                      navigate('/',{replace:true})
                    })
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
