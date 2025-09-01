import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import type { platform } from "../hooks/useGamesUpdated";
import { IoIosArrowDown } from "react-icons/io";

interface platformSelectorProps {
  onSelectPlatform: (platform: platform) => void;
  selectedPlatform?: platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: platformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild width={{ base: "100%", md: "20%" }}>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : "Select Platform"}
          <IoIosArrowDown />
        </Button>
      </MenuTrigger>
      <MenuContent
        width={"20%"}
        overflow={"auto"}
        position={"absolute"}
        zIndex={10}
      >
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform as platform)}
            value={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
