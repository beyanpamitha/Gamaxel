import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import type { platform } from "../hooks/useGamesUpdated";
import type { IconType } from "react-icons";
import React from "react";

interface PlatformIconsListProps {
  platforms: platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconsListProps) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };
  return (
    // <>
    //   {platforms.map((platform) => (
    //     <Icon key={platform.id} as={iconsMap[platform.slug]} color="gray.500" /> //Meka Array ekk newei. Object ekk. E nisa Array funtions(map) methana use krnna ba. Object functions use krnna oni.
    //   ))}
    // </>
    <HStack gap={2}>
      {platforms.map((platform) => (
        <React.Fragment key={platform.id}>
          {Object.entries(iconsMap).map(
            ([key, Icon]) => (platform.slug === key ? <Icon key={key} /> : null) //This is an object function
          )}
        </React.Fragment>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
