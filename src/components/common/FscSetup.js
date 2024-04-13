import React from 'react';

import fscSetup from '../../assets/images/home/fsc-setup-img.png';

const FscSetup = () => {
  return (
    <>
      <div className="w-full flex items-center font-geo justify-center px-[113px] py-[162px] max-sm:py-[100px] max-sm:px-5 z-10 h-full">
        <div className="flex items-center justify-between w-full max-sm:flex-col">
          <div className="setup-image w-full z-10 h-[408px] rounded-[43.29px]">
            <img className="object-cover" src={fscSetup} alt=""></img>
          </div>
          <div className="relative flex items-center justify-center max-sm:w-full max-sm:h-full setup-description">
            <div className="flex flex-col items-center justify-center w-[500px] max-sm:w-full h-[286px] max-sm:h-full border-r-[1.08px] border-t-[1.08px] border-b-[1.08px] rounded-tr-[100px] rounded-br-[20px] border-blue-105 skew-x-[20deg]"></div>
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-center w-full bg-white-100 max-sm:rounded-tr-[0px] max-sm:rounded-[16px] rounded-tr-[100px] rounded-[16px] px-5 max-sm:px-0 py-4 z-10 -ml-[50px] max-sm:-ml-0">
                <h1 className="text-center text-subSubHeading max-sm:text-subHeading text-blue-106 font-gcB">
                  Set up FSC
                </h1>
                <p className=" text-[14px] max-sm:text-[11px] mt-3 text-blue-107 font-gcB">
                  The establishment of Kitovu Farmers Service Centers (FSCs)
                  involves a comprehensive process, including location
                  assessment, marketing strategy development, equipment and
                  supply services, staffing planning, data collection and
                  analysis, facility lease and setup, farmer engagement, and
                  warehouse receipt financing.
                </p>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button
                  className=" bg-blue-105 mr-10 max-sm:mr-0 rounded-[10px] py-[11px] px-[52px] text-white-100 text-small font-gcReg"
                  type=""
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FscSetup