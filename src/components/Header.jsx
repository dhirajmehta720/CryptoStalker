import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      display={"flex"}
      gap={"6"}
      p={"4"}
      pl={"50"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
    >
      <Button fontSize={"30"} variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button fontSize={"30"} variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button fontSize={"30"} variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
