import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
const UserMediaCard = ({ user }: { user: User }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex items-center gap-2 flex-wrap">
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1725976404931-84e8421d9710?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee"
          width={50}
          height={50}
          className="rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default UserMediaCard;
