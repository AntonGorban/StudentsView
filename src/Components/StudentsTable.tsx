import React from "react";
import styled from "styled-components";

import { IStudentReadonly } from "../../types/domain";
import { StudentsTableItem } from "./StudentsTableItem";
import { StudentsTableTitle } from "./StudentsTableTitle";

export const StudentsTable: React.FC<StudentsTableProps> = ({ students, updateStudent, removeStudent }) => {
  return (
    <STable cellSpacing={0}>
      <StudentsTableTitle />

      <STableBody>
        {students.map((student, idx) => (
          <StudentsTableItem
            key={`student.${idx}`}
            id={idx}
            student={student}
            update={updateStudent(idx)}
            remove={removeStudent(idx)}
          />
        ))}
      </STableBody>
    </STable>
  );
};

/* ---------------------------- Styled components --------------------------- */

const STable = styled.table`
  min-width: 100%;
`;

const STableBody = styled.tbody``;

/* --------------------------- / Styled components -------------------------- */

/* ---------------------------------- Types --------------------------------- */

interface StudentsTableProps {
  readonly students: ReadonlyArray<IStudentReadonly>;
  readonly updateStudent: (idx: number) => (updatedStudent: Partial<IStudentReadonly>) => void;
  readonly removeStudent: (idx: number) => () => void;
}

/* --------------------------------- / Types -------------------------------- */
