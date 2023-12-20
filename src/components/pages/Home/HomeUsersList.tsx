import HomeUserItem from "@/components/pages/Home/HomeUserItem";
import type { User } from "@/services/api/users";

export default function HomeUsersList({ users }: { users: User[] }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <HomeUserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
