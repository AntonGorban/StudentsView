import React from "react";
import styled from "styled-components";

import { IStudentReadonly } from "../../types/domain";
import { Input } from "./Input";
import { InputBoolean } from "./InputBoolean";
import { InputNumber } from "./InputNumber";

export const StudentForm = React.memo<StudentFormProps>(
  ({
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
    submitText,
  }) => {
    return (
      <SForm>
        <Input value={surname} onChange={changeSurname} placeholder="Фамилия" />

        <Input value={name} onChange={changeName} placeholder="Имя" />

        <Input value={patronymic} onChange={changePatronymic} placeholder="Отчество" />

        <Input value={specialty} onChange={changeSpecialty} placeholder="Специальность" />

        <InputNumber value={course} onChange={changeCourse} placeholder="Курс" />

        <InputBoolean value={isBudget} onChange={toggleIsBudget} placeholder="Бюджет" />

        <button type="submit" onClick={submit}>
          {submitText ?? "Подтвердить"}
        </button>
      </SForm>
    );
  },

  (prevProps, nextProps) =>
    prevProps.surname === nextProps.surname &&
    prevProps.name === nextProps.name &&
    prevProps.patronymic === nextProps.patronymic &&
    prevProps.specialty === nextProps.specialty &&
    prevProps.course === nextProps.course &&
    prevProps.isBudget === nextProps.isBudget &&
    prevProps.submitText === nextProps.submitText
);

/* ---------------------------- Styled components --------------------------- */

const SForm = styled.form.attrs({
  onSubmit: (e) => e.preventDefault(),
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  width: 95%;
`;

/* --------------------------- / Styled components -------------------------- */

/* ---------------------------------- Types --------------------------------- */

interface StudentFormProps extends IStudentReadonly {
  readonly changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly changeSurname: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly changePatronymic: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly changeSpecialty: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly changeCourse: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly toggleIsBudget: () => void;

  readonly submit: () => void;
  readonly submitText?: string;
}

/* --------------------------------- / Types -------------------------------- */
