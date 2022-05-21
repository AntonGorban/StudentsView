import React from "react";

import { IStudentReadonly } from "../../types/domain";
import { Modal } from "./Modal";
import { StudentForm } from "./StudentForm";

export const StudentFormModal = React.memo<StudentFormModalProps>(
  ({ title, isOpen, close, ...formProps }) => (
    <Modal title={title} isOpen={isOpen} close={close}>
      <StudentForm {...formProps} />
    </Modal>
  ),

  (prevProps, nextProps) =>
    prevProps.surname === nextProps.surname &&
    prevProps.name === nextProps.name &&
    prevProps.patronymic === nextProps.patronymic &&
    prevProps.specialty === nextProps.specialty &&
    prevProps.course === nextProps.course &&
    prevProps.isBudget === nextProps.isBudget &&
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.submitText === nextProps.submitText &&
    prevProps.title === nextProps.title
);

/* ---------------------------------- Types --------------------------------- */

interface StudentFormModalProps extends IStudentReadonly {
  readonly title: string;
  readonly isOpen: boolean;
  readonly close: () => void;

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
