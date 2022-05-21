import React from "react";
import styled from "styled-components";

export const InputNumber = React.memo<InputNumberProps>(
  ({ placeholder, value, onChange }) => (
    <SWrap>
      <SLabel htmlFor={`input.${placeholder}`}>{placeholder}</SLabel>

      <SInput
        value={value || undefined}
        onChange={onChange}
        placeholder={placeholder}
        id={`input.${placeholder}`}
        type="number"
      />
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

interface InputNumberProps {
  readonly placeholder: string;
  readonly value: number;
  readonly onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

/* --------------------------------- / Types -------------------------------- */
