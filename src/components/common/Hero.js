import React from 'react';

import fscbackground1 from '../../assets/images/home/fsc-background-1.png';
import fscbackground2 from '../../assets/images/home/fsc-background-2.png';
import kitovu from '../../assets/images/home/kitovu logo.png';

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen font-geo ">
        <div className="flex w-full h-screen lg:flex-row md:flex-col max-sm:flex-col wrapper ">
          <div className=" lg:w-[35%] md:w-full max-sm:w-full relative h-full ">
            <img
              className="absolute object-cover w-full h-full"
              src={fscbackground1}
              alt="fsc background 1"
              loading="lazy"
            ></img>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col px-4 text-center hero-description">
                <h2 className=" lg:text-subSubHeading max-sm:text-subSubHeading md:text-subSubHeading 2xl:text-heading2 text-blue-102 font-gcB">
                  Welcome to Africa's
                </h2>
                <h1 className=" text-white-100 max-sm:text-subSubHeading md:text-heading2 lg:text-heading2 2xl:text-heading1 font-gcB">
                  Farmer Service Center
                </h1>
                <div className="flex mt-[40px] items-end justify-end gap-3 fsc-powered">
                  <p className=" text-blue-102 text-small font-gcReg">
                    powered by
                  </p>
                  <img src={kitovu} alt="kitovu logo"></img>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-[65%] md:w-full max-sm:w-full h-full relative overflow-hidden ">
            <img
              className="absolute object-cover h-full lg:w-auto md:w-full"
              src={fscbackground2}
              alt="fsc background 2"
              loading="lazy"
            ></img>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex max-w-[600px] 2xl:max-w-[800px] text-white-100 text-body max-sm:text-[12px] 2xl:text-subHeading max-sm:px-4">
                <p>
                  The Farmers Service Centre (FSC) is a one-stop shop designed
                  to enhance the agricultural productivity and income of
                  smallholder farmers in rural areas. It offers a wide range of
                  services, including input sales, equipment leasing,
                  commodities aggregation, storage facilities, and advisory
                  services. The FSC empowers farmers to improve their farming
                  practices, access better markets, and ultimately enhance their
                  income and livelihoods
                </p>
              </div>
              <button
                className=" bg-blue-104 mt-[50px] text-white-100 text-small leading-[35px] tracking-[0.6px] py-[10px] px-[32px] rounded-[10px]"
                type=""
              >
                Get Started Now
              </button>
            </div>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              <div className="w-[700px] 2xl:w-[1050px] h-full mx-auto skew-x-[20deg] bg-blue-107 overlay bg-opacity-[40%]">
                {/* Overlay content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero