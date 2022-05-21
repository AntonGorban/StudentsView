import React from "react";
import styled from "styled-components";

import { useModal } from "../hooks/useModal";
import { useStudents } from "../hooks/useStudents";
import { NewStudentForm } from "./NewStudentForm";
import { SFlex } from "./Styled";

export const Home: React.FC = () => {
  const { students, addStudent, removeStudent, updateStudent } = useStudents();
  const { isOpen, open, close } = useModal();

  return (
    <>
      <SFlex justify="space-around" align="center">
        <STitle>Students List</STitle>

        <button onClick={open}>New student</button>
      </SFlex>

      <NewStudentForm createStudent={addStudent} close={close} isOpen={isOpen} />

      {students.map((student) => (
        <pre>{JSON.stringify(student)}</pre>
      ))}
    </>
  );
};

/* ---------------------------- Styled components --------------------------- */

const STitle = styled.h2``;

/* --------------------------- / Styled components -------------------------- */
