import React from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import { Gift } from "lucide-react";
import Link from "next/link";
const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="stories1"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-2"
          />
          <span className="font-medium">Flower girl</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700">
          <Button variant="destructive">Celebrate</Button>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="stories1"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-2"
          />
          <span className="font-medium">Flower girl</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700">
          <Button variant="destructive">Celebrate</Button>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="stories1"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-2"
          />
          <span className="font-medium">Flower girl</span>
        </div>
        <div className="flex items-center gap-1 text-blue-700">
          <Button variant="destructive">Celebrate</Button>
        </div>
      </div>

      <div className="p-2 m-2 bg-gray-500 text-white shadow-sm rounded-md flex flex-col  gap-3">
        <div className="flex gap-2 items-center">
          <Gift />
          <span>Upcomming birthdays</span>
        </div>
        <Link href="/">
          <span>See other 20 upcomming birthdays</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
