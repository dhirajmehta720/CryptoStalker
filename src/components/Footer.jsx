import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../assets/dhiraj.jpg";

const avatarSrc = img;
// "https://media.licdn.com/dms/image/D4D35AQGpQcmyeI_PRQ/profile-framedphoto-shrink_400_400/0/1693655762625?e=1708005600&v=beta&t=L5MPx5MWZGfnyKgCOSLdbe8POfCbAf7vyTAECMKl810";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} px={"16"}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text textColor={"white"} fontWeight={"bold"}>
            About Us
          </Text>
          <Text
            fontSize={"md"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            textColor={"white"}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text
            fontWeight={"semibold"}
            textColor={"white"}
            paddingBottom={"30"}
          >
            Dhiraj
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
