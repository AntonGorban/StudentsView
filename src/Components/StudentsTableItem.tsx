import React from "react";
import styled from "styled-components";

import { IStudentReadonly } from "../../types/domain";
import { useModal } from "../hooks/useModal";
import { SFlex } from "./Styled";
import { UpdateStudentForm } from "./UpdateStudentForm";

export const StudentsTableItem = React.memo<StudentsTableItemProps>(
  ({ id, student, update, remove }) => {
    const { isOpen, open, close } = useModal();

    return (
      <>
        <STableRow>
          <STableCell>{id + 1}</STableCell>
          <STableCell>{student.surname}</STableCell>

          <STableCell>{student.name}</STableCell>

          <STableCell>{student.patronymic}</STableCell>

          <STableCell>{student.specialty}</STableCell>

          <STableCell>{student.course}</STableCell>

          <STableCell>{student.isBudget ? "Бюджет" : "Контракт"}</STableCell>

          <STableCell>
            <SFlex align="center" justify="space-evenly" gap="5px">
              <button onClick={open}>Изменить</button>

              <button onClick={remove}>Удалить</button>
            </SFlex>
          </STableCell>
        </STableRow>

        <UpdateStudentForm student={student} id={id} updateStudent={update} isOpen={isOpen} close={close} />
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.id === nextProps.id && JSON.stringify(prevProps.student) === JSON.stringify(nextProps.student)
);

/* ---------------------------- Styled components --------------------------- */

const STableRow = styled.tr``;

const STableCell = styled.td`
  border: 1px solid var(--white);
  padding: 3px;
  padding-left: 5px;
`;

/* --------------------------- / Styled components -------------------------- */

/* ---------------------------------- Types --------------------------------- */

interface StudentsTableItemProps {
  readonly id: number;
  readonly student: IStudentReadonly;
  readonly update: (updatedStudent: Partial<IStudentReadonly>) => void;
  readonly remove: () => void;
}

/* --------------------------------- / Types -------------------------------- */
