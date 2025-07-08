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
import sendSms from "../../api/collaboratorSms"; // Adjusted import

export default function CollaboratorRegistration() {
  const [formData, setFormData] = useState({
    collaborator_code: "",
    location: "",
    collaborator_phone: "",
    message: "",
    status: "NOT URGENT",
  });

  const [errors, setErrors] = useState({});
  const [messageLength, setMessageLength] = useState(0);
  const toast = useToast();

  const REGION_CODES = {
    Arusha: "01",
    Dodoma: "02",
    Geita: "03",
    Ilala: "04",
    Iringa: "05",
    Kagera: "06",
    Katavi: "07",
    Kigoma: "08",
    Kilimanjaro: "09",
    Kinondoni: "10",
    Lindi: "11",
    Manyara: "12",
    Mara: "13",
    Mbeya: "14",
    Morogoro: "15",
    Mtwara: "16",
    Mwanza: "17",
    Njombe: "18",
    "Pemba North": "19",
    "Pemba South": "20",
    Pwani: "21",
    Rukwa: "22",
    Ruvuma: "23",
    Shinyanga: "24",
    Simiyu: "25",
    Singida: "26",
    Songwe: "27",
    Tabora: "28",
    Tanga: "29",
    Temeke: "30",
    "Unguja North": "31",
    "Unguja South": "32",
    "Zanzibar City": "33",
  };


  const validateCollaboratorPhone = (collaborator_phone) => {
    if (!collaborator_phone.trim()) return "Phone number is required.";
    if (!/^[76]\d{8}$/.test(collaborator_phone))
      return "Phone number must start with 7 or 6 and be 9 digits long.";
    return null;
  };

  // Validation for collaborator code
  const validateCollaboratorCode = (collaborator_code, location) => {
    if (!collaborator_code.trim()) return "Collaborator code is required.";
    // if (!/^RV-\d{2}-\d{2}$/.test(collaborator_code))
    //   return "Invalid Code.";

    const match = /^RV-(\d{2})-\d{2}$/.exec(collaborator_code);
    if (!match) return "Invalid Code";
    // eslint-disable-next-line
    const regionCode = match [1];
    const expectedRegionCode = REGION_CODES[formData.location];

    if (!expectedRegionCode || regionCode !== expectedRegionCode){
      return "Invalid Collaborator Code"
    }

    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.collaborator_code.trim())
      newErrors.collaborator_code = "Collaborator code is required.";
    if (!formData.location.trim())
      newErrors.location = "Location is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.length > 250)
      newErrors.message = "Message cannot exceed 250 characters.";
    
    const collaboratorCodeError = validateCollaboratorCode(formData.collaborator_code, formData.location);
    if (collaboratorCodeError) newErrors.collaborator_code = collaboratorCodeError;
  
    
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "message") setMessageLength(value.length);

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));

    if(name === "collaborator_phone"){
      const collaboratorphoneError = validateCollaboratorPhone(value);
      // console.log('collaborator phone: ', value)
      setErrors((prevErrors) => ({
        ...prevErrors,
        collaborator_phone: collaboratorphoneError,
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
    };
    // console.log('collaborator phone: ', formData.collaborator_phone)
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
          collaborator_code: "",
          location: "",
          collaborator_phone: "",
          message: "",
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
                Collaborator case pannel
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
                        name="collaborator_code"
                        value={formData.collaborator_code}
                        onChange={handleChange}
                        placeholder="Collaborator Code *"
                        type="text"
                        fontFamily="Poppins"
                        w="100%"
                        borderRadius="4px"
                      />
                      {errors.collaborator_code && (
                        <Box color="red.500" mt="2px">
                          {errors.collaborator_code}
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
                        <option value="Dar es salaam"> Dar es salaam</option>
                        <option value="Dodoma">Dodoma</option>
                        <option value="Geita">Geita</option>
                        <option value="Iringa">Iringa</option>
                        <option value="Kagera">Kagera</option>
                        <option value="Katavi">Katavi</option>
                        <option value="Kigoma">Kigoma</option>
                        <option value="Kilimanjaro">Kilimanjaro</option>
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
                          name="collaborator_phone"
                          value={formData.collaborator_phone}
                          onChange={handleChange}
                          onKeyPress={handleKeyPress}
                          maxLength={9} // Limit to 9 digits
                          placeholder="Phone Number *"
                          type="text"
                          fontFamily="Poppins"
                          w="100%"
                          borderRadius="0 4px 4px 0"
                          border="0.2px"
                          borderColor="gray.300"
                        />
                      </Box>
                      {errors.collaborator_phone && (
                        <Box color="red.500" mt="2px">
                          {errors.collaborator_phone}
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
