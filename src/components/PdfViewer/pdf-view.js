import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import '../../styles/pdf-view.css';

function PdfView() {
    const [viewPdf, setViewPdf] = useState(null);

    useEffect(() => {
        // Extract file URL from query parameters
        const params = new URLSearchParams(window.location.search);
        const file = params.get("file");
        console.log("Received file URL:", file);

        if (file) {
            setViewPdf(file);
        } else {
            console.error("Invalid PDF URL or data provided.");
        }
    }, []);

    const toolbarPluginInstance = toolbarPlugin();

    return (
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {viewPdf ? (
                    <Viewer fileUrl={viewPdf} plugins={[toolbarPluginInstance]} />
                ) : (
                    <p>No PDF file to display.</p>
                )}
            </Worker>
        </div>
    );
}

export default PdfView;
