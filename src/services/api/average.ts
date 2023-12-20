import type { User } from "@/services/api/users";

type AverageResponse = {
  average?: number;
  error?: string;
};

export async function fetchAverage(ids: User["id"][]) {
  const request = fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/average?ids=" + ids.join(","),
  );

  const response = await request;

  return (await response.json()) as AverageResponse;
}
