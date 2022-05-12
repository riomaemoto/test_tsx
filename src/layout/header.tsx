import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { FC } from "react";
import { Link } from "react-router-dom";
import { FirstColor } from "../constants";

export const Header: FC = (props) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const dwTextStyle = {
    padding: "12px",
    width: "100vw",
    fontSize: "20px",
  };
  const LinkStyle = {
    boxShadow: "unset",
  };

  return (
    <>
      <Flex
        as="nav"
        bgColor={FirstColor}
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to="/">
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} align="center">
              <Text
                align={"center"}
                color={"white"}
                // ml={{ base: "170px", md: "0" }}
                fontSize={{ base: "18", md: "25" }}
                pl={{ base: "90px", md: 300, lg: 400, xl: 700 }}
                letterSpacing={4}
                maxW="full"
                mt={0}
              >
                2TheNextStage
              </Text>
            </Heading>
          </Link>
        </Flex>

        <IconButton
          color={"white"}
          aria-label="メニューボタン"
          icon={<HamburgerIcon boxSize={8} />}
          size={"sm"}
          variant="unstyled"
          display={{ base: "colmn", md: "colmn" }}
          _focus={{ _focus: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody align={"center"} p={0} bg="gray.100">
              <Link to="/" style={LinkStyle}>
                <Text
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: FirstColor,
                  }}
                >
                  Home
                </Text>
              </Link>
              <Link to="/pictures" style={LinkStyle}>
                <Text
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: FirstColor,
                  }}
                >
                  Plan
                </Text>
              </Link>
              <Link to="/contact" style={LinkStyle}>
                <Text
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    color: "white",
                    bg: FirstColor,
                  }}
                >
                  Contact
                </Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
