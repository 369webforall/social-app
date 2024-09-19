import React from "react";
import Link from "next/link";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}

      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;
