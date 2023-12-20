"use client";

import { useContext, useId } from "react";
import { CheckedDispatchContext } from "@/stores/users/checked";
import type { User } from "@/services/api/users";

export default function HomeUserItem({ user }: { user: User }) {
  const id = useId();

  const checkedDispatch = useContext(CheckedDispatchContext);

  return (
    <div className={"flex items-center py-2 ps-3"}>
      <input
        id={id}
        type="checkbox"
        onChange={() => checkedDispatch!({ type: "toggle", id: user.id })}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={id}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {user.name}
      </label>
    </div>
  );
}
