import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";
import {
  Box,
  Flex,
  Heading,
  Button,
  Spinner,
  Alert,
  AlertIcon,
  IconButton,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ THE CORRECT WORKER FOR pdfjs-dist@4.x
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;


export default function CaseViewerPage() {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    const fetchCaseAndPdf = async () => {
      try {
        setIsLoading(true);

        // Fetch case details first
        const caseResponse = await api.get(`/Cases/${caseId}/`);
        setCaseDetails(caseResponse.data);

        // Then fetch the PDF
        const pdfResponse = await api.get(`/Cases/${caseId}/stream/`, {
          responseType: "blob",
        });
        const blob = new Blob([pdfResponse.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);

        // opens raw PDF in browser
        // const blob = new Blob([pdfResponse.data], { type: "application/pdf" });
        // const url = URL.createObjectURL(blob);
        // window.open(url);

        setError(null);
      } catch (err) {
        console.error("Failed to fetch case or PDF", err);
        setError("Failed to load the case document. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseAndPdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
    // eslint-disable-next-line
  }, [caseId]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.25, 2.5));
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.25, 0.5));
  }

  return (
    <Box p={4} maxW="1200px" mx="auto" fontFamily="Poppins">
      <Flex align="center" mb={4}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => navigate(-1)}
          mr={2}
          aria-label="Go back"
        />
        <Heading size="lg">Case Document Viewer</Heading>
      </Flex>

      {caseDetails && (
        <Box mb={4} p={4} bg="gray.50" borderRadius="md" fontFamily="Poppins">
          <Stack spacing={2}>
            <Text fontSize="xl" fontWeight="bold">
              {caseDetails.appellant} Vs {caseDetails.respondent}
            </Text>
            <Text>
              <strong>Case Code:</strong> {caseDetails.case_code}
            </Text>
            <Text>
              <strong>Case Number:</strong> {caseDetails.case_number}
            </Text>
            <Text>
              <strong>Court:</strong> {caseDetails.court}
            </Text>
            <Text>
              <strong>Year:</strong> {caseDetails.year}
            </Text>
          </Stack>
        </Box>
      )}

      {isLoading ? (
        <Flex justify="center" align="center" minH="300px">
          <Spinner size="xl" />
        </Flex>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Box
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          p={2}
          bg="white"
        >
          <Flex justify="space-between" mb={2} wrap="wrap">
            <Flex align="center" mb={[2, 0]}>
              <Button
                onClick={() => changePage(-1)}
                disabled={pageNumber <= 1}
                mr={2}
              >
                Previous
              </Button>
              <Button
                onClick={() => changePage(1)}
                disabled={pageNumber >= numPages}
                mr={2}
              >
                Next
              </Button>
              <Box mr={4}>
                Page {pageNumber} of {numPages}
              </Box>
            </Flex>
            <Flex align="center">
              <Button onClick={zoomOut} mr={2}>
                Zoom Out
              </Button>
              <Button onClick={zoomIn} mr={2}>
                Zoom In
              </Button>
              <Box>{(scale * 100).toFixed(0)}%</Box>
            </Flex>
          </Flex>

          <Box
            overflow="auto"
            maxH="calc(100vh - 300px)"
            border="1px solid"
            borderColor="gray.200"
            bg="gray.50"
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => {
                console.error("PDF load error", error); // 👈 Add this to catch actual cause
                setError("Failed to load the file.");
              }}
              loading={
                <Flex justify="center" align="center" minH="300px">
                  <Spinner size="xl" />
                </Flex>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </Box>
        </Box>
      )}
    </Box>
  );
}
