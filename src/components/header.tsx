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
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const LinkStyle = {
    boxShadow: "unset",
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
              <Button to="/pictures" style={LinkStyle}>
                <Text p={3} w={"100vw"}>
                  Pictures
                </Text>
              </Button>
              <Button to="/profile" style={LinkStyle}>
                <Text p={3} w={"100vw"}>
                  Profile
                </Text>
              </Button>
              <Button to="/contact" style={LinkStyle}>
                <Text p={3} w={"100vw"}>
                  Contact
                </Text>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
