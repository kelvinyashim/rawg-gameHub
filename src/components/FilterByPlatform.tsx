import { usePlatforms } from "@/hooks/usePlatform";
import type { Platform } from "@/services/game-service";
import {  Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
export const FilterByPlatform = ({
  onSelectedPlatform,
  selectedPlatform,
}: Props) => {
  const {data: platform } = usePlatforms();
  return (
    
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="solid">
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
            <HiChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {platform.results.map((p) => (
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
