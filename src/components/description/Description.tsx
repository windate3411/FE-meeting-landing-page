import * as React from "react";

interface Props {}

const Description: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="text-center px-6">
        <div className="text-green font-black tracking-[4px] mb-6">
          BUILT FOR MODERN USE
        </div>
        <div className="text-gray-dark text-3xl font-black mb-8">
          Smarter meetings, all in one place
        </div>
        <div className="text-gray-light font-medium">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </div>
      </div>
    </>
  );
};

export default Description;
