import React from "react";

export const Landing = () => {
  return (
    <div className="inline-flex flex-col items-start relative bg-white">
      <div className="flex w-[1440px] h-[1020px] items-center pl-[120px] pr-0 py-0 relative bg-[#191919] overflow-hidden">
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
        {/* <img className="relative w-[719px] h-[1020px] ml-[-161px] object-cover" alt="Giphy" src="giphy-1.png" /> */}
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/907077706?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="airplanes_-_282 (720p)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div className="flex flex-col w-[1440px] h-[884px] items-start gap-[48px] p-[120px] relative bg-white overflow-hidden">
        <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex max-w-[1060px] items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-[#191919] text-[72px] tracking-[-2.88px] leading-[normal]">
              Features
            </div>
          </div>
          <p className="opacity-60 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
            Discover the powerful features of SeatWise that will revolutionize your flying experience.
          </p>
        </div>
        <div className="justify-center gap-[4px_4px] mb-[-120.00px] flex flex-wrap items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Smart Seating Algorithm
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Our advanced algorithm ensures that you are seated in the most comfortable and convenient spot on the
              plane.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Personalized Preferences
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Customize your seating preferences to ensure you have the perfect seat every time you fly.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Real-time Seat Availability
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Get instant updates on available seats and make informed decisions to secure the best seat for your
              journey.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Dynamic Pricing
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Our demand-based pricing system ensures that you get the best value for your money, with prices that adapt
              to changing demand.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Seamless Seat Swapping
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Easily swap seats with other passengers to accommodate your changing needs and preferences.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Customer Satisfaction Metrics
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Track and improve customer satisfaction with our comprehensive metrics and feedback system.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1440px] h-[1114px] items-start gap-[48px] p-[120px] relative bg-white overflow-hidden">
        <div className="max-w-[816px] items-start gap-[12px] self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-[#191919] text-[72px] tracking-[-2.88px] leading-[normal]">
            Optimizing Airplane Seating
          </div>
          <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
            At SeatWise, we use a complex algorithm to optimize airplane seating based on passenger preference. Our goal
            is to improve customer satisfaction, reduce complaints and seat-swap, and implement a dynamic demand-based
            seat pricing system.
          </p>
        </div>
        <div className="gap-[0px_32px] mb-[-120.00px] flex flex-wrap items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col min-w-[400px] items-start justify-center gap-[12px] relative flex-1 grow rounded-[20px] overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[82px] items-center justify-center gap-[12px] px-[32px] py-[24px] relative bg-[#191919] rounded-[60px] overflow-hidden">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.12px] leading-[normal]">
                  1
                </div>
              </div>
              <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-[12px] p-[32px] self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px] overflow-hidden flex flex-col items-start justify-center relative">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
                  Step 1: Collecting Passenger Preferences
                </p>
                <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
                  We start by collecting passenger preferences such as seat location, legroom, and proximity to
                  amenities. This information helps us understand what each passenger values the most.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-[400px] items-start justify-center gap-[12px] relative flex-1 grow rounded-[20px] overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[82px] items-center justify-center gap-[12px] px-[32px] py-[24px] relative bg-[#191919] rounded-[60px] overflow-hidden">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.12px] leading-[normal]">
                  2
                </div>
              </div>
              <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-[12px] p-[32px] self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px] overflow-hidden flex flex-col items-start justify-center relative">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
                  Step 2: Analyzing Seating Options
                </p>
                <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
                  Next, our algorithm analyzes the available seating options on the plane. It takes into account factors
                  like seat layout, availability, and passenger preferences to determine the best possible seating
                  arrangement.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-[400px] items-start justify-center gap-[12px] relative flex-1 grow rounded-[20px] overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[82px] items-center justify-center gap-[12px] px-[32px] py-[24px] relative bg-[#191919] rounded-[60px] overflow-hidden">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.12px] leading-[normal]">
                  3
                </div>
              </div>
              <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-[12px] p-[32px] self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px] overflow-hidden flex flex-col items-start justify-center relative">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
                  Step 3: Optimizing Seat Assignments
                </p>
                <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
                  Based on the analysis, our algorithm optimizes seat assignments to maximize customer satisfaction. It
                  considers factors like passenger preferences, group seating, and special requirements to ensure a
                  comfortable and enjoyable flight for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-[400px] items-start justify-center gap-[12px] relative flex-1 grow rounded-[20px] overflow-hidden">
            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[82px] items-center justify-center gap-[12px] px-[32px] py-[24px] relative bg-[#191919] rounded-[60px] overflow-hidden">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[-1.12px] leading-[normal]">
                  4
                </div>
              </div>
              <div className="relative flex-1 grow h-[2px] bg-[#191919]" />
            </div>
            <div className="flex flex-col items-start justify-center gap-[10px] pl-0 pr-[24px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-[12px] p-[32px] self-stretch w-full flex-[0_0_auto] bg-[#f7f7f7] rounded-[20px] overflow-hidden flex flex-col items-start justify-center relative">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
                  Step 4: Implementing Dynamic Pricing
                </p>
                <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
                  In addition to optimizing seat assignments, our algorithm also implements a dynamic demand-based seat
                  pricing system. This allows us to adjust seat prices based on factors like demand, flight popularity,
                  and passenger preferences, ensuring fair and competitive pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1440px] h-[625px] items-start gap-[48px] p-[120px] relative bg-white overflow-hidden">
        <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex max-w-[1060px] items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-[#191919] text-[72px] tracking-[-2.88px] leading-[normal]">
              Why Choose SeatWise?
            </div>
          </div>
          <p className="opacity-60 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
            Discover the benefits of using SeatWise
          </p>
        </div>
        <div className="justify-center gap-[4px_4px] mb-[-120.00px] flex flex-wrap items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Improved Customer Satisfaction
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Experience a comfortable and personalized seating arrangement that meets your preferences.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Reduced Complaints
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Say goodbye to seating issues and enjoy a hassle-free travel experience.
            </p>
          </div>
          <div className="flex flex-col min-w-[400px] max-w-[610px] items-start justify-center gap-[12px] p-[24px] relative flex-1 grow bg-[#f7f7f7] rounded-[10px] overflow-hidden">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[40px] tracking-[-1.60px] leading-[normal]">
              Dynamic Demand-Based Seat Pricing
            </div>
            <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
              Get the best value for your money with our flexible and competitive seat pricing system.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1440px] h-[828px] items-start gap-[48px] p-[120px] relative bg-white">
        <div className="max-w-[816px] items-start gap-[12px] self-stretch w-full flex-[0_0_auto] flex flex-col relative">
          <p className="relative w-[816px] mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-[#191919] text-[72px] tracking-[-2.88px] leading-[normal]">
            What our users are saying
          </p>
          <p className="opacity-50 text-black relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[24px] tracking-[-0.96px] leading-[normal]">
            Don&#39;t just take our word for it. See what our users have to say about SeatWise.
          </p>
        </div>
        <div className="justify-center gap-[12px_12px] mb-[-59.00px] flex flex-wrap items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex min-w-[552px] max-w-[560px] items-start gap-[16px] p-[16px] relative flex-1 grow bg-[#f7f7f7] rounded-[20px] overflow-hidden">
            <div className="relative w-[64px] h-[64px] bg-black rounded-[60px] overflow-hidden">
              <div className="absolute top-[25px] left-[14px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[10px] tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                PHOTO
              </div>
            </div>
            <div className="gap-[4px] pt-[6px] pb-0 px-0 flex-1 grow flex flex-col items-start justify-center relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                John Smith
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                SeatWise made my flight experience so much better! I was able to choose a seat that suited my
                preferences and had a comfortable journey. Highly recommended!
              </p>
            </div>
          </div>
          <div className="flex min-w-[552px] max-w-[560px] items-start gap-[16px] p-[16px] relative flex-1 grow bg-[#f7f7f7] rounded-[20px] overflow-hidden">
            <div className="relative w-[64px] h-[64px] bg-black rounded-[60px] overflow-hidden">
              <div className="absolute top-[25px] left-[14px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[10px] tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                PHOTO
              </div>
            </div>
            <div className="gap-[4px] pt-[6px] pb-0 px-0 flex-1 grow flex flex-col items-start justify-center relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                Emily Johnson
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                I used SeatWise for my recent trip and it was a game-changer. The algorithm really knows how to optimize
                seating based on passenger preferences. I had a great flight and will definitely use SeatWise again!
              </p>
            </div>
          </div>
          <div className="flex min-w-[552px] max-w-[560px] items-start gap-[16px] p-[16px] relative flex-1 grow bg-[#f7f7f7] rounded-[20px] overflow-hidden">
            <div className="relative w-[64px] h-[64px] bg-black rounded-[60px] overflow-hidden">
              <div className="absolute top-[25px] left-[14px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[10px] tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                PHOTO
              </div>
            </div>
            <div className="gap-[4px] pt-[6px] pb-0 px-0 flex-1 grow flex flex-col items-start justify-center relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                Michael Brown
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                SeatWise is a must-have app for frequent flyers like me. It not only improves customer satisfaction but
                also reduces the hassle of seat-swapping. I can&#39;t imagine traveling without it now!
              </p>
            </div>
          </div>
          <div className="flex min-w-[552px] max-w-[560px] items-start gap-[16px] p-[16px] relative flex-1 grow bg-[#f7f7f7] rounded-[20px] overflow-hidden">
            <div className="relative w-[64px] h-[64px] bg-black rounded-[60px] overflow-hidden">
              <div className="absolute top-[25px] left-[14px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[10px] tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                PHOTO
              </div>
            </div>
            <div className="gap-[4px] pt-[6px] pb-0 px-0 flex-1 grow flex flex-col items-start justify-center relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                Sarah Davis
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] tracking-[-0.80px] leading-[normal]">
                I was skeptical at first, but SeatWise exceeded my expectations. The dynamic demand-based seat pricing
                system saved me money and I had a comfortable seat throughout the flight. Thank you, SeatWise!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[1440px] h-[441px] items-center justify-center gap-[48px] px-0 py-[120px] relative bg-white">
        <div className="items-center justify-center gap-[12px] self-stretch w-full flex-[0_0_auto] mt-[-16.00px] flex flex-col relative">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Black',Helvetica] font-black text-[#191919] text-[72px] text-center tracking-[-2.88px] leading-[normal]">
            Optimize Your Airplane Seating Experience
          </p>
        </div>
        <button className="all-[unset] box-border inline-flex px-[100px] py-[32px] flex-[0_0_auto] mb-[-16.00px] bg-black items-center justify-center gap-[10px] relative rounded-[10px] overflow-hidden">
          <button className="all-[unset] box-border w-fit text-white text-[28px] tracking-[-1.12px] relative mt-[-7.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-center leading-[normal]">
            Try Now
          </button>
        </button>
      </div>
    </div>
  );
};
