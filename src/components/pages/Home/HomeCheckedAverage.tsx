"use client";

import Image from "next/image";
import { useContext } from "react";
import { useAsync } from "react-use";
import { fetchAverage } from "@/services/api/average";
import { CheckedContext } from "@/stores/users/checked";

export default function HomeCheckedAverage() {
  const checkedContext = useContext(CheckedContext);

  const averageAsync = useAsync(async () => {
    const data = await fetchAverage(checkedContext!);

    if (data.error) throw Error(data.error);

    return new Date().getFullYear() - Number(data.average);
  }, [checkedContext]);

  let result;

  if (!checkedContext?.length) {
    result = <p>Sélectionnez des utilisateurs pour avoir leur âge moyen</p>;
  } else if (averageAsync.loading) {
    result = (
      <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
        loading...
      </div>
    );
  } else if (averageAsync.error) {
    result = <p>{averageAsync.error.message}</p>;
  } else {
    result = <p className={'text-2xl font-bold'}>{Math.round(averageAsync.value! * 100) / 100} ans</p>;
  }

  return (
    <div className={"flex flex-col items-center"}>
      <Image
        src={"/images/birthday-cake-cake.svg"}
        alt={"Birthday Cake"}
        width={100}
        height={100}
      />
      <p className={'my-4'}>Âge moyen des personnes séléctionnés</p>
      {result}
    </div>
  );
}
