import {
  Box,
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

export const Header: FC = (props) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const dwTextStyle = {
    padding: "8px",
    width: "100vw",
    fontSize: "17px",
  };
  const LinkStyle = {
    boxShadow: "unset",
  };
  const DeskTopLinkStyle = {
    fontSize: "18px",
  };
  return (
    <>
      <Flex
        as="nav"
        bg="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to="/">
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} align="center">
              <Text color={"purple.400"} ml={{ base: "180px", md: "0px" }}>
                2TheNextStage
              </Text>
            </Heading>
          </Link>
        </Flex>
        <Flex fontSize="md" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box _hover={{ color: "purple.500" }} pl={5} pr={8}>
            <Link style={DeskTopLinkStyle} to="/pictures">
              pictures
            </Link>
          </Box>
          <Box _hover={{ color: "purple.500" }} pr={8}>
            <Link style={DeskTopLinkStyle} to="/profile">
              profile
            </Link>
          </Box>
          <Box _hover={{ color: "purple.500" }}>
            <Link style={DeskTopLinkStyle} to="/contact">
              contact
            </Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="md"
          variant="unstyled"
          display={{ base: "colmn", md: "none" }}
          _focus={{ _focus: "none" }}
          onClick={onOpen}
          height="30px"
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
                    // color: linkHoverColor,
                    bg: "purple.100",
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
