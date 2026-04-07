"use client";
import { useState } from "react";

const pdfLibrary = [
  { id: 1, title: "Mathematics", file: "/pdfs/math.pdf" },
  { id: 2, title: "Physics", file: "/pdfs/physics.pdf" },
  { id: 3, title: "Chemistry", file: "/pdfs/chemistry.pdf" },
];

export default function Home() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      
      {/* Sidebar */}
      <div style={{ width: "30%" }}>
        <h2>Subjects</h2>
        {pdfLibrary.map((pdf) => (
          <div
            key={pdf.id}
            onClick={() => setSelectedPdf(pdf.file)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            {pdf.title}
          </div>
        ))}
      </div>

      {/* Viewer */}
      <div style={{ width: "70%", marginLeft: "20px" }}>
        {selectedPdf ? (
          <iframe
            src={selectedPdf}
            title="PDF Viewer"
            width="100%"
            height="600px"
          />
        ) : (
          <p>Select a subject to view PDF</p>
        )}
      </div>
    </div>
  );
}
