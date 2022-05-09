import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { FC } from "react";
import { Link, useHistory } from "react-router-dom";

export const Header: FC = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const navigate = useHistory();
  const jump = (path: string) => {
    navigate.push(path);
  };

  const LinkStyle = { marginRight: "10px", display: "inline-block" };
  const buttonStyle = {
    boxShadow: "unset",
  };
  return (
    <>
      <Link style={LinkStyle} to="/">
        home
      </Link>
      <Link style={LinkStyle} to="/pictures">
        pictures
      </Link>
      <Link style={LinkStyle} to="/profile">
        profile
      </Link>
      <Link style={LinkStyle} to="/contact">
        contact
      </Link>

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
            <Link to="/pictures" style={buttonStyle}>
              pictures
            </Link>
          </Box>
          <Box pr={4}>
            <Link to="/profile" style={buttonStyle}>
              profile
            </Link>
          </Box>
          <Link to="/contact" style={buttonStyle}>
            contact
          </Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Link to="/pictures" style={buttonStyle}>
                pictures
              </Link>
              <Link to="/profile" style={buttonStyle}>
                profile
              </Link>
              <Link to="/contact" style={buttonStyle}>
                contact
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
