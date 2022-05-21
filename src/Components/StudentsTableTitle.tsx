import React from "react";
import styled from "styled-components";

export const StudentsTableTitle = React.memo(() => (
  <STableTitle>
    <STableRow>
      <STableCell>№</STableCell>

      <STableCell>Фамилия</STableCell>

      <STableCell>Имя</STableCell>

      <STableCell>Отчество</STableCell>

      <STableCell>Специальность</STableCell>

      <STableCell>Курс</STableCell>

      <STableCell>Бюджет / Контракт</STableCell>

      <STableCell>Действия</STableCell>
    </STableRow>
  </STableTitle>
));

/* ---------------------------- Styled components --------------------------- */

const STableTitle = styled.thead``;

const STableRow = styled.tr``;

const STableCell = styled.td`
  border: 2px solid var(--white);
  padding: 5px;
  text-align: center;
`;

/* --------------------------- / Styled components -------------------------- */
