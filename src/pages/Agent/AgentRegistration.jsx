import React, { useState } from "react";
import api from "../../api/api";
import {
  Button,
  Textarea,
  Flex,
  Box,
  Select,
  Input,
  Container,
  Heading,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import ContactInformation from "../../components/ContactInformation";
import sendSms from "../../api/agentSms"; // Adjusted import

export default function AgentRegistration() {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    agent_code: "",
    location: "",
    agent_phone: "",
    message: "",
    phone: "",
    status: "NOT URGENT",
  });

  const [errors, setErrors] = useState({});
  const [messageLength, setMessageLength] = useState(0);
  const toast = useToast();

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required.";
    if (!/^[76]\d{8}$/.test(phone))
      return "Phone number must start with 7 or 6 and be 9 digits long.";
    return null;
  };

  const validateAgentPhone = (agent_phone) => {
    if (!agent_phone.trim()) return "Phone number is required.";
    if (!/^[76]\d{8}$/.test(agent_phone))
      return "Phone number must start with 7 or 6 and be 9 digits long.";
    return null;
  };

  // Validation for agent code
  const validateAgentCode = (agent_code) => {
    if (!agent_code.trim()) return "Agent code is required.";
    if (!/^RV-\d{2}-\d{2}$/.test(agent_code))
      return "Invalid Code.";
    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required.";
    if (!formData.agent_code.trim())
      newErrors.agent_code = "Agent Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    )
      newErrors.email = "Email address is invalid.";
    if (!formData.location.trim())
      newErrors.location = "Location is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.length > 250)
      newErrors.message = "Message cannot exceed 250 characters.";
    
    const agentCodeError = validateAgentCode(formData.agent_code);
    if (agentCodeError) newErrors.agent_code = agentCodeError;
  
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const agentphoneError = validatePhone(formData.agent_phone);
    if (phoneError) newErrors.agent_phone = agentphoneError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "message") setMessageLength(value.length);

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));

    if (name === "phone") {
      const phoneError = validatePhone(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: phoneError,
      }));
    } else if(name === "agent_phone"){
      const agentphoneError = validateAgentPhone(value);
      // console.log('agent phone: ', value)
      setErrors((prevErrors) => ({
        ...prevErrors,
        agent_phone: agentphoneError,
      }));
    } else if (errors[name]) {
      setErrors((prevErrors) => {
        const { [name]: _, ...remainingErrors } = prevErrors;
        return remainingErrors;
      });
    }
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const updatedFormData = {
      ...formData,
      phone: `255${formData.phone}`,
    };
    // console.log('agent phone: ', formData.agent_phone)
    toast({
      title: "Sending Message...",
      description: "Your message is being sent. Please wait.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });

    try {
      const saveResponse = await api.post("/Messages/", updatedFormData);
      console.log("Message saved to database:", saveResponse.data);

      const smsResult = await sendSms(updatedFormData);

      if (smsResult.success) {
        toast({
          title: "Message Sent",
          description: smsResult.message,
          status: "success",
          duration: 8000,
          isClosable: true,
        });

        setFormData({
          user_name: "",
          email: "",
          agent_code: "",
          location: "",
          agent_phone: "",
          message: "",
          phone: "",
          status: "NOT URGENT",
        });
        setMessageLength(0);
      } else {
        toast({
          title: "Message Failed",
          description: smsResult.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error during message sending process:", error);
      toast({
        title: "Send Failed",
        description:
          "There was an error saving your message or sending the SMS. Please try again.",
        status: "error",
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
        ></Flex>
        <Container px={{ md: "0px", base: "20px" }}>
          <Flex
            gap="10px"
            w={{ md: "94%", base: "100%" }}
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            textAlign="start"
            mt={{ md: "0px", base: "15px" }}
            pt={{ md: "0px", base: "15px" }}
          >
            {/* <Heading
              size="headingxs"
              as="h1"
              color="light_blue.a700"
              fontSize="16px"
              fontWeight={600}
            >
              You Can Reach Us Anytime{" "}
            </Heading> */}
            <Flex alignSelf="stretch">
              <Heading
                size="heading2xl"
                color="gray.900"
                letterSpacing="-0.96px"
              >
                Agent case pannel
              </Heading>
            </Flex>
          </Flex>

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
                  {/* Input Fields */}
                  <Flex
                    flexDirection={{ md: "row", base: "column" }}
                    gap="16px"
                    w="100%"
                  >
                    <Box w="100%" display="flex" alignItems="center">
                      <Input
                        size="md"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        placeholder="Client Name *"
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
                    <Box w="100%" display="flex" alignItems="center">
                      <Input
                        size="md"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Client Email *"
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
                      {/* Phone Input with Validation */}
                      <Box w="100%" display="flex" alignItems="center">
                        <Box
                          bg="gray.100"
                          px="10px"
                          py="14px"
                          borderLeftRadius="4px"
                          border="0.2px"
                          borderColor="gray.300"
                        >
                          +255
                        </Box>
                        <Input
                          size="md"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onKeyPress={handleKeyPress}
                          maxLength={9} // Limit to 9 digits
                          placeholder="Client Phone Number"
                          type="text"
                          fontFamily="Poppins"
                          w="100%"
                          borderRadius="0 4px 4px 0"
                          border="0.2px"
                          borderColor="gray.300"
                        />
                      </Box>
                      {errors.phone && (
                        <Box color="red.500" mt="2px">
                          {errors.phone}
                        </Box>
                      )}
                    </Box>
                  </Flex>

                  <Flex
                    flexDirection={{ md: "row", base: "column" }}
                    gap="16px"
                    w="100%"
                  >
                    <Box w="100%" display="flex" alignItems="center">
                      <Input
                        size="md"
                        name="agent_code"
                        value={formData.agent_code}
                        onChange={handleChange}
                        placeholder="Agent Code *"
                        type="text"
                        fontFamily="Poppins"
                        w="100%"
                        borderRadius="4px"
                      />
                      {errors.agent_code && (
                        <Box color="red.500" mt="2px">
                          {errors.agent_code}
                        </Box>
                      )}
                    </Box>
                    <Box w="100%" display="flex" alignItems="center">
                      <Select
                        size="md"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Select location *"
                        fontFamily="Poppins"
                        w="100%"
                        borderRadius="4px"
                      >
                        <option value="Arusha">Arusha</option>
                        <option value="Dodoma">Dodoma</option>
                        <option value="Geita">Geita</option>
                        <option value="Ilala">Ilala</option>
                        <option value="Iringa">Iringa</option>
                        <option value="Kagera">Kagera</option>
                        <option value="Katavi">Katavi</option>
                        <option value="Kigoma">Kigoma</option>
                        <option value="Kilimanjaro">Kilimanjaro</option>
                        <option value="Kinondoni">Kinondoni</option>
                        <option value="Lindi">Lindi</option>
                        <option value="Manyara">Manyara</option>
                        <option value="Mara">Mara</option>
                        <option value="Mbeya">Mbeya</option>
                        <option value="Morogoro">Morogoro</option>
                        <option value="Mtwara">Mtwara</option>
                        <option value="Mwanza">Mwanza</option>
                        <option value="Njombe">Njombe</option>
                        <option value="Pemba North">Pemba North</option>
                        <option value="Pemba South">Pemba South</option>
                        <option value="Pwani">Pwani</option>
                        <option value="Rukwa">Rukwa</option>
                        <option value="Ruvuma">Ruvuma</option>
                        <option value="Shinyanga">Shinyanga</option>
                        <option value="Simiyu">Simiyu</option>
                        <option value="Singida">Singida</option>
                        <option value="Songwe">Songwe</option>
                        <option value="Tabora">Tabora</option>
                        <option value="Tanga">Tanga</option>
                        <option value="Temeke">Temeke</option>
                        <option value="Unguja North">Unguja North</option>
                        <option value="Unguja South">Unguja South</option>
                        <option value="Zanzibar City">Zanzibar City</option>
                      </Select>
                      {errors.location && (
                        <Box color="red.500" mt="2px">
                          {errors.location}
                        </Box>
                      )}
                    </Box>

                    <Box w="100%">
                      {/* Phone Input with Validation */}
                      <Box w="100%" display="flex" alignItems="center">
                        <Box
                          bg="gray.100"
                          px="10px"
                          py="14px"
                          borderLeftRadius="4px"
                          border="0.2px"
                          borderColor="gray.300"
                        >
                          +255
                        </Box>
                        <Input
                          size="md"
                          name="agent_phone"
                          value={formData.agent_phone}
                          onChange={handleChange}
                          onKeyPress={handleKeyPress}
                          maxLength={9} // Limit to 9 digits
                          placeholder="Agent Phone Number"
                          type="text"
                          fontFamily="Poppins"
                          w="100%"
                          borderRadius="0 4px 4px 0"
                          border="0.2px"
                          borderColor="gray.300"
                        />
                      </Box>
                      {errors.agent_phone && (
                        <Box color="red.500" mt="2px">
                          {errors.agent_phone}
                        </Box>
                      )}
                    </Box>
                  </Flex>


                  {/* Message Input */}
                  <Box w="100%">
                    <Textarea
                      size="md"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" Message... *"
                      fontFamily="Poppins"
                      w="100%"
                      borderRadius="4px"
                      h="200px"Client
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
                  {/* Status Checkboxes */}
                  <Flex
                    gap="16px"
                    flexDirection="row"
                    mt="16px"
                    alignSelf="end"
                  >
                    <Checkbox
                      name="status"
                      value="URGENT"
                      isChecked={formData.status === "URGENT"}
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
                      value="NORMAL"
                      isChecked={formData.status === "NORMAL"}
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
                      value="NOT URGENT"
                      isChecked={formData.status === "NOT URGENT"}
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
                  {/* Submit Button */}
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
