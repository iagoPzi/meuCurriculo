import { FilePdf } from "phosphor-react";
import styled from "styled-components";

export function PdfButton() {
  return (
    <>
      <PdfBtn>
        <a href="https://drive.google.com/file/d/1jkV_c2DG5ws5FRwUo1b_m5jj6IzLpHSl/view?usp=sharing" target="_blank">
          <FilePdf className="pdfBtn" />
        </a>
      </PdfBtn>
    </>
  );
}

const PdfBtn = styled.button`
  position: fixed;
  cursor: pointer;
  padding: 0.75rem;
  display: flex;
  border-radius: 50%;
  border: none;
  right: 3%;
  bottom: 3%;
  color: var(--blue-800);

  a {
    display: flex;
  }

  .pdfBtn {
    font-size: 2rem;
    transition: all 0.2s;
  }

  transition: all 0.2s;
  :hover {
    color: var(--blue-400);
    background: var(--blue-800);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

    .pdfBtn {
      font-size: 2.3rem;
    }
  }
`;
