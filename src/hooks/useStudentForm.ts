import React from "react";

import { IStudentReadonly } from "../../types/domain";
import { useBooleanValue } from "./useBooleanValue";
import { useNumberValue } from "./useNumberValue";
import { useStringValue } from "./useStringValue";

export const useStudentForm: UseStudentForm = (initial) => {
  const [surname, changeSurname] = useStringValue(initial?.surname);

  const [name, changeName] = useStringValue(initial?.name);

  const [patronymic, changePatronymic] = useStringValue(initial?.patronymic);

  const [specialty, changeSpecialty] = useStringValue(initial?.specialty);

  const [course, changeCourse] = useNumberValue(initial?.course);

  const [isBudget, toggleIsBudget] = useBooleanValue(initial?.isBudget);

  return {
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
  };
};

/* ---------------------------------- Types --------------------------------- */

interface UseStudentForm {
  (initial?: IStudentReadonly): IStudentReadonly & {
    readonly changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changeSurname: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changePatronymic: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changeSpecialty: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changeCourse: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly toggleIsBudget: () => void;
  };
}

/* --------------------------------- / Types -------------------------------- */
