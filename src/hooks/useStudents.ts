import { useState } from "react";

import { IStudentReadonly } from "../../types/domain";

export const useStudents = () => {
  const [students, setStudents] = useState<ReadonlyArray<IStudentReadonly>>([]);

  const addStudent = (newStudent: IStudentReadonly) => setStudents((prev) => [...prev, newStudent]);

  const updateStudent = (idx: number) => (updatedStudent: Partial<IStudentReadonly>) =>
    setStudents((prev) =>
      prev.map((student, studentIdx) => (studentIdx !== idx ? student : { ...student, ...updatedStudent }))
    );

  const removeStudent = (idx: number) =>
    setStudents((prev) => prev.filter((student, studentIdx) => studentIdx !== idx));

  return {
    students,
    addStudent,
    updateStudent,
    removeStudent,
  };
};
