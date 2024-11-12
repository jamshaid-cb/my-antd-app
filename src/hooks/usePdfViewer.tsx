import { useState, useMemo, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { theme } from "antd";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface UsePdfViewerProps {
  file: string | File | Blob;
  defaultPage?: number;
}

interface UsePdfViewerReturn {
  PdfViewer: () => JSX.Element;
  ControlBar: () => JSX.Element;
  onPageChange: (page: number) => void;
}

function usePdfViewer({
  file,
  defaultPage = 1,
}: UsePdfViewerProps): UsePdfViewerReturn {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(defaultPage);
  const [scale, setScale] = useState<number>(1);

  const { token }: any = theme.useToken();
  const primaryColor = token?.palette?.primary.main;

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: any) => {
      setNumPages(numPages);
    },
    [file]
  );

  const onPageChange = useCallback(
    (newPageNumber: number) => {
      if (numPages && newPageNumber >= 1 && newPageNumber <= numPages) {
        setPageNumber(newPageNumber);
      }
    },
    [numPages]
  );

  const spanStyle = {
    background: "grey",
    minWidth: "30px",
    padding: "4px",
    borderRadius: "5px",
  };

  const pageStyle = {
    background: "grey",
    padding: "6px 10px",
    borderRadius: "5px",
    color: "white",
    display: "block",
  };

  const PageNum = () => (
    <p style={{ position: "absolute", bottom: "30px", ...pageStyle }}>
      Page{" "}
      <span
        style={{
          ...spanStyle,
          background: "white",
          color: "black",
          padding: "4px 10px",
          marginInline: "3px",
        }}
      >
        {pageNumber}
      </span>{" "}
      of <span style={spanStyle}>{numPages || 1}</span>
    </p>
  );

  const ControlBar = useMemo(
    () => () =>
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            margin: "10px 0",
          }}
        >
          <LeftOutlined
            style={{ color: primaryColor }}
            onClick={() => onPageChange(pageNumber - 1)}
            disabled={pageNumber <= 1}
          />
          <span>
            Page{" "}
            <span
              style={{
                color: primaryColor,
                background: "white",
                border: "0.5px solid #cfcfcf",
                borderRadius: "5px",
                padding: "2px 7px",
              }}
            >
              {pageNumber}
            </span>{" "}
            of {numPages || 1}
          </span>
          <RightOutlined
            style={{ color: primaryColor }}
            onClick={() => onPageChange(pageNumber + 1)}
            disabled={numPages ? pageNumber >= numPages : false}
          />
          <hr style={{ height: "20px", width: "2px", marginInline: "0px" }} />
          <ZoomInOutlined
            style={{ color: primaryColor }}
            onClick={() => setScale((prev) => prev + 0.1)}
          />
          <ZoomOutOutlined
            style={{ color: primaryColor }}
            onClick={() => setScale((prev) => prev - 0.1)}
          />
        </div>
      ),
    [onPageChange, pageNumber, numPages]
  );

  const PdfViewer = useMemo(
    () => () =>
      (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "500px",
              width: "100%",
              overflow: "auto",
            }}
          >
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page scale={scale} pageNumber={pageNumber} />
            </Document>
          </div>
          <PageNum />
        </div>
      ),
    [file, onDocumentLoadSuccess, pageNumber, scale, numPages]
  );

  return { PdfViewer, ControlBar, onPageChange };
}

export default usePdfViewer;
