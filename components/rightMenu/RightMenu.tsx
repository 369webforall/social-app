import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInfoCard from "../profile/UserInfoCard";
import UserMediaCard from "../profile/UserMediaCard";
const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-8">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}

      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
