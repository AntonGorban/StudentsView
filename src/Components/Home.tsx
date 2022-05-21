import React from "react";
import styled from "styled-components";

import { useModal } from "../hooks/useModal";
import { useStudents } from "../hooks/useStudents";
import { NewStudentForm } from "./NewStudentForm";
import { StudentsTable } from "./StudentsTable";
import { SFlex } from "./Styled";

export const Home: React.FC = () => {
  const { students, addStudent, removeStudent, updateStudent } = useStudents();
  const { isOpen, open, close } = useModal();

  return (
    <>
      <SFlex justify="space-around" align="center">
        <STitle>Список студентов</STitle>

        <button onClick={open}>Добавить студента</button>
      </SFlex>

      <NewStudentForm createStudent={addStudent} close={close} isOpen={isOpen} />

      {!!students.length ? (
        <StudentsTable students={students} updateStudent={updateStudent} removeStudent={removeStudent} />
      ) : (
        <h3 style={{ textAlign: "center" }}>Студентов нет</h3>
      )}
    </>
  );
};

/* ---------------------------- Styled components --------------------------- */

const STitle = styled.h2``;

/* --------------------------- / Styled components -------------------------- */
