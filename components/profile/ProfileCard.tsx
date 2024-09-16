import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          width={48}
          height={48}
          className="rounded-full object-fit w-20 h-20 absolute left-0 right-0 mx-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-semibold">Robert Welker</h1>
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
          <span className="text-sm">5000 Followers</span>
        </div>
        <Button className="bg-blue-600 mt-4">My Profile</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
