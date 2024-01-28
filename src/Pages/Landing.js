import React from "react";

export const Landing = () => {
  return (
    <div className="inline-flex flex-col items-start relative bg-white max-h-screen min-h-screen overflow-clip">
      <div className="flex w-[1440px] h-[1020px] items-center pl-[120px] pr-0 py-0 relative bg-[#191919]">
        <div className="min-w-[762px] max-w-[816px] items-start gap-[64px] flex-1 grow flex flex-col relative">
          <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-[#f3f3f3] text-[72px] tracking-[-2.88px] leading-[normal]">
                SeatWise
              </div>
            </div>
            <p className="opacity-50 text-white relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              The secret to better airplane seating
            </p>
          </div>
          <button className="all-[unset] box-border flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <button className="all-[unset] box-border flex max-w-[320px] p-[24px] flex-1 grow bg-white items-center justify-center gap-[10px] relative rounded-[10px] overflow-hidden">
              <button className="all-[unset] box-border flex-1 text-[#0d0d0d] text-[24px] tracking-[-0.96px] relative mt-[-7.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-center leading-[normal]">
                Get Started
              </button>
            </button>
          </button>
        </div>
      </div>
      
    </div>
  );
};


