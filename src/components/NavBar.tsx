import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

interface navbarProps {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: navbarProps) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        <Image
          src={logo}
          alt="Logo"
          height={{ base: "40px", md: "50px", lg: "60px" }}
        />
        <Text fontSize={"40px"} fontWeight={"bold"}>
          Gamaxel
        </Text>
      </HStack>

      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
