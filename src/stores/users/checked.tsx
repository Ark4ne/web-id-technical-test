"use client";

import { createContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";
import type { User } from "@/services/api/users";

export const CheckedContext = createContext<number[] | null>(null);
export const CheckedDispatchContext = createContext<Dispatch<{
  type: string;
  id: User["id"];
}> | null>(null);

function checkedReducer(
  checked: User["id"][],
  { type, id }: { type: string; id: User["id"] },
) {
  switch (type) {
    case "toggle": {
      if (checked.includes(id)) return checked.filter((check) => check !== id);

      return [...checked, id];
    }
    default: {
      throw Error("Unknown action: " + type);
    }
  }
}

export function CheckedProvider({ children }: { children: ReactNode }) {
  const [checked, dispatch] = useReducer(checkedReducer, []);

  return (
    <CheckedContext.Provider value={checked}>
      <CheckedDispatchContext.Provider value={dispatch}>
        {children}
      </CheckedDispatchContext.Provider>
    </CheckedContext.Provider>
  );
}
