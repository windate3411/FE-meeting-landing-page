import * as React from "react";
import Logo from "../../assets/logo.svg";

interface Props {}

const Header: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex justify-center my-12">
      <img src={Logo} alt="meet logo" />
    </div>
  );
};

export default Header;
