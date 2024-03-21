// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import classNames from "classnames";
import { useState } from "react";
function LandingPage() {
  const [showMenu, setShowMenu] = useState(false);
  const navigationList = ["Home", "About us", "Services", "Contact Us"];
  return (
    <div className="bg-white">
      <div className="overflow-hidden">
        <nav className="px-5 sm:px-[50px] py-[26.36px] flex justify-between items-center relative max-w-screen-2xl mx-auto">
          <ul className="h-10 w-12 block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              onClick={() => setShowMenu(true)}
              className=" h-10 w-12"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          </ul>
          <div className="absolute xl:-right-10 xl:top-0 -right-56 -top-20 hidden md:block">
            <svg
              width="570"
              height="712"
              viewBox="0 0 570 712"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M267.038 685.5C-191.362 549.5 42.7044 172.167 217.038 0.5L436.538 -61.5L779.038 -108L867.538 168.5C858.371 397.5 725.438 821.5 267.038 685.5Z"
                fill="#FEC828"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <div
            className={classNames(
              `transition-all ease-in-out z-50`,
              showMenu
                ? "md:hidden flex flex-col min-h-screen h-max w-full left-0 top-0 fixed bg-[#2D4263]"
                : "md:hidden flex flex-col h-screen w-full top-0 left-full fixed bg-[#2D4263]"
            )}
          >
            <div
              className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={"/assets/dreamagency/closed.svg"}
                alt="close"
                className="h-7 cursor-pointer"
              />
            </div>
            <div className="flex flex-col w-full items-center justify-center h-screen gap-[30px] sm:gap-[50px] md:hidden sm:text-lg text-[20px] leading-[29px] font-normal md:flex-row md:gap-[60px]">
              {navigationList.map((navitem, index) => {
                return (
                  <div
                    key={index}
                    className="text-white text-2xl font-normal font-hindVadodara leading-6 tracking-[0.01] cursor-pointer"
                  >
                    {navitem}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
        <div className="mx-auto max-w-screen-2xl">
          <div className="px-5 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-8">
            <div className="flex flex-col items-center md:items-start gap-7">
              <div className="w-full text-center md:text-left max-w-xl overflow-hidden text-4xl sm:text-5xl lg:text-[87px] text-[#331B3B] font-bold font-hindVadodara leading-[99.8%] tracking-[0.01]">
                <h1 className="whitespace-nowrap">We Help you</h1>
                <p />
                <span className="font-light">
                  to grow your
                  <br />
                  <span className="relative w-full z-10">
                    Business
                    <span className="bg-[#FDC221] lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full" />
                  </span>
                </span>
              </div>
              <div className="max-w-[515px] flex flex-col gap-8">
                <span className="text-[17px] Light font-normal font-hindVadodara leading-[146.3%] tracking-wide text-center md:text-left">
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </span>
                <a
                  href="/dashboard"
                  className="self-center bg-[#331B3B] rounded-[10px] text-[17px] text-white uppercase font-hindVadodara md:self-start max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide"
                >Get Started</a>
              </div>
            </div>
            <div>
              <img
                src={"/assets/dreamagency/home.png"}
                alt="Home"
                className="h-[362px] lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;