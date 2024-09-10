import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
const Post = () => {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex flex-col gap-8">
        <div className="flex  items-center gap-4 bg-slate-100 p-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span>Elon Musk</span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Image
            src="https://images.unsplash.com/photo-1725582205921-7d681ebca2a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="reading habit"
            width={400}
            height={400}
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat
          blanditiis est numquam, perspiciatis enim doloribus sequi ullam maxime
          obcaecati, veniam explicabo laboriosam fuga repudiandae cupiditate
          soluta aliquid quaerat sapiente?
        </p>
      </div>
    </div>
  );
};

export default Post;
