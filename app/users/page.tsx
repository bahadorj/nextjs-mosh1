import UserTable from "./UserTable";
import Link from "next/link";
<<<<<<< HEAD
=======
import { Suspense } from "react";
>>>>>>> b1a4d3aed87d4a063fe46d86018aea08a1a7c2bf
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
<<<<<<< HEAD
      <Link href="/users/new" className="btn">
        New
      </Link>
      <UserTable sortOrder={sortOrder} />
=======
      <Link href="users/new" className="btn">
        New User
      </Link>

      <Suspense fallback="loading...">
        <UserTable sortOrder={sortOrder} />
      </Suspense>
>>>>>>> b1a4d3aed87d4a063fe46d86018aea08a1a7c2bf
    </>
  );
};

export default Users;
