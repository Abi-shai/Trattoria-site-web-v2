import { useState } from "react";
// 1. On ajoute l'import de pdfjs pour configurer le worker
import { Document, Page, pdfjs } from 'react-pdf';

// 2. IMPORTATION OBLIGATOIRE DES STYLES (sinon le rendu sera cassé)
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import englishFile from "../../../assets/english-menu.pdf";

import './englishMenu.css';

// 3. CONFIGURATION DU WORKER (via CDN pour plus de simplicité)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const EnglishMenu = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <div className="pdf-scroll-container">
      <Document file={englishFile} onLoadSuccess={onDocumentLoadSuccess}>
        {/* On crée un tableau de la taille de numPages et on map pour afficher chaque page */}
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={.8}
            width={window.innerWidth > 100 ? 600 : window.innerWidth - 40}
            renderTextLayer={true}
            className="pdf-page"
          />
        ))}
      </Document>
    </div >
  );
}

export default EnglishMenu; 