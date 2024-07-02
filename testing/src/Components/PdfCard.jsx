import React from "react";
import Box from "@mui/material/Box";

const PdfCard = ({ pdfUrl }) => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <iframe
        src={pdfUrl}
        title="PDF"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </Box>
  );
};

export default PdfCard;
