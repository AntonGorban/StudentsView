import React from "react";

import { IStudentReadonly } from "../../types/domain";
import { useUpdateStudentFormLogic } from "../hooks/useUpdateStudentFormLogic";
import { StudentFormModal } from "./StudentFormModal";

export const UpdateStudentForm: React.FC<UpdateStudentFormProps> = ({ student, id, updateStudent, isOpen, close }) => {
  const {
    surname,
    changeSurname,
    name,
    changeName,
    patronymic,
    changePatronymic,
    specialty,
    changeSpecialty,
    course,
    changeCourse,
    isBudget,
    toggleIsBudget,
    submit,
  } = useUpdateStudentFormLogic(student, updateStudent);

  const submitHandler = () => {
    submit();
    close();
  };

  return (
    <StudentFormModal
      surname={surname}
      changeSurname={changeSurname}
      name={name}
      changeName={changeName}
      patronymic={patronymic}
      changePatronymic={changePatronymic}
      specialty={specialty}
      changeSpecialty={changeSpecialty}
      course={course}
      changeCourse={changeCourse}
      isBudget={isBudget}
      toggleIsBudget={toggleIsBudget}
      submit={submitHandler}
      title={`Обновление студента № ${id + 1}`}
      isOpen={isOpen}
      close={close}
      submitText={"Обновить студента"}
    />
  );
};

/* ---------------------------------- Types --------------------------------- */

interface UpdateStudentFormProps {
  readonly student: IStudentReadonly;
  readonly id: number;
  readonly updateStudent: (newStudent: IStudentReadonly) => void;
  readonly isOpen: boolean;
  readonly close: () => void;
}

/* --------------------------------- / Types -------------------------------- */
