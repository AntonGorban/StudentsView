import { IStudentReadonly } from "../../types/domain";
import { useStudentForm } from "./useStudentForm";

export const useNewStudentFormLogic: UseNewStudentFormLogic = (createStudent) => {
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
  } = useStudentForm();

  const submit = () => createStudent({ surname, name, patronymic, specialty, course, isBudget });

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
    submit,
  };
};

interface UseNewStudentFormLogic {
  (createStudent: (newStudent: IStudentReadonly) => void): IStudentReadonly & {
    readonly changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changeSurname: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changePatronymic: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changeSpecialty: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly changeCourse: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly toggleIsBudget: () => void;
    readonly submit: () => void;
  };
}
