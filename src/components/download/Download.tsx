import * as React from "react";

interface Props {
  className?: string;
}

const Download: React.FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={`grid text-center col-span-2 ${className}`}>
      <div className="text-[40px] font-black font-redhat leading-10 text-gray-dark mb-6">
        Group Chat for Everyone
      </div>
      <div className="text-[16px] font-redhat leading-7 text-gray-light mb-8">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </div>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
        <button className="py-4 px-10 font-black text-white-light rounded-[29px] bg-green max-w-[193px] hover:bg-[#71C0D4]">
          <div className="flex gap-1 justify-center">
            <span>Download</span>
            <span className="text-blue-light">v1.3</span>
          </div>
        </button>
        <button className="py-4 px-[29px] font-black text-white-light rounded-[29px] bg-purple-dark max-w-[139px] hover:bg-purple-light whitespace-nowrap">
          What is it?
        </button>
      </div>
    </div>
  );
};

export default Download;
