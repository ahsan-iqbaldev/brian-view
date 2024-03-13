import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {

  return (
    <section className="overflow-hidden flex flex-col text-center h-screen">
      <div className="mb-48 w-full relative min-h-full box-border flex justify-center items-center flex-col p-20 login-background_image">
        <div className=" max-w-[650px] flex flex-col w-full">
          <img
            src="/images/cta-logo-one.svg"
            className="mb-5 w-full max-w-[600px] min-h-1 block"
            alt="logo"
          />
          <button className="primary_btn">GET ALL THERE</button>
          <p className="desciption">Get Premier Access to Raya and the Last Dragon for an additional fee the price of Disney+ and The Disney Bundle will increse by $1 </p>
          <img
            src="/images/cta-logo-two.png"
            className="mt-4 mb-3 max-w-[600px] inline-block w-full"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
