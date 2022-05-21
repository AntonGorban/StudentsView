export interface IStudent {
  /**
   * Фамилия
   */
  surname: string;

  /**
   * Имя
   */
  name: string;

  /**
   * Отчество
   */
  patronymic: string;

  /**
   * Специальность
   */
  specialty: string; // enum

  /**
   * Курс
   */
  course: number;

  /**
   * Бюджет или контракт
   * `true` - Бюджет
   * `false` - Контракт
   */
  isBudget: boolean;
}

export type IStudentReadonly = Readonly<IStudent>;

export interface ISimpleStudent extends Omit<IStudent, "surname" | "name" | "patronymic"> {
  /**
   * ФИО
   * Фамилия + Имя + Отчество
   */
  fullName: string;
}

export type ISimpleStudentReadonly = Readonly<ISimpleStudent>;
