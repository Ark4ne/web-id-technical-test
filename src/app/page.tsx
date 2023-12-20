import HomeUsersList from "@/components/pages/Home/HomeUsersList";
import HomeCheckedAverage from "@/components/pages/Home/HomeCheckedAverage";
import { fetchUsers } from "@/services/api/users";
import { CheckedProvider } from "@/stores/users/checked";

export default async function Page() {
  const users = await fetchUsers();

  return (
    <main className="flex max-h-svh min-h-svh h-svh overflow-hidden p-24">
      <CheckedProvider>
        <div
          className={
            "flex-grow basis-full overflow-scroll border dark:border-gray-600 rounded"
          }
        >
          <HomeUsersList users={users} />
        </div>
        <div
          className={"flex flex-grow basis-full items-center justify-center"}
        >
          <HomeCheckedAverage />
        </div>
      </CheckedProvider>
    </main>
  );
}
