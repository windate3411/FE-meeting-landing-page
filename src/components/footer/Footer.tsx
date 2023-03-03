import * as React from "react";

interface Props {}

const Footer: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center">
        <div className="bg-footer-mobile h-[428px] w-full bg-cover bg-center bg-no-repeat sm:bg-footer-tablet md:bg-footer-desktop"></div>
        <div className="absolute inset-0 bg-green/90 flex items-center justify-center flex-col px-4 md:flex-row md:px-[156px] md:justify-between">
          <div className="text-white-light font-black text-3xl mb-6 md:mb-0 md:text-[40px]">
            Experience more together
          </div>
          <div className="text-white-light font-medium text-lg mb-8 md:mb-0 md:max-w-[350px]">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </div>
          <button className="py-4 px-10 font-black text-white-light rounded-[29px] bg-purple-dark max-w-[193px] hover:bg-purple-light">
            <div className="flex gap-1 justify-center">
              <span>Download</span>
              <span className="text-blue-light">v1.3</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
