import * as React from "react";

interface Props {
  number: number;
  containerClassName?: string;
}

const SectionTile: React.FunctionComponent<Props> = ({
  number,
  containerClassName = "",
}) => {
  return (
    <>
      <div className={`relative w-full ${containerClassName}`}>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[1px] h-[84px] bg-gray-light/25"></div>
          <div className="flex items-center justify-center rounded-full w-[56px] h-[56px] border border-gray-light/25 bg-white-light">
            <span className="text-gray-light font-black leading-[26px]">
              {`0${number}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTile;
