import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span>Elon Musk</span>
        </div>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      {/* description */}
      <div className="flex flex-col  gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.unsplash.com/photo-1725582205921-7d681ebca2a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="reading habit"
            fill
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

      {/* interaction */}

      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              200 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              200 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt="share"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              50 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
