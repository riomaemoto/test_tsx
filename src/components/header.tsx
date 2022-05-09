import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const linkHoverColor = useColorModeValue("purple.400", "purple.400");

  const dwTextStyle = {
    padding: "8px",
    width: "100vw",
    fontSize: "20px",
  };
  const LinkStyle = {
    boxShadow: "unset",
    backgroundColor: "red",
  };
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.100"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to="/">
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
              Home
            </Heading>
          </Link>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link to="/pictures">pictures</Link>
          </Box>
          <Box pr={4}>
            <Link to="/profile">profile</Link>
          </Box>
          <Link to="/contact">contact</Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "colmn", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody align={"center"} p={0} bg="gray.100">
              <Link to="/pictures" style={LinkStyle}>
                <Text
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    // color: linkHoverColor,
                    bg: "purple.100",
                  }}
                >
                  Pictures
                </Text>
              </Link>
              <Link to="/profile" style={LinkStyle}>
                <Text
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    bg: "purple.100",
                  }}
                >
                  Profile
                </Text>
              </Link>
              <Link to="/contact" style={LinkStyle}>
                <Text
                  style={dwTextStyle}
                  _hover={{
                    textDecoration: "none",
                    bg: "purple.100",
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
