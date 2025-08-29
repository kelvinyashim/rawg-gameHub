import { usePlatforms } from "@/hooks/usePlatform";
import { usePlatform } from "@/hooks/usePlatforms";
import { useGameQueryStore } from "@/services/constants/store";
import {  Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";


export const FilterByPlatform = () => {
  const {data: platform } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId); 
  const onSelectedPlatform = useGameQueryStore(s=>s.setPlatformId); 
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
                  onClick={() => onSelectedPlatform(p.id)}
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
