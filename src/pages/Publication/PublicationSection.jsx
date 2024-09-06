// import DocumentDetails from "../../components/DocumentDetails";
import DocumentViewer from "../../components/DocumentViewer";
// import { CloseIcon } from "@chakra-ui/icons";
import {
  Heading,
  Flex,
  Box,
  Text,
  Input,
  Image,
  // InputLeftElement,
  // InputGroup,
  // InputRightElement,
  // Button,
} from "@chakra-ui/react";
import React, { Suspense } from "react";

// const fileTypeList = [
//   {
//     fileType: "PDF",
//     documentName: "Adoption requirements.pdf",
//     fileSize: "200 KB",
//   },
//   {
//     fileType: "PDF",
//     documentName: "Adoption requirements.pdf",
//     fileSize: "200 KB",
//   },
//   {
//     fileType: "MP4",
//     documentName: "Day care requirements.pdf.mp4",
//     fileSize: "16 MB",
//   },
//   {
//     fileType: "PDF",
//     documentName: "Adoption requirements.pdf",
//     fileSize: "200 KB",
//   },
//   {
//     fileType: "DOCX",
//     documentName: "UX Design Guidelines.docx",
//     fileSize: "400 KB",
//   },
//   {
//     fileType: "PDF",
//     documentName: "Dashboard interaction.pdf",
//     fileSize: "12 MB",
//   },
//   {
//     fileType: "MP3",
//     documentName: "Briefing call recording.mp3",
//     fileSize: "18.6 MB",
//   },
// ];
const documentList = [
  {
    fileType: "PDF",
    documentName: "Adoption requirements.pdf",
    fileSize: "200 KB",
  },
  {
    fileType: "JPG",
    documentName: "Adoption requirements.pdf.screenshot.jpg",
    fileSize: "720 KB",
  },
  {
    fileType: "MP4",
    documentName: "Day care requirements.pdf.mp4",
    fileSize: "16 MB",
  },
  {
    fileType: "PPTX",
    documentName: "Dashboard prototype FINAL.pptx",
    fileSize: "4.2 MB",
  },
  {
    fileType: "DOCX",
    documentName: "UX Design Guidelines.docx",
    fileSize: "400 KB",
  },
  {
    fileType: "PDF",
    documentName: "Dashboard interaction.pdf",
    fileSize: "12 MB",
  },
  {
    fileType: "MP3",
    documentName: "Briefing call recording.mp3",
    fileSize: "18.6 MB",
  },
];

export default function PublicationSection() {
  // const [searchBarValue16, setSearchBarValue16] = React.useState("");

  return (
    <>
      {/* publication section */}
      <Box mt="24px">
        <Box bg="white.a700" px={{ md: "50px", base: "20px" }}>
          <Box
            mt="18px"
            borderColor="blue_gray.50"
            borderWidth="1px"
            borderStyle="solid"
            bg="white.a700"
            boxShadow="xs"
            px={{ base: "20px", sm: "38px" }}
            borderRadius="12px"
          >
            <Box
              borderColor="blue_gray.50"
              borderBottomwidth="0.5px"
              borderStyle="solid"
              bg="white.a700"
            >
              <Flex
                mb="20px"
                gap="16px"
                justifyContent="center"
                alignItems="start"
                px={{ base: "20px", sm: "24px" }}
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  mt="20px"
                  gap="4px"
                  alignSelf={{ md: "end", base: "auto", sm: "stretch" }}
                  flex={1}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Flex alignSelf="stretch">
                    <Heading
                      size="headingmd"
                      as="h1"
                      color="gray.900"
                      alignSelf="end"
                    >
                      Browse through different resources under the company
                    </Heading>
                  </Flex>
                  <Text>Lorem ipsum dolor sit amet consectetur. </Text>
                </Flex>
                <Image
                  src="images/img_dots_vertical.svg"
                  alt="Vertical Dots"
                  h="20px"
                  mt="20px"
                  w={{ md: "20px", base: "100%" }}
                />
              </Flex>
            </Box>
            {/* <Flex
              borderColor="blue_gray.50"
              borderBottomwidth="1px"
              borderStyle="solid"
              justifyContent="space-between"
              alignItems="center"
              gap="20px"
              px="16px"
              py="12px"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Button
                size="md"
                colorscheme="gray_50_01"
                bg="gray_50_01"
                color="black"
                fontWeight={600}
                borderColor="blue_gray.100"
                borderWidth="1px"
                borderStyle="solid"
                minw="84px"
                borderRadius="8px"
              >
                View all
              </Button>
              <InputGroup w={{ base: "100%", sm: "26%" }} size="sm">
                <InputLeftElement>
                  <Image
                    src="images/img_search_blue_gray_500.svg"
                    alt="Search"
                    h="20px"
                    w="20px"
                  />
                </InputLeftElement>
                <Input
                  colorScheme="white_A700"
                  placeholder={`Search resource`}
                  value={searchBarValue16}
                  onChange={(e) => setSearchBarValue16(e.target.value)}
                  color="blue_gray.500"
                  gap="8px"
                  borderColor="blue_gray.100"
                  borderWidth="1px"
                  borderRadius="8px"
                />
                <InputRightElement>
                  {searchBarValue16?.length > 0 ? (
                    <CloseIcon onClick={() => setSearchBarValue16("")} />
                  ) : null}
                </InputRightElement>
              </InputGroup>
            </Flex> */}
            <Flex bg="white.a700" flexDirection={{ md: "row", base: "column" }}>
              <Box
                flex={1}
                alignSelf={{ md: "auto", base: "stretch" }}
                px={{ md: 0, base: "20px" }}
              >
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  bg="gray.50_01"
                  alignItems="center"
                  p="12px"
                >
                  <Box
                    h="20px"
                    borderColor="blue_gray.100"
                    borderWidth="1px"
                    borderStyle="solid"
                    w="20px"
                    borderRadius="6px"
                  />
                  <Flex flex={1} px="12px">
                    <Heading color="blue_gray.700">File title</Heading>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {documentList.map((d, index) => (
                      <DocumentViewer {...d} key={"fileList" + index} />
                    ))}
                  </Suspense>
                </Flex>
              </Box>
              <Box w={{ md: "32%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Box
                  borderColor="blue gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  bg="gray.50_01"
                  p="12px"
                >
                  <Flex>
                    <Heading as="h3" color="blue_gray.700">
                      File description
                    </Heading>
                  </Flex>
                </Box>
                <Input
                  placeholder={`Figma ipsum component variant main layer. Fill auto.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomWidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomWidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomWidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomWidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
              </Box>
              <Box w={{ md: "10%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  bg="gray.50_01"
                  p="12px"
                >
                  <Flex justifyContent="center">
                    <Heading as="h4" color="blue_gray.700">
                      Date uploaded
                    </Heading>
                  </Flex>
                </Box>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 2, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 8, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
              </Box>
              <Box w={{ md: "10%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  bg="gray.50 01"
                  p="12px"
                >
                  <Flex justifyContent="center">
                    <Heading as="h5" color="blue_gray.700">
                      Last updated
                    </Heading>
                  </Flex>
                </Box>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 2. 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 8, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
              </Box>
              <Box w={{ md: "10%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Box
                  borderColor="blue gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  bg="gray.50 01"
                  p="12px"
                >
                  <Flex>
                    <Heading as="h6" color="blue_gray.700">
                      Actions
                    </Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderwidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifySelf="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* <Box bg="white.a700" px={{ md: "50px", base: "20px" }}>
          <Box
            mt="18px"
            borderColor="blue_gray.50"
            borderWidth="1px"
            borderStyle="solid"
            bg="white.a700"
            boxShadow="xs"
            px={{ base: "20px", sm: "38px" }}
            borderRadius="12px"
          >
            <Box
              h="1px"
              borderColor="blue_gray.50"
              borderTopWidth="0.5px"
              borderBottomwidth="4px"
              borderStyle="solid"
              bg="white.a700"
            />
            <Flex bg="white.a700" flexDirection={{ md: "row", base: "column" }}>
              <Flex
                flex={1}
                flexDirection="column"
                alignItems={{ md: "auto", base: "stretch" }}
                px={{ md: 0, base: "20px" }}
              >
                <Suspense fallback={<div>Loading feed</div>}>
                  {fileTypeList.map((d, index) => (
                    <DocumentDetails {...d} key={"fileTypeList1" + index} />
                  ))}
                </Suspense>
              </Flex>
              <Box w={{ md: "32%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomWidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomWidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
                <Input
                  placeholder={`Figma ipsum component variant main layer. Shadow.`}
                  color="gray.900"
                  fontWeight={500}
                  borderBottomwidth="1px"
                  borderColor="blue_gray.50"
                />
              </Box>
              <Box w={{ md: "10%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                  justifyContent="center"
                >
                  <Text>Jan 2, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2024</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderStyle="solid"
                  borderBottomwidth="1px"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 8, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
              </Box>
              <Box w={{ md: "10%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Flex
                  borderColor="blue gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2024</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 2, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 8, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 6, 2022</Text>
                </Flex>
                <Flex
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  justifyContent="center"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Text>Jan 4, 2024</Text>
                </Flex>
              </Box>
              <Box w={{ md: "10%", base: "100%" }} px={{ md: 0, base: "20px" }}>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading>Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h3">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderwidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h4">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h5">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomwidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
                <Box
                  borderColor="blue_gray.50"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                  p={{ base: "20px", sm: "24px" }}
                >
                  <Flex
                    borderColor="green.a100"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.50"
                    justifyContent="center"
                    borderRadius="10px"
                  >
                    <Heading as="h6">Download</Heading>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box> */}
      </Box>
    </>
  );
}
