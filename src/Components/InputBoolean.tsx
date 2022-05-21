import React from "react";
import styled from "styled-components";

export const InputBoolean = React.memo<InputBooleanProps>(
  ({ placeholder, value, onChange }) => (
    <SWrap>
      <SLabel htmlFor={`checkbox.${placeholder}`}>{placeholder}</SLabel>

      <SInput checked={value} onChange={onChange} type="checkbox" id={`checkbox.${placeholder}`} />
    </SWrap>
  ),

  (prevProps, nextProps) => prevProps.value === nextProps.value && prevProps.placeholder === nextProps.placeholder
);

/* ---------------------------- Styled components --------------------------- */

const SWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & > label {
    flex: 0 1 150px;
  }

  & > input {
    flex: 0 0;
  }
`;

const SLabel = styled.label``;

const SInput = styled.input``;

/* --------------------------- / Styled components -------------------------- */

/* ---------------------------------- Types --------------------------------- */

interface InputBooleanProps {
  readonly placeholder: string;
  readonly value: boolean;
  readonly onChange?: () => void;
}

/* --------------------------------- / Types -------------------------------- */
