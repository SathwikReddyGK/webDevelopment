import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <HStack spacing={2}
      color = "black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl">
      <VStack alignItems="left">
        <Image src={imageSrc} borderRadius='xl'></Image>
        <VStack alignItems="left" padding={5}>
        <Heading size="lg" textAlign="left">{title}</Heading>
        <Text >{description}</Text>
        <HStack>
          <Text textAlign="left">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
        </VStack>
        </VStack>
      </HStack>
  );
};

export default Card;
