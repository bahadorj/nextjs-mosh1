"use client";
<<<<<<< HEAD
import React, { use } from "react";

const New = () => {
  return <button className="btn btn-primary">Create</button>;
=======
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
>>>>>>> b1a4d3aed87d4a063fe46d86018aea08a1a7c2bf
};

export default New;
