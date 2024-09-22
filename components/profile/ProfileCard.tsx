import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const ProfileCard = async () => {
  const { userId } = auth();
  if (!userId) return null;
  console.log(userId);
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: { followers: true },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user.cover || "/noCover.png"}
          alt="cover"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full object-fit w-20 h-20 absolute left-0 right-0 mx-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Image
              src="https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-fit w-3 h-3"
            />
            <Image
              src="https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-fit w-3 h-3"
            />
            <Image
              src="https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-fit w-3 h-3"
            />
          </div>
          <span className="text-sm">{user._count.followers} Followers</span>
        </div>
        <Link href={`/profile/${user.username}`}>
          <Button className="bg-blue-600 mt-4">My Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
