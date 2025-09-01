import { Center, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" boxSize="50px" />
    </div>
  );
};

export default NavBar;
