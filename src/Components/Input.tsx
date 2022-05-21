import React from "react";
import styled from "styled-components";

export const Input = React.memo<InputProps>(
  ({ placeholder, value, onChange }) => (
    <SWrap>
      <SLabel htmlFor={`input.${placeholder}`}>{placeholder}</SLabel>

      <SInput value={value} onChange={onChange} placeholder={placeholder} id={`input.${placeholder}`} />
    </SWrap>
  ),

  (prevProps, nextProps) => prevProps.value === nextProps.value && prevProps.placeholder === nextProps.placeholder
);

/* ---------------------------- Styled components --------------------------- */

const SWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  & > label {
    flex: 0 1 150px;
  }

  & > input {
    flex: 1 1 300px;
  }
`;

const SLabel = styled.label``;

const SInput = styled.input``;

/* --------------------------- / Styled components -------------------------- */

/* ---------------------------------- Types --------------------------------- */

interface InputProps {
  readonly placeholder: string;
  readonly value: string;
  readonly onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

/* --------------------------------- / Types -------------------------------- */
