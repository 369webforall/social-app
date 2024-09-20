import React from "react";
import Link from "next/link";
import { User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import UpdateUser from "./UpdateUser";

import {
  MapPinned,
  School,
  Briefcase,
  Link as WebLink,
  CalendarDays,
} from "lucide-react";
import UserInfoCardInteraction from "../rightMenu/UserInfoCardInteraction";
import prisma from "@/prisma/client";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);
    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
        )}
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-xs">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        <div className="flex gap-2">
          <MapPinned />
          <span>
            Living in <b>{user.city && user.city}</b>
          </span>
        </div>
        <div className="flex gap-2">
          <School />
          <span>
            Went to <b>{user.school && user.school}</b>
          </span>
        </div>
        <div className="flex gap-2">
          <Briefcase />
          <span>
            work at <b>{user.work && user.work}</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <WebLink />
            <span>Webiste: {user.website && user.website}</span>
          </div>

          <div className="flex items-center gap-1">
            <CalendarDays /> Joined <b>{formattedDate}</b>
          </div>
        </div>
        {currentUserId && currentUserId !== user.id && (
          <UserInfoCardInteraction
            userId={user.id}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
