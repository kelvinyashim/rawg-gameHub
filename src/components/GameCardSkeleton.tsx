import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px">
      <Skeleton height="180px" alignContent='center'/>

      <HStack>
        <SkeletonText noOfLines={4} gap={3}/>
      </HStack>
    </Card.Root>
  );
};
