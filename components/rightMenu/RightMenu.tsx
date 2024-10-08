import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInfoCard from "../profile/UserInfoCard";
import UserMediaCard from "../profile/UserMediaCard";
import { User } from "@prisma/client";
import { Suspense } from "react";
const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-8">
      {user ? (
        <>
          <Suspense fallback="loading....">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading....">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}

      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
