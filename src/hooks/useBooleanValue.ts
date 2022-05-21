import { useState } from "react";

export const useBooleanValue: UseBooleanValue = (initial) => {
  const [value, setValue] = useState<boolean>(initial ?? false);

  const toggleValue = () => setValue((prev) => !prev);

  return [value, toggleValue];
};

interface UseBooleanValue {
  (initial?: boolean): [value: boolean, toggleValue: () => void];
}
