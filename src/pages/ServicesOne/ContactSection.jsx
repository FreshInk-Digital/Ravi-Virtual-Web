import React, { useState } from "react";
import api from "../../api/api";
import {
  Button,
  Textarea,
  Flex,
  Box,
  Input,
  Container,
  Heading,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import ContactInformation from "../../components/ContactInformation";
import SendSms from "../../api/sendSms"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    message: '',
    phone: '',
    status: 'NUR',
  });

  const [errors, setErrors] = useState({});
  const [messageLength, setMessageLength] = useState(0);
  const toast = useToast();

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required.";
    if (!/^(07|06)\d{8}$/.test(phone)) return "Phone number must start with 07 or 06 and be followed by 8 digits.";
    return null;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length > 250) {
      newErrors.message = "Message cannot exceed 250 characters.";
    }
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "message") {
      setMessageLength(value.length);
    }
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? value : '') : value,
    });

    // Live validation for phone number
    if (name === "phone") {
      const phoneError = validatePhone(value);
      setErrors({
        ...errors,
        phone: phoneError,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    toast({
      title: 'Sending message...',
      description: "Your message is being sent. Please wait.",
      status: 'info',
      duration: 3000,
      isClosable: true,
    });

    try {
      await api.post('/Messages/', formData);
      await SendSms (formData);
      toast({
        title: 'Message Sent',
        description: "Your message has been sent successfully.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        user_name: '',
        email: '',
        message: '',
        phone: '',
        status: 'NUR',
      });
      setMessageLength(0); // Reset message length counter
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Send Failed',
        description: "There was an error sending your message. Please try again.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {/* contact section */}
      <Flex
        mt="0px"
        gap={{ md: "74px", base: "30px", sm: "55px" }}
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          bg="white.a700"
          alignSelf="stretch"
          justifyContent="center"
          p={{ base: "20px", sm: "32px" }}
          mb="-90px"
        >
          <Flex
            gap="10px"
            w={{ md: "94%", base: "100%" }}
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            px={{ base: "20px", sm: "32px" }}
          >
            <Heading
              size="headingxs"
              as="h1"
              color="light_blue.a700"
              fontSize="16px"
              fontWeight={600}
              ml={{ base: "-15px"}}
              mb="-10px"
            >
              You Can Reach Us Anytime{" "}
            </Heading>
            <Flex alignSelf="stretch" mb={{ md: "0px", base:"50px"}}>
              <Heading
                size="heading2xl"
                color="gray.900"
                letterSpacing="-0.96px"
                ml={{ base: "-15px"}}
              >
                Contact Us Through
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex
            justifyContent="space-between"
            alignItems="start"
            fontFamily="Poppins"
            gap="20px"
            px="6px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Box
              bg="white.a700"
              boxShadow="sm"
              w={{ md: "28%", base: "100%" }}
              px={{ base: "20px", sm: "34px" }}
              py={{ base: "20px", sm: "40px" }}
              borderRadius="4px"
            >
              <Flex mb="10px" flexDirection="column">
                <ContactInformation />
              </Flex>
            </Box>
            <Flex
              gap="32px"
              alignSelf="center"
              bg="white.a700"
              boxShadow="sm"
              w={{ md: "66%", base: "100%" }}
              flexDirection="column"
              alignItems="center"
              px="8px"
              py={{ base: "20px", sm: "24px" }}
              borderRadius="4px"
            >
              <form onSubmit={handleSubmit}>
                <Flex
                  flexDirection="column"
                  w="100%"
                  gap="16px"
                  mt="14px"
                  alignSelf="stretch"
                >
                  <Flex
                    flexDirection={{ md: "row", base: "column" }}
                    gap="16px"
                    w="100%"
                  >
                    <Box w="100%">
                      <Input
                        size="md"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder={`Your Name *`}
                        type="text"
                        fontFamily="Poppins"
                        w="100%"
                        borderRadius="4px"
                      />
                      {errors.user_name && (
                        <Box color="red.500" mt="2px">
                          {errors.user_name}
                        </Box>
                      )}
                    </Box>
                    <Box w="100%">
                      <Input
                        size="md"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={`Your Email *`}
                        type="email"
                        fontFamily="Poppins"
                        w="100%"
                        borderRadius="4px"
                      />
                      {errors.email && (
                        <Box color="red.500" mt="2px">
                          {errors.email}
                        </Box>
                      )}
                    </Box>
                    <Box w="100%">
                      <Input
                        size="md"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={`Your Phone *`}
                        type="text" // Changed to text to handle formatting
                        fontFamily="Poppins"
                        w="100%"
                        borderRadius="4px"
                      />
                      {errors.phone && (
                        <Box color="red.500" mt="2px">
                          {errors.phone}
                        </Box>
                      )}
                    </Box>
                  </Flex>
                  <Box w="100%">
                    <Textarea
                      size="md"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message... *"
                      fontFamily="Poppins"
                      w="100%"
                      borderRadius="4px"
                      h="200px"
                      px="10px"
                      py="12px"
                      mt="16px"
                    />
                    {errors.message && (
                      <Box color="red.500" mt="2px">
                        {errors.message}
                      </Box>
                    )}
                    <Flex justifyContent="flex-end" mt="2px">
                      <Box color="gray.500" fontSize="sm">
                        {250 - messageLength} characters remaining
                      </Box>
                    </Flex>
                  </Box>
                  <Flex
                    gap="16px"
                    flexDirection="row"
                    mt="16px"
                    alignSelf="end"
                  >
                    <Checkbox
                      name="status"
                      value="URG"
                      isChecked={formData.status === 'URG'}
                      onChange={handleChange}
                      colorScheme="green"
                      size="lg"
                      borderColor="gray.300"
                      borderRadius="4px"
                      p="4px"
                    >
                      Urgent
                    </Checkbox>
                    <Checkbox
                      name="status"
                      value="NOR"
                      isChecked={formData.status === 'NOR'}
                      onChange={handleChange}
                      colorScheme="blue"
                      size="lg"
                      borderColor="gray.300"
                      borderRadius="4px"
                      p="4px"
                    >
                      Normal
                    </Checkbox>
                    <Checkbox
                      name="status"
                      value="NUR"
                      isChecked={formData.status === 'NUR'}
                      onChange={handleChange}
                      colorScheme="gray"
                      size="lg"
                      borderColor="gray.300"
                      borderRadius="4px"
                      p="4px"
                    >
                      Not Urgent
                    </Checkbox>
                  </Flex>
                  <Button
                    type="submit"
                    size="2xl"
                    mr={{ md: "22px", base: "0px" }}
                    fontFamily="Poppins"
                    fontWeight={500}
                    alignSelf="end"
                    minw="214px"
                    borderRadius="4px"
                  >
                    Send Message
                  </Button>
                </Flex>
              </form>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
