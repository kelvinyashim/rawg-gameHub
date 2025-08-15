import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="180px" alignContent='center'/>

      <HStack>
        <SkeletonText noOfLines={4} gap={1}/>
      </HStack>
    </Card.Root>
  );
};
