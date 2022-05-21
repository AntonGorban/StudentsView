import React from "react";

import { IStudentReadonly } from "../../types/domain";
import { useNewStudentFormLogic } from "../hooks/useNewStudentFormLogic";
import { StudentFormModal } from "./StudentFormModal";

export const NewStudentForm: React.FC<NewStudentFormProps> = ({ createStudent, isOpen, close }) => {
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
  } = useNewStudentFormLogic(createStudent);

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
      title={"Создание нового студента"}
      isOpen={isOpen}
      close={close}
      submitText={"Создать нового студента"}
    />
  );
};

/* ---------------------------------- Types --------------------------------- */

interface NewStudentFormProps {
  readonly createStudent: (newStudent: IStudentReadonly) => void;
  readonly isOpen: boolean;
  readonly close: () => void;
}

/* --------------------------------- / Types -------------------------------- */
