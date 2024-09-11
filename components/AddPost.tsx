import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex flex-col gap-4 justify-center text-sm">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {/* POST */}
      <div className="flex-1">
        {/* Text input */}
        <div className="flex gap-4">
          <textarea
            name="post"
            id=""
            placeholder="What is happening!!"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* post options */}
        <div className="flex items-center flex-wrap gap-4 mt-4 text-gray-400">
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image src="/addImage.png" alt="add photo" width={20} height={20} />
            <span>photo</span>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="add video" width={20} height={20} />
            <span>Video</span>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="add event" width={20} height={20} />
            <span>Event</span>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <Image src="/poll.png" alt="add event" width={20} height={20} />
            <span>Poll</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
