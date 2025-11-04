import React from "react";

const Resume = ({ pdfUrl }) => (
  <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
    <iframe
      src={pdfUrl}
      style={{ width: "100%", height: "100%", border: "none" }}
      title="Resume"
    />
  </div>
);

export default Resume;
