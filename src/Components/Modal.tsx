import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { SFlex } from "./Styled";

export const Modal: React.FC<ModelProps> = ({ title, isOpen, close, children }) => (
  <ReactModal isOpen={isOpen} onRequestClose={close} style={{ content: { color: "var(--dark)" } }}>
    <SFlex direction="column" gap="15px">
      <SFlex gap="15px" justify="space-between" align="center" width="100%">
        <STitle>{title}</STitle>

        <SCloseButton onClick={close}>Закрыть</SCloseButton>
      </SFlex>

      {children}
    </SFlex>
  </ReactModal>
);

/* ---------------------------- Styled components --------------------------- */

const STitle = styled.h3`
  margin: 0;
`;

const SCloseButton = styled.button``;

/* --------------------------- / Styled components -------------------------- */

/* ---------------------------------- Types --------------------------------- */

interface ModelProps {
  readonly title: string;
  readonly isOpen: boolean;
  readonly close: () => void;
  readonly children: React.ReactNode;
}

/* --------------------------------- / Types -------------------------------- */
