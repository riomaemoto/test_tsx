import { FC } from "react";
import {
  Container,
  Box,
  Button,
  VStack,
  Wrap,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export const Contact: FC = () => {
  return (
    <Container
      bgColor={"gray.50"}
      maxW="full"
      mt={0}
      p={50}
      centerContent
      overflow="hidden"
    >
      <Box p={30}>
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <Box bg="white" borderRadius="lg">
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#ead070">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#ead070">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="#ead070"
                    _hover={{}}
                    placeholder="message"
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    variant="solid"
                    bg="#cccc"
                    color="white"
                    _hover={{ color: "#ead070", bg: "#000" }}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </Wrap>
      </Box>
    </Container>
  );
};
