import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";
import Header from "../../components/PdfViewer/header";
import PdfView from "../../components/PdfViewer/pdf-view";

export default function PdfViewer() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    return (
        <>
            <Helmet>
                <title>Pdf Viewer</title>
                <meta name="description" content="View pdf file" />
            </Helmet>
            <Box bg="white.a700" w="100%">
                {/* Header Section */}
                <Header alignSelf="stretch" />
                <PdfView pdf />
                
            </Box>
        </>
    );
}
