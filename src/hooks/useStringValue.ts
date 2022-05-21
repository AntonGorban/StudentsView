import { useState } from "react";

export const useStringValue: UseStringValue = (initial) => {
  const [value, setValue] = useState<string>(initial ?? "");

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  return [value, changeValue];
};

interface UseStringValue {
  (initial?: string): [value: string, changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void];
}
