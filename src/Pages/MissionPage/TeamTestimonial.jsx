import React from "react";
import Slider from "./Slider";
import Kamil_on_Stage from "../../assets/Images/Founders/KamilStage.png";

function TeamTestimonial() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
      <div className='w-full flex justify-center mb-0 p-2'>
        <div className='w-full bg-[#3092DB] min-h-[1100px] md:min-h-[700px] rounded-3xl overflow-hidden max-w-[1500px] '>
          <div className='w-full  relative h-full  flex-col lg:flex-row  px-2 flex overflow-hidden'>
            <div className=' h-full cursor-pointer hover:opacity-80 duration-1000 hover:contrast-150  p-12 px-2  md:col-span-2  relative flex justify-center items-center'>
              <img
                style={{
                  backgroundImage: `url(${"/hero@75.b2469a49.jpg"} )`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                src={Kamil_on_Stage}
                alt=''
                className='w-full overflow-hidden h-full object-cover rounded-3xl object-center'
              />

              <div className='absolute top-0 left-0 w-full h-full rounded-3xl   bg-opacity-50 flex justify-center items-center gap-2'>
                <div className='h-32 w-32 p-6 animate-pulse duration-1000 bg-[#3092DB] cursor-pointer select-none hover:scale-95  rounded-full relative'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill='white'
                      d='M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className='w-full h-full    md:col-span-2  relative flex justify-center items-center'>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamTestimonial;
