import { useState } from "react";

export const useNumberValue: UseNumberValue = (initial) => {
  const [value, setValue] = useState<number>(initial ?? 0);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(Number(event.target.value.replace(/[^\d]/gim, "")));

  return [value, changeValue];
};

interface UseNumberValue {
  (initial?: number): [value: number, changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void];
}
