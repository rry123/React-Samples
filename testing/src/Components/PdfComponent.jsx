import React from "react";
import { Document, Page } from "react-pdf";

const PdfComponent = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;

  const pdfUrl = URL.createObjectURL(data);

  return (
    <div style={{ textAlign: 'center' }}>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfComponent;
