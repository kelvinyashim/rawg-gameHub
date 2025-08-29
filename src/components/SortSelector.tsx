import { useGameQueryStore } from "@/services/constants/store";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";


const SortSelector = () => {
  const sortOrders = [
    {value:'', label: 'Relevance'},
    {value:'-added', label: 'Date added'},
    {value:'name', label: 'Name'},
    {value:'-released', label: 'Realease Date'},
    {value:'-metacritic', label: 'Popularity'},
    {value:'-rating', label: 'Average rating'},
  ];
const sortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder);
const byOrder = useGameQueryStore(s=>s.setOrder);
  const currOrder = sortOrders.find(order=> order.value == sortOrder);
  return (
    <Box px={10}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>
            
            Order by: {currOrder?.label ?? 'Relevance'} <HiChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map((order) => (
                <Menu.Item
                  key={order.value}
                  value={order.value}
                  onClick={() => byOrder(order.value)}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
