import UserTable from "./UserTable";
import Link from "next/link";
import { Suspense } from "react";
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="users/new" className="btn">
        New User
      </Link>

      <Suspense fallback="loading...">
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default Users;
