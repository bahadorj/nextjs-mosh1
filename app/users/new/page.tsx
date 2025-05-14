"use client";
import { useRouter } from "next/navigation";
const New = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          router.push("/users");
        }}
      >
        Create
      </button>
      ;
    </>
  );
};

export default New;
