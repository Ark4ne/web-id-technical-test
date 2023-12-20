export type User = {
  id: number;
  name: string;
};

export async function fetchUsers() {
  const request = fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/users");

  const response = await request;

  return (await response.json()) as User[];
}
