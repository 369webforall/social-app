import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}

      <div className="flex items-center justify-between text-gray-500">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1725958171072-808f8b8bd313?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1725905507743-30f903ebbf2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
            alt="add icon"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Big motel</span>
        </div>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus atque temporibus omnis ratione delectus sunt quos tempora facere aspernatur quaerat!"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero eveniet cupiditate optio laborum modi libero, maiores exercitationem id quaerat aliquid, officiis earum fuga nam nostrum voluptatem, adipisci doloribus deserunt."}
        </p>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
};

export default Ad;
