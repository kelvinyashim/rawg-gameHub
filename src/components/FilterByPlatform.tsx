import { usePlatforms } from "@/hooks/usePlatform";
import { usePlatform } from "@/hooks/usePlatforms";
import type { Platform } from "@/services/game-service";
import {  Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?:number;
}
export const FilterByPlatform = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const {data: platform } = usePlatforms();
  const selectedPlat = usePlatform(selectedPlatformId);
  return (
    
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="solid">
            {selectedPlatformId ? selectedPlat?.name : "Platforms"}
            <HiChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platform?.results.map((p) => (
                <Menu.Item
                  key={p.id}
                  value={p.slug}
                  onClick={() => onSelectedPlatform(p)}
                >
                  {p.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
  );
};
