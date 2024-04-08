import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Select, CheckboxGroup, Checkbox, Stack, Textarea, useToast, VStack, InputGroup, InputLeftAddon, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure } from "@chakra-ui/react";
import { FaUpload, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [form, setForm] = useState({
    sampleType: "",
    colors: [],
    logo: null,
    name: "",
    email: "",
    phone: "",
    companyName: "",
    lineSpeed: "",
    printSize: "",
  });
  const [uniqueNumber, setUniqueNumber] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  //... rest of the existing handleColorChange and handleInputChange functions

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUniqueNumber = Date.now();
    setUniqueNumber(newUniqueNumber);
    onOpen();
    toast({
      title: "Form submitted.",
      description: "We've received your sample request.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  //... rest of the existing return statement up to the <Container>

  const shippingLabel = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Shipping Label</ModalHeader>
        <ModalBody>
          <Box p={5} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={2}>
              Cyklop CSC Att.: SampleLab M.Slot {uniqueNumber}
            </Heading>
            <Box>
              Wilhelm Röntgenstraat 10
              <br />
              8013NC Zwolle
              <br />
              Nederland
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => window.print()}>
            Print Label
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      {shippingLabel}
      <Container maxW="container.md" py={10}>
        <Box p={4} mb={6} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="sm">
          <Heading size="md" mb={4}>
            Form Preview
          </Heading>
          <VStack align="start">
            <Box>
              <strong>Type:</strong> {form.sampleType}
            </Box>
            <Box>
              <strong>Colors:</strong> {form.colors.join(", ")}
            </Box>
            <Box>
              <strong>Name:</strong> {form.name}
            </Box>
            <Box>
              <strong>Email:</strong> {form.email}
            </Box>
            <Box>
              <strong>Phone:</strong> {form.phone}
            </Box>
            <Box>
              <strong>Company Name:</strong> {form.companyName}
            </Box>
            <Box>
              <strong>Line Speed:</strong> {form.lineSpeed}
            </Box>
            <Box>
              <strong>Print Size:</strong> {form.printSize}
            </Box>
          </VStack>
        </Box>
        {/* ... rest of the existing JSX for the form */}
      </Container>
    </>
  );
};

export default Index;
